import { ColumnDef } from "@tanstack/react-table";
import {
  HiArrowsUpDown,
  HiOutlineArrowLeftCircle,
  HiOutlineArrowRightCircle,
} from "react-icons/hi2";
import moment from "moment";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import { moveColumnsDown, moveColumnsUp } from "@/lib/utils";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { BiCheck, BiUser } from "react-icons/bi";
import { MdIncompleteCircle, MdPending } from "react-icons/md";
import { TransactionType } from "@/types/transaction";

const getBadgeIcon = (status: string) => {
  switch (status) {
    case "Success":
      return <FaCheck />;
    case "Incomplete":
      return <MdIncompleteCircle />;
    case "Pending Payment":
      return <MdPending />;
    case "Pending Confirmation":
      return <MdPending />;
    case "Failed":
      return <ImCross size={10} />;
    default:
      return <BiCheck />;
  }
};

export const columns: ColumnDef<TransactionType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Restaurant Name",
    header: ({ column }) => {
      return (
        <div className="flex justify-between py-2 text-left uppercase">
          Restaurant Name
          <HiArrowsUpDown
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },

    cell: ({ row }) => {
      return (
        <div className="flex flex-row gap-4 items-center">
          <Avatar className="h-8 w-8">
            <AvatarFallback>
              <BiUser />
            </AvatarFallback>
          </Avatar>
          <div className="font-medium text-left ">
            {row.original.restaurant.name}
          </div>
        </div>
      );
    },
    footer: ({ column, table }) => {
      return (
        <div className="flex flex-row gap-4">
          <HiOutlineArrowLeftCircle
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowLeftCircle>
          <HiOutlineArrowRightCircle
            className="w-4 h-4 mr-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowRightCircle>
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <div className="flex justify-between py-2 text-left uppercase">
          Amount
          <HiArrowsUpDown
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="font-medium text-left">{row.original.total}&nbsp;$</div>
      );
    },
    footer: ({ column, table }) => {
      return (
        <div className="flex flex-row gap-4">
          <HiOutlineArrowLeftCircle
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowLeftCircle>
          <HiOutlineArrowRightCircle
            className="w-4 h-4 mr-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowRightCircle>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div className="flex justify-between py-2 text-left uppercase w-32">
          Status
          <HiArrowsUpDown
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
    cell: ({ row }) => {
      const colors = {
        Finished: "bg-green-200 text-green-700",
        "Pending Payment": "bg-yellow-200 text-yellow-700",
        "Pending Confirmation": "bg-yellow-200 text-yellow-700",
        Incomplete: "bg-gray-200 text-gray-700",
        Failed: "bg-red-200 text-red-700",
      };

      return (
        <Badge
          variant="outline"
          className={`${
            colors[row.original.status]
          } border-0 font-semibold capitalize justify-center w-3/4 py-1 rounded-full`}
        >
          <div className="w-full items-center  flex justify-between flex-row">
            {getBadgeIcon(row.original.status.toString())}
            <span>
              {row.original.status === "Pending Confirmation" ||
              row.original.status === "Pending Payment"
                ? "Pending"
                : row.original.status}
            </span>
          </div>
        </Badge>
      );
    },
    footer: ({ column, table }) => {
      return (
        <div className="flex flex-row gap-4">
          <HiOutlineArrowLeftCircle
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowLeftCircle>
          <HiOutlineArrowRightCircle
            className="w-4 h-4 mr-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowRightCircle>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "paymentMethod",
    header: () => {
      return (
        <div className="flex justify-between py-2 text-left uppercase">
          Payment
        </div>
      );
    },
    cell: () => {
      return <div className="font-medium text-left">Stripe</div>;
    },
    footer: ({ column, table }) => {
      return (
        <div className="flex flex-row gap-4">
          <HiOutlineArrowLeftCircle
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowLeftCircle>
          <HiOutlineArrowRightCircle
            className="w-4 h-4 mr-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowRightCircle>
        </div>
      );
    },
  },
  {
    accessorKey: "products",
    header: ({ column }) => {
      return (
        <div className="flex justify-between py-2 text-left uppercase">
          Products
          <HiArrowsUpDown
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
    cell: ({ row }) => {
      const products = JSON.parse(row.original.items);

      console.log(products);

      const productNames = products.map((item) => item.product.name);

      if (productNames.length > 2) {
        return `${productNames.slice(0, 2).join(", ")} and ${
          productNames.length - 2
        } more...`;
      }
      return productNames.join(", ");
    },
    footer: ({ column, table }) => {
      return (
        <div className="flex flex-row gap-4">
          <HiOutlineArrowLeftCircle
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowLeftCircle>
          <HiOutlineArrowRightCircle
            className="w-4 h-4 mr-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowRightCircle>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <div className="flex justify-between py-2 text-left uppercase">
          Date
          <HiArrowsUpDown
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="">
        {moment(row.original.created_at).format("MMM DD, YYYY hh:mm A")}
      </div>
    ),
    footer: ({ column, table }) => {
      return (
        <div className="flex flex-row gap-4">
          <HiOutlineArrowLeftCircle
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowLeftCircle>
          <HiOutlineArrowRightCircle
            className="w-4 h-4 mr-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowRightCircle>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
