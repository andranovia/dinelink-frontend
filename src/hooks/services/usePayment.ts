import { Payment } from "@/types/payment";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { apiRequest } from "../functions/apiRequest";
import useAuth from "./useAuth";
import { CartItem } from "@/types/cart";

export type CheckoutProps = {
  checkoutData?: {
    purchased_products?: PurchasedProducts[];
    items: CartItem[];
    restaurant_id: number;
    table_id?: number[];
    total?: number;
    subtotal?: number;
    tax: number;
    current_url: string;
  };
  successId?: string;
};

type PurchasedProducts = {
  id: number;
  name: string;
  amount: number;
  item_price: number;
};

const useCheckout = ({ checkoutData, successId }: CheckoutProps) => {
  const router = useRouter();
  const { userData } = useAuth({});

  const { data: checkoutDetails } = useQuery<Payment | null>({
    queryKey: ["checkoutDetail"],
    queryFn: () =>
      apiRequest({
        type: "checkout",
        method: "get",
        payload: {
          params: {
            sessionId: successId,
          },
        },
        errorMsg: "Get checkout detail failed, something is wrong.",
      }),
    enabled: !!localStorage.getItem("token") && !!successId,
  });

  const { mutateAsync: makeCheckout } = useMutation({
    mutationFn: () =>
      apiRequest({
        type: "checkout",
        method: "post",
        payload: {
          ...checkoutData,
          items: JSON.stringify(checkoutData?.items),
          table_id: JSON.stringify(checkoutData?.table_id),
          user_id: userData?.id,
        },
        errorMsg: "Submit checkout failed, something is wrong.",
      }),
    onSuccess: (response) => {
      if (response) {
        router.push(response.url);
      } else {
        console.log("Submit checkout failed");
      }
    },
  });

  return {
    makeCheckout,
    checkoutDetails,
  };
};

export default useCheckout;
