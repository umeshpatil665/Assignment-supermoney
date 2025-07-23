import { ColumnDef } from "@tanstack/react-table";
import { UserFormData } from "./moduls";

export const column: ColumnDef<UserFormData>[] = [
  {
    accessorKey: "fullName",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "contactNumber",
    header: "Contact Number",
  },
  {
    accessorKey: "state",
    header: "Address",
    cell({
      row: {
        original: { addressLine, city, pincode, state },
      },
    }) {
      return (
        <div className="text-sm text-gray-800 leading-snug space-y-1">
          <div className="font-medium">{addressLine}</div>
          <div className="text-gray-600">
            <span className="font-semibold">State:</span> {state}, <span className="font-semibold">City:</span> {city}
          </div>
          <div className="text-gray-600">
            <span className="font-semibold">Pincode:</span> {pincode}
          </div>
        </div>
      );
    },
  },
];
