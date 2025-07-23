import React, { useMemo } from "react";
import { PaginationState } from "src/helpers";
import { DataTable_2 } from "./data-table-style-1";
import { DataTable_Depth } from "./DataTable_Depth";


type Props = {
  columns: any;
  data: any;
  hidePaggination?: boolean;
  paggination?: PaginationState;
  tableStyle?: "dashboard" | "default";
  isLoading: boolean;
  dataQAkey?: string;
  onchange?: (val: any) => void;
  pageIndexChange?: (val: any, b: any) => void;
  textColor?: string | undefined;
  height?: string;
  tableRowSelection?: boolean;
};

const DatatableMain = ({
  columns,
  data,
  paggination,
  pageIndexChange,
  tableStyle = "default",
  tableRowSelection,
  hidePaggination,
  isLoading,
  dataQAkey,
  onchange,
  textColor,
  height,
}: Props) => {
  const TableOptions = useMemo(
    () => ({
      columns,
      data,
      paggination,
      tableRowSelection,
      isLoading,
      hidePaggination,
      dataQAkey,
      onchange,
      pageIndexChange,
      textColor,
      height,
    }),
    [
      columns,
      height,
      textColor,
      data,
      paggination,
      pageIndexChange,
      isLoading,
      hidePaggination,
      dataQAkey,
      onchange,
      tableRowSelection,
    ]
  );

  return (
    <div className="w-full h-full">
      {tableStyle === "default" ? (
        <DataTable_2 {...TableOptions} />
      ) : (
        <DataTable_Depth {...TableOptions} />
      )}
    </div>
  );
};

export default DatatableMain;
