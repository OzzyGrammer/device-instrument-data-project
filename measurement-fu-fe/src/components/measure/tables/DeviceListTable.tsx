"use client";

import IndeterminateCheckbox from "@/components/inputs/IndeterminateCheckbox";
import FilteredTable from "@/components/tables/FilteredTable";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { useMemo } from "react";
type Props = {
  data: RowDataForDevice[];
};

const DeviceListTable = ({ data }: Props) => {
  const columns = useMemo<ColumnDef<RowDataForDevice, any>[]>(
    () => [
      {
        header: "Measurement Info",
        footer: (props) => props.column.id,
        columns: [
          {
            id: "select",
            header: ({ table }) => (
              <IndeterminateCheckbox
                {...{
                  checked: table.getIsAllRowsSelected(),
                  indeterminate: table.getIsSomeRowsSelected(),
                  onChange: table.getToggleAllRowsSelectedHandler(),
                }}
              />
            ),
            cell: ({ row }) => (
              <div className="px-1">
                <IndeterminateCheckbox
                  {...{
                    checked: row.getIsSelected(),
                    disabled: !row.getCanSelect(),
                    indeterminate: row.getIsSomeSelected(),
                    onChange: row.getToggleSelectedHandler(),
                  }}
                />
              </div>
            ),
          },
          {
            accessorKey: "id",
            cell: (info) => (
              <Link
                className="text-[#3eb4e4] hover:underline"
                href={`/dashboard/device-data/${info.row.original.id}`}
              >
                {info.getValue()}
              </Link>
            ),
            header: () => "Id",
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.timestamp,
            id: "timestamp",
            cell: (info) => info.getValue(),
            header: () => "Timestamp",
            footer: (props) => props.column.id,
          },

          {
            accessorFn: (row) => row.parameter,
            id: "parameter",
            cell: (info) => info.getValue(),
            header: () => "Parameter",
            footer: (props) => props.column.id,
          },
        ],
      },
      {
        header: "Device Data Set",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorFn: (row) => row.type,
            id: "type",
            cell: (info) => info.getValue(),
            header: () => "Type",
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.value,
            id: "value",
            cell: (info) => (
              <span
                className={`${
                  info.row.original.type >= "text"
                    ? "text-[#df4759]"
                    : undefined
                }`}
              >
                {info.getValue()}
              </span>
            ),
            header: () => "Value",
            footer: (props) => props.column.id,
          },
        ],
      },
    ],
    [],
  );
  return <FilteredTable columns={columns} data={data} />;
};
export default DeviceListTable;
