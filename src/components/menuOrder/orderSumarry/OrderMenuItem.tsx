import { ConfirmModal } from "@/components/modals/ConfirmModal";
import { FormModal } from "@/components/modals/FormModal";
import { useCart } from "@/hooks/services/useCart";
import { CartItem } from "@/types/cart";
import Image from "next/image";
import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

const OrderMenuItem = ({ cartItemData }: { cartItemData: CartItem }) => {
  const [editCartItemPayload, setEditCartItemPayload] = React.useState({
    product_id: cartItemData?.product_id || 0,
    quantity: cartItemData.quantity,
    notes: cartItemData.notes,
    size: cartItemData.size,
  });

  const { editCartItem, deleteCartItem } = useCart({
    EditCartItemPayload: editCartItemPayload,
    DeleteCartItemPayload: { product_id: cartItemData.product_id },
  });

  const getShorthandSize = (size: string) => {
    switch (size) {
      case "small":
        return "SM";
      case "medium":
        return "MD";
      case "large":
        return "LG";
      default:
        return size;
    }
  };

  const fullPath = cartItemData.product.image;
  const fileName = fullPath ? fullPath.split(/[\\/]/).pop() : "";

  return (
    <div className="flex gap-3">
      <Image
        src={
          "http://127.0.0.1:8000/storage/uploads/" + fileName ||
          "https://via.placeholder.com/150"
        }
        alt={cartItemData.product.name}
        width={80}
        height={80}
        className="rounded-md w-[4.5rem] h-[4.5rem] object-cover"
      />
      <div className="flex flex-col gap-2 justify-between w-full">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-sm">
            {cartItemData.product.name}
            <span className="tracking-widest text-gray-500 font-medium">
              &nbsp;({cartItemData.quantity})
            </span>
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="line-clamp-1 w-1/2">
              Notes: {cartItemData.notes}
            </span>
            <span className="flex h-1 w-1  rounded-full bg-gray-500" />
            <span>Size: {getShorthandSize(cartItemData.size)}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold">
            ${cartItemData.product.price}
          </span>
          <div className="flex items-center gap-2">
            <FormModal
              buttonLabel="Save Changes"
              modalTrigger={<BiEdit />}
              formData={{
                title: "Edit Item",
                description: "Please fill the form below to edit item",
                form: [
                  {
                    name: "quantity",
                    value: cartItemData.quantity,
                    label: "Quantity",
                    type: "number",
                    placeholder: "1",
                    defaultValue: 1,
                  },
                  {
                    name: "notes",
                    label: "Notes",
                    value: cartItemData.notes,
                    type: "text",
                    placeholder: "Make it spicy",
                  },
                  {
                    name: "size",
                    label: "Size",
                    type: "select",
                    options: [
                      {
                        value: "Small",
                        label: "Small",
                      },
                      {
                        value: "Medium",
                        label: "Medium",
                      },
                      {
                        value: "Large",
                        label: "Large",
                      },
                    ],
                  },
                ],
              }}
              onSubmit={(values: CartItem) => {
                setEditCartItemPayload({
                  ...editCartItemPayload,
                  notes: values.notes,
                  quantity: values.quantity,
                  size: values.size,
                });
                editCartItem();
              }}
              selectValue={cartItemData.size}
              initialData={{
                user_id: 1,
                product_id: cartItemData?.product_id,
                quantity: 1,
                notes: cartItemData.notes,
                size: cartItemData.size,
              }}
              imageComponent={
                <div className="flex flex-col pt-4">
                  <div className="relative">
                    <Image
                      src={
                        "https://plus.unsplash.com/premium_photo-1664472724753-0a4700e4137b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      alt="bangoran"
                      width={200}
                      height={200}
                      className="w-full h-[10rem] object-cover rounded-lg"
                    />
                    <div className="flex justify-center items-center p-1 px-2 top-0 rounded-md absolute bg-white gap-1 m-1.5">
                      <span className="flex h-2 w-2  rounded-full bg-green-500" />
                      <span className="text-xs font-semibold">Available</span>
                    </div>
                  </div>
                  <div className="flex justify-between py-3 px-2">
                    <span className="font-medium">
                      {cartItemData?.product.name}
                    </span>
                    <span className="font-bold">
                      ${cartItemData?.product.price}
                    </span>
                  </div>
                </div>
              }
            ></FormModal>
            <ConfirmModal
              iconImage={<BiTrash size={25} color="#2e3352" />}
              modalTrigger={<BiTrash />}
              buttonLabel="Delete"
              onSubmit={() => deleteCartItem()}
              title="Delete Item"
              description="Are you sure you want to delete this item?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMenuItem;
