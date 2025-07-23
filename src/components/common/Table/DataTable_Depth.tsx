"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../ui/table"
import { Loader2 } from "lucide-react"
import { ScrollArea } from "../../ui/scroll-area"
import { PaginationState } from "src/helpers"
import { DataTablePagination } from "./data-table-pagination"





interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[],
    isLoading: boolean,
    hidePaggination?: boolean,
    paggination?: PaginationState,
    dataQAkey?: string
    onchange?: (val: any) => void,
    pageIndexChange?: (a: any, b: any) => void
    textColor?: string | undefined
    height?: string
}

export function DataTable_Depth<TData, TValue>({
    columns,
    data,
    isLoading,
    hidePaggination,
    paggination,
    dataQAkey,
    onchange,
    pageIndexChange,
    textColor,
    height
}: DataTableProps<TData, TValue>) {
    const [rowSelection, setRowSelection] = React.useState({})
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [sorting, setSorting] = React.useState<SortingState>([])

    const { page, items_per_page, total_records, total }: any = paggination

    const [{ pageIndex, pageSize }, setPagination] = React.useState<any>({
        pageIndex: 0,
        pageSize: 50,
    })




    React.useEffect(() => {
      
        pageIndexChange && pageIndexChange(pageIndex, pageSize)
   
        return () => { }
    }, [pageIndex, pageSize])

    const pagination = React.useMemo(
        () => ({
            pageIndex: page - 1,
            pageSize: items_per_page,
        }),
        [page, items_per_page]
    )

    const pageCounts = React.useMemo(() => total ? Number(total) : 1, [total])

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters,
            pagination,
        },
        pageCount: pageCounts,
        enableRowSelection: true,
        manualPagination: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        onPaginationChange: setPagination,
    })

    React.useEffect(() => {
        const selectedRows: any[] | undefined = table.getSelectedRowModel()?.flatRows;
        const selectedData = selectedRows?.filter(row => row.getIsSelected()) ?? [];
        if (onchange) {
            onchange(selectedData);
        }
    }, [table.getSelectedRowModel()]);


    return (
        <div className="space-y-4">
            {/* <DataTableToolbar table={table} /> */}
            <div className="rounded-md ">
                <ScrollArea className={`w-full  ${height !== undefined ? height : 'h-[220px]'} relative rounded-md `}>
                    <Table className={`w-full    rtl:text-right  relative border-none`} id={dataQAkey}>
                        <TableHeader className={` text-xs sticky top-0 left-0 right-0 `}>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id} className="border-none">
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id} colSpan={header.colSpan} className={`h-0 text-center cursor-default font-normal text-[12px] text-[#8D8D8D] bg-white  `}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                        className={` text-sm font-normal ${textColor !== undefined ? textColor : 'text-black'}  text-center hover:bg_green_1 font-Roboto border-none   z-99`}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        {isLoading ? <div className='flex justify-center items-center '>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> <span>Loading...</span>
                                           
                                        </div> : "No results."}
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </ScrollArea>
            </div>
            <div className="w-full  ">
                {!hidePaggination && paggination ? <DataTablePagination table={table} pagina={paggination} /> : null}
            </div>
        </div>
    )
}
