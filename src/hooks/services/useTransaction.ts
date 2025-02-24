import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "../functions/apiRequest";
import { TransactionType } from "@/types/transaction";
import useAuth from "./useAuth";

const useTransaction = () => {
  const { userData } = useAuth({});

  const { data: transactions } = useQuery<TransactionType[] | null>({
    queryKey: ["transactions"],
    queryFn: () =>
      apiRequest({
        type: "transactions/user",
        method: "get",
        payload: {
          params: {
            userId: userData?.id,
          },
        },
        errorMsg: "Get transactions failed, something is wrong.",
      }),
    enabled: !!localStorage.getItem("token") && !!userData,
  });

  return {
    transactions,
  };
};

export default useTransaction;
