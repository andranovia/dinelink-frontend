import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/restaurant";
import { CgUnavailable } from "react-icons/cg";
import Image from "next/image";
import React from "react";
import { BiPlus, BiPlusCircle } from "react-icons/bi";
import { FormModal } from "@/components/modals/FormModal";
import { useCart } from "@/hooks/services/useCart";
import { CartItem } from "@/types/cart";

type MenuListItemProps = {
  productData?: ProductType;
  className?: string;
};

const MenuListItem = ({
  productData,
  className,
  ...props
}: MenuListItemProps) => {
  const [addCartItemPayload, setAddCartItemPayload] = React.useState({
    product_id: productData?.id || 0,
    quantity: 1,
    notes: "",
    size: "Small",
  });

  const { addCartItem } = useCart({ addToCartPayload: addCartItemPayload });
  const { cart } = useCart({});

  const getButtonLabel = (available: boolean) => {
    switch (available) {
      case true:
        return {
          label: "Unavailable",
          icon: <CgUnavailable className="text-white" />,
        };
      case false:
        return {
          label: "Add to cart",
          icon: <BiPlus className="text-white" />,
        };
      default:
        return {
          label: "Unavailable",
          icon: <CgUnavailable className="text-white" />,
        };
    }
  };

  const fullPath = productData?.image;
  const fileName = fullPath ? fullPath.split(/[\\/]/).pop() : "";

  return (
    <Card className={cn("w-auto h-fit ", className)} {...props}>
      <CardHeader className="rounded-lg p-3 pb-0 relative">
        <Image
          src={
            "http://127.0.0.1:8000/storage/uploads/" + fileName ||
            "https://via.placeholder.com/150"
          }
          alt="bangoran"
          width={200}
          height={200}
          className="w-full h-[10rem] object-cover rounded-lg"
        />
        {productData?.available ? (
          <div className="flex justify-center items-center p-1 px-2 rounded-md absolute bg-white gap-1 right-[18px]">
            <span className="flex h-2 w-2  rounded-full bg-green-500" />
            <span className="text-xs font-semibold">Available</span>
          </div>
        ) : (
          <div className="flex justify-center items-center p-1 px-2 rounded-md absolute bg-white gap-1 right-[18px]">
            <span className="flex h-2 w-2  rounded-full bg-red-500" />
            <span className="text-xs font-semibold">Unavailable</span>
          </div>
        )}
      </CardHeader>
      <CardContent className="grid gap-4 w-full p-3">
        <div className="w-full">
          <div className="mb-4 grid items-start pb-4 last:mb-0 last:pb-0">
            <div className="space-y-1 w-full flex justify-between items-center">
              <p className="text-sm font-medium leading-none">
                {productData?.name}
              </p>
              <span className="text-sm font-semibold">
                ${productData?.price}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-2 pb-3">
        <FormModal
          buttonLabel="Add to cart"
          modalTrigger={
            <Button
              className="w-full bg-primary"
              disabled={!productData?.available}
            >
              {cart?.cart?.find(
                (item) => item.product_id === productData?.id
              ) ? (
                <>
                  <BiPlus className="text-white" /> Add more
                </>
              ) : (
                <>
                  {getButtonLabel(!productData?.available).icon}
                  {getButtonLabel(!productData?.available).label}
                </>
              )}
            </Button>
          }
          formData={{
            title: "Add to cart",
            description: "Please fill the form below to add to cart",
            form: [
              {
                name: "quantity",
                label: "Quantity",
                type: "number",
                placeholder: "1",
                defaultValue: 1,
              },
              {
                name: "notes",
                label: "Notes",
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
            setAddCartItemPayload({
              ...addCartItemPayload,
              notes: values.notes,
              quantity: values.quantity,
              size: values.size,
            });
            addCartItem();
          }}
          initialData={{
            user_id: 1,
            product_id: productData?.id || 0,
            quantity: 1,
            notes: "Make it spicy",
            size: "Large",
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
                <span className="font-medium">{productData?.name}</span>
                <span className="font-bold">${productData?.price}</span>
              </div>
            </div>
          }
        />
      </CardFooter>
    </Card>
  );
};

export default MenuListItem;
