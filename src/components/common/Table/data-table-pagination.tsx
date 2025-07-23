import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { PaginationState } from "../../../helpers";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  pagina: PaginationState;
}

export function DataTablePagination<TData>({
  table,
  pagina,
}: DataTablePaginationProps<TData>) {
  const [firstPage, setFirstPage] = useState<boolean>(true);
  const { page, items_per_page, total_records, total, last_page } = pagina;



  const startIndex =
    table.getState().pagination.pageIndex *
      table.getState().pagination.pageSize +
    1;
  const endIndex = Math.min(
    (table.getState().pagination.pageIndex + 1) *
      table.getState().pagination.pageSize,
    parseInt(total_records || "0", 20)
  );
  
  return (
    // <div className="w-full flex items-center justify-between  ">
    //   <div className=" hidden lg:flex flex-1 text-sm text-muted-foreground">
    //     Showing {startIndex} to {endIndex} of {total_records} rows
    //   </div>
    //   <div className="flex items-center md:space-x-6 lg:space-x-8">
    //     <div className="flex items-center space-x-2">
    //       <p className="text-sm font-medium hidden md:flex">Rows per page</p>
    //       <Select
    //         value={`${table.getState().pagination.pageSize}`}
    //         onValueChange={(value: any) => {
    //           table.setPageSize(Number(value))

    //         }}
    //       >
    //         <SelectTrigger className="h-8 w-[70px]">
    //           <SelectValue placeholder={table.getState().pagination.pageSize} />
    //         </SelectTrigger>
    //         <SelectContent side="top">
    //           {[20, 30, 50, 100].map((pageSize) => (
    //             <SelectItem key={pageSize} value={`${pageSize}`}>
    //               {pageSize}
    //             </SelectItem>
    //           ))}
    //         </SelectContent>
    //       </Select>
    //     </div>
    //     <div className="flex w-[100px] items-center justify-center text-sm font-medium whitespace-nowrap">
    //       Page {table.getState().pagination.pageIndex + 1} of{" "}
    //       {table.getPageCount()}
    //     </div>
    //     <div className="flex items-center space-x-2">
    //       <Button
    //         // variant="outline"
    //         className="hidden h-8 w-8 p-0 lg:flex"
    //         onClick={() => table.setPageIndex(0)}
    //         disabled={!table.getCanPreviousPage()}
    //       >
    //         <span className="sr-only">Go to first page</span>
    //         <DoubleArrowLeftIcon className="h-4 w-4" />
    //       </Button>
    //       <Button
    //         // variant="outline"
    //         className="h-8 w-8 p-0"
    //         onClick={() => table.previousPage()}
    //         disabled={!table.getCanPreviousPage()}
    //       >
    //         <span className="sr-only">Go to previous page</span>
    //         <ChevronLeftIcon className="h-4 w-4" />
    //       </Button>
    //       <Button
    //         // variant="outline"
    //         className="h-8 w-8 p-0"
    //         onClick={() => table.nextPage()}
    //       // disabled={!table.getCanNextPage()}
    //       >
    //         <span className="sr-only">Go to next page</span>
    //         <ChevronRightIcon className="h-4 w-4" />
    //       </Button>
    //       <Button
    //         // variant="outline"
    //         className="hidden h-8 w-8 p-0 lg:flex"
    //         onClick={() => table.setPageIndex(table.getPageCount() - 1)}
    //         disabled={!table.getCanNextPage()}
    //       >
    //         <span className="sr-only">Go to last page</span>
    //         <DoubleArrowRightIcon className="h-4 w-4" />
    //       </Button>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full flex flex-wrap items-center justify-between gap-4 bg-white lg:py-1">
      {/* Info Section (Hidden on small screens) */}

      {/* Controls Section */}
      <div className="w-full flex items-center justify-between space-x-4 md:space-x-6">
        <div className="hidden md:flex text-sm text-muted-foreground whitespace-normal">
          Showing {startIndex} to {endIndex} of {total_records} rows
        </div>
        <div className="flex items-center space-x-4  justify-between lg:justify-normal">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium hidden md:block">Rows per page</p>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => table.setPageSize(Number(value))}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue
                  placeholder={table.getState().pagination.pageSize}
                />
              </SelectTrigger>
              <SelectContent side="top">
                {[20, 30, 50, 100].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Page Number Display */}
          <div className="text-sm font-medium whitespace-nowrap">
            {/* Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()} */}
            Page {page} of {last_page}
          </div>

          {/* Pagination Buttons */}
          <div className="flex items-center justify-end space-x-2">
            <Button
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(1)}
              disabled={page === 1}
            >
              <DoubleArrowLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              className="h-8 w-8 p-0"
              onClick={() => {
              
                // if (page != last_page) {
                  table.previousPage();
                // }
              }}
              disabled={page === 1}
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              className="h-8 w-8 p-0"
              onClick={() => {
                table.nextPage();
              }}
              disabled={page === last_page}
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
            <Button
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(Number(last_page))}
              disabled={page === last_page}
            >
              <DoubleArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* Rows Per Page Selector */}
      </div>
    </div>
  );
}
