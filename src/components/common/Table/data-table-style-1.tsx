"use client";

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
} from "@tanstack/react-table";
import * as React from "react";

import { Loader2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { cn, PaginationState } from "../../../helpers";

import { ScrollArea } from "../../ui/scroll-area";

import { DataTablePagination } from "./data-table-pagination";

// import { DataTablePagination } from "../components/data-table-pagination"
// import { DataTableToolbar } from "../components/data-table-toolbar"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading: boolean;
  hidePaggination?: boolean;
  paggination?: PaginationState;
  dataQAkey?: string;
  onchange?: (val: any) => void;

  pageIndexChange?: (a: any, b: any) => void;
  height?: string;

  tableRowSelection?: boolean;
}

export function DataTable_2<TData, TValue>({
  columns,
  data,
  isLoading,
  hidePaggination,
  paggination,
  dataQAkey,
  onchange,
  pageIndexChange,
  height,
  tableRowSelection,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);
  let { page, items_per_page, total_records, total }: any = paggination;

  const [{ pageIndex, pageSize }, setPagination] = React.useState<any>({
    pageIndex: 1,
    pageSize: 20,
  });

  React.useEffect(() => {
  
    paggination && pageIndexChange && pageIndexChange(pageIndex, pageSize);
    return () => {};
  }, [pageIndex, pageSize]);

  const pagination = React.useMemo(
    () => ({
      pageIndex: page - 1,
      pageSize: items_per_page,
    }),
    [page, items_per_page]
  );

  const pageCounts = React.useMemo(() => (total ? Number(total) : 1), [total]);

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
    // debugTable: true,
    // debugHeaders: true,
    // debugColumns: true,
  });

  React.useEffect(() => {
    const selectedRows: any[] | undefined =
      table.getSelectedRowModel()?.flatRows;
    const selectedData =
      selectedRows?.filter((row) => row.getIsSelected()) ?? [];
    if (onchange) {
      onchange(selectedData.map((e: any) => e?.original));
    }
  }, [table.getSelectedRowModel()]);

 
  React.useEffect(() => {
    const selectedRows: any[] | undefined =
      table.getSelectedRowModel()?.flatRows;
    if (tableRowSelection) {
      table?.toggleAllRowsSelected(false);
    }
  }, [tableRowSelection]);

  React.useEffect(() => {
    table?.toggleAllRowsSelected(false);
  }, [data]);

  return (
    <div className="w-full space-y-4 h-full  border border-gray-300 rounded-lg bg-white relative">
      {/* <DataTableToolbar table={table} /> */}
      <div
        className={cn(
          "w-full absolute rounded-md   scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-slate-100 scrollbar-h-2 overflow-x-scroll h-[90%]",
          { "h-full": hidePaggination }
        )}
      >
        <ScrollArea
          className={`w-full w-max min-w-full  h-full  relative rounded-md`}
        >
          <Table className={`w-full  h-full  rtl:text-right  relative`}>
            <TableHeader
              className={` text-xs sticky top-0 left-0 right-0 z-9999 `}
            >
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="">
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        colSpan={header.colSpan}
                        className={`h-10 text-center cursor-default  font-semibold text-[13px] text-[#667085] bg-white  `}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="">
              {table.getRowModel().rows?.length && !isLoading ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className={` text-sm font-normal text-black text-center hover:bg_green_1 font-Roboto  odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800  dark:border-gray-700 hover:bg-gray-200" h-auto  z-99`}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className=" border-b border-[#EAECF0]  max-w-[200px] break-words"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow className="">
                  <TableCell colSpan={columns.length} className=" text-center">
                    {isLoading ? (
                      <div
                        className={`flex justify-center items-center `}
                      >
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                        <span>Loading...</span>
                      </div>
                    ) : (
                      "No results."
                    )}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
      {/* {table.getRowModel().rows?.length && !isLoading ? ( */}
      <div className="w-full absolute bottom-0 z-999 px-2">
        {!hidePaggination && paggination ? (
          <DataTablePagination table={table} pagina={paggination} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
