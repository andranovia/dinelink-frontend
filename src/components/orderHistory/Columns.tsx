import { ColumnDef } from "@tanstack/react-table";
import {
  HiArrowsUpDown,
  HiOutlineArrowLeftCircle,
  HiOutlineArrowRightCircle,
} from "react-icons/hi2";
import moment from "moment";
import { RiMore2Fill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "../ui/checkbox";
import { Toast } from "../toast";
import { Badge } from "../ui/badge";
import { moveColumnsDown, moveColumnsUp } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { BiCheck, BiCross } from "react-icons/bi";
import { MdIncompleteCircle, MdPending } from "react-icons/md";

export interface Employee {
  id: string;
  restaurantProfilePhoto: string;
  restaurantName: string;
  amount: {
    price: number;
    currency: string;
  };
  paymentMethod: string;
  products: string[];
  date: string;
  status: "Success" | "Incomplete" | "Pending" | "Failed";
}

const getBadgeIcon = (status: string) => {
  switch (status) {
    case "Success":
      return <FaCheck />;
    case "Incomplete":
      return <MdIncompleteCircle />;
    case "Pending":
      return <MdPending />;
    case "Failed":
      return <ImCross size={10} />;
    default:
      return <BiCheck />;
  }
};

export const columns: ColumnDef<Employee>[] = [
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
      const { restaurantProfilePhoto, restaurantName } = row.original;
      return (
        <div className="flex flex-row gap-4 items-center">
          <Avatar className="h-8 w-8">
            <AvatarImage src={restaurantProfilePhoto} alt="@shadcn" />
            <AvatarFallback>SN</AvatarFallback>
          </Avatar>
          <div className="font-medium text-left ">{restaurantName}</div>
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
      const { amount } = row.original;
      return (
        <div className="font-medium text-left">
          {amount.price}&nbsp;{amount.currency}
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
      const { status } = row.original;
      const colors = {
        Success: "bg-green-200 text-green-700",
        Pending: "bg-yellow-200 text-yellow-700",
        Incomplete: "bg-gray-200 text-gray-700",
        Failed: "bg-red-200 text-red-700",
      };

      return (
        <Badge
          variant="outline"
          className={`${colors[status]} border-0 font-semibold capitalize justify-center w-3/4 py-1 rounded-full`}
        >
          <div className="w-full items-center  flex justify-between flex-row">
            {getBadgeIcon(status.toString())}
            <span>{status}</span>
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
      const products = row.original.products;
      if (products.length > 2) {
        return `${products.slice(0, 2).join(", ")} and ${
          products.length - 2
        } more...`;
      }
      return products.join(", ");
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
        {moment(row.original.date).format("MMM DD, YYYY hh:mm A")}
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

  {
    id: "actions",
    cell: ({ row }) => {
      const employee = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <RiMore2Fill></RiMore2Fill>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(employee.id)}
            >
              <Toast
                buttonText={"Copy employee id"}
                description={"ID copied to clipboard"}
              ></Toast>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View employee</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  // ...
];
