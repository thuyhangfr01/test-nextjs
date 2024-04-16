import { TProject } from "@/common";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TProject>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "project_name",
    header: "Project name",
  },
  {
    accessorKey: "project_domain",
    header: "Project domain",
  },
  {
    accessorKey: "last_accessed",
    header: "Last accessed",
    cell: ({ row }) => {
      const date = new Date(row.getValue("last_accessed"));
      const formatted = date.toLocaleDateString();
      return <div>{formatted}</div>;
    },
  },
];
