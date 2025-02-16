"use client";

import MenuList from "@/components/menuOrder/menuList/MenuList";
import OrderSumarry from "@/components/menuOrder/orderSumarry/OrderSumarry";

export default function OrderMenu() {
  return (
    <OrderSumarry>
      <MenuList />
    </OrderSumarry>
  );
}
