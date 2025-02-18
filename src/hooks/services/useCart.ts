import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "../functions/apiRequest";
import { CartType } from "@/types/cart";
import { useCartStore } from "@/store/cartStore";
import useAuthStore from "@/store/authStore";

export function useCart({
  addToCartPayload,
  EditCartItemPayload,
  DeleteCartItemPayload,
}: {
  addToCartPayload?: {
    product_id: number;
    quantity: number;
    notes: string;
    size: string;
  };
  EditCartItemPayload?: {
    product_id: number;
    quantity: number;
    notes: string;
    size: string;
  };
  DeleteCartItemPayload?: {
    product_id: number;
  };
}) {
  const { setCart, addToCart, editCart } = useCartStore();
  const { user } = useAuthStore();
  const queryClient = useQueryClient();

  const { data: cart, isLoading: isCartLoading } = useQuery<CartType>({
    queryKey: ["cart"],
    queryFn: () =>
      apiRequest({
        type: "cart",
        errorMsg: "Get cart failed, something is wrong.",
        payload: {
          params: {
            user_id: user?.id,
          },
        },
        method: "get",
        callbackFunction(response) {
          setCart(response.data.cart);
        },
      }),
    enabled: !!user?.id,
  });

  const { mutateAsync: addCartItem } = useMutation({
    mutationFn: () =>
      apiRequest({
        type: "cart",
        errorMsg: "Add to cart failed, something is wrong.",
        payload: { ...addToCartPayload, user_id: user?.id },
        method: "post",
      }),
    onSuccess: (data) => {
      addToCart(data);
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const { mutateAsync: editCartItem } = useMutation({
    mutationFn: () =>
      apiRequest({
        type: "cart",
        errorMsg: "Edit cart item failed, something is wrong.",
        payload: { ...EditCartItemPayload, user_id: user?.id },
        method: "put",
      }),
    onSuccess: (data) => {
      editCart(data);
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const { mutateAsync: deleteCartItem } = useMutation({
    mutationFn: () =>
      apiRequest({
        type: "cart",
        errorMsg: "Delete cart item failed, something is wrong.",
        payload: {
          params: {
            user_id: user?.id,
            product_id: DeleteCartItemPayload?.product_id,
          },
        },
        method: "delete",
      }),
    onSuccess: (data) => {
      editCart(data);
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return {
    cart,
    addCartItem,
    deleteCartItem,
    editCartItem,
    isCartLoading,
  };
}
