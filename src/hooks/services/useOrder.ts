import { TransactionType } from "@/types/transaction";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "../functions/apiRequest";
import useAuthStore from "@/store/authStore";

const useOrder = ({ params }: { params: { restaurant_id: number } }) => {
  const { user } = useAuthStore();

  const { data: checkoutDetails } = useQuery<TransactionType | null>({
    queryKey: ["orderDetail"],
    queryFn: () =>
      apiRequest({
        type: "transaction",
        method: "get",
        payload: {
          params: {
            restaurantId: params.restaurant_id,
            userId: user?.id,
          },
        },
        errorMsg: "Get order detail failed, something is wrong.",
      }),
    enabled: !!user?.id,
  });

  return {
    checkoutDetails,
  };
};

export default useOrder;
