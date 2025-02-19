import { FormModal } from "@/components/modals/FormModal";
import { useRestaurant } from "@/hooks/services/useRestaurant";
import useAuthStore from "@/store/authStore";
import { RestaurantTable } from "@/types/restaurant";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

const TableItem = ({ table }: { table: RestaurantTable }) => {
  const { user } = useAuthStore();
  const [tableData, setTableData] = React.useState<RestaurantTable>(table);
  const queryClient = useQueryClient();
  const { editUserRestaurantTable } = useRestaurant({
    params: { restaurantId: 1 },
    editUserRestaurantTablePayload: {
      id: tableData.id,
      floor: tableData.floor,
      notes: tableData.notes,
      persons: tableData.persons,
      number: tableData.number,
      seats: tableData.seats,
      is_active: tableData.is_active,
    },
  });
  const [isHovered, setIsHovered] = React.useState(false);

  const tables = () => {
    return (
      <div
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative w-32 h-32 col-span-1 ${
          table.user_id === user?.id || isHovered
            ? "bg-primary"
            : "bg-gray-200 hover:bg-secondary transition-colors"
        }  rounded-lg border cursor-pointer`}
      >
        <div
          className={`absolute inset-x-0 -bottom-5 flex justify-center space-x-2`}
        >
          <div
            className={`w-1/2 h-4  ${
              table.user_id === user?.id || isHovered
                ? "bg-primary"
                : "bg-gray-200"
            } border rounded-md transition-colors`}
          ></div>
          <div
            className={`w-1/2 h-4  ${
              table.user_id === user?.id || isHovered
                ? "bg-primary"
                : "bg-gray-200"
            } border rounded-md transition-colors`}
          ></div>
        </div>
        <div
          className={`absolute inset-x-0 -top-5 flex justify-center space-x-2`}
        >
          <div
            className={`w-1/2 h-4   ${
              table.user_id === user?.id || isHovered
                ? "bg-primary"
                : "bg-gray-200"
            } border rounded-md transition-colors`}
          ></div>
          <div
            className={`w-1/2 h-4   ${
              table.user_id === user?.id || isHovered
                ? "bg-primary"
                : "bg-gray-200"
            } border rounded-md transition-colors`}
          ></div>
        </div>
        <div
          className={`absolute h-32 inset-x-0 -left-5 flex justify-center flex-col space-y-2`}
        >
          <div
            className={`w-4 h-1/2   ${
              table.user_id === user?.id || isHovered
                ? "bg-primary"
                : "bg-gray-200"
            } border rounded-md transition-colors`}
          ></div>
          <div
            className={`w-4 h-1/2   ${
              table.user_id === user?.id || isHovered
                ? "bg-primary"
                : "bg-gray-200"
            } border rounded-md transition-colors`}
          ></div>
        </div>
        <div
          className={`absolute h-32 inset-x-0 -right-10 flex justify-center ml-5 items-end w-full flex-col space-y-2`}
        >
          <div
            className={`w-4 h-1/2   ${
              table.user_id === user?.id || isHovered
                ? "bg-primary"
                : "bg-gray-200"
            } border rounded-md transition-colors`}
          ></div>
          <div
            className={`w-4 h-1/2   ${
              table.user_id === user?.id || isHovered
                ? "bg-primary"
                : "bg-gray-200"
            } border rounded-md transition-colors`}
          ></div>
        </div>
        <div className="flex items-center justify-center h-full text-white font-bold">
          {table.number}
        </div>
      </div>
    );
  };

  return (
    <FormModal
      buttonLabel="Select Table"
      modalTrigger={tables()}
      initialData={{
        person: 0,
        notes: "",
      }}
      imageComponent={
        <div className="flex flex-col pt-4">
          <div className="relative">
            <Image
              src={
                "https://plus.unsplash.com/premium_photo-1723120606433-40334f5fe64f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="bangoran"
              width={200}
              height={200}
              className="w-full h-[10rem] object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-between py-3 px-2"></div>
        </div>
      }
      onSubmit={(values) => {
        setTableData({
          ...tableData,
          notes: values.notes,
          persons: values.person,
        });

        editUserRestaurantTable();
        queryClient.invalidateQueries({ queryKey: ["restaurantTable"] });
      }}
      formData={{
        title: "Select Table",
        description: "Please select the table",
        form: [
          {
            name: "person",
            label: "Person Ttl.",
            type: "number",
            placeholder: "1",
            defaultValue: 1,
          },
          {
            name: "notes",
            label: "Notes",
            type: "text",
            placeholder: "Notes",
            defaultValue: "",
          },
        ],
      }}
    />
  );
};

export default TableItem;
