"use client";

import React from "react";
import { Header } from "../../ui/header";
import { TopNavigation } from "./TopNavigation";
import { ProfileDropdown } from "./ProfileDropdown";
import { ThemeSwitch } from "./ThemeSwitch";
import DateHeader from "./DateHeader";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "../sidebar/Sidebar";
import RestaurantHeader from "./restaurant/RestaurantHeader";
import { usePathname } from "next/navigation";
import OrderHistoryHeader from "./orderHistory/OrderHistoryHeader";
import ManageTableHeader from "./manageTable/ManageTableHeader";
import { useRestaurant } from "@/hooks/services/useRestaurant";

const AppHeader = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const { restaurantByCode } = useRestaurant({});

  const getHeaderData = () => {
    switch (pathname) {
      case "/menu-order":
        return <RestaurantHeader />;
      case "/order/history":
        return <OrderHistoryHeader />;
      case "/order/table":
        return <ManageTableHeader />;
    }
  };

  return (
    <Header className="flex-col p-0 sm:gap-0 h-auto">
      <div className="flex items-center gap-3 sm:gap-4 w-full p-4">
        <SidebarTrigger variant="outline" className="scale-125 sm:scale-100" />
        <TopNavigation
          RestaurantName={restaurantByCode?.restaurant.name}
          Open={restaurantByCode?.restaurant.open}
        />
        <div className="ml-auto flex items-center space-x-4">
          <DateHeader />
          <Separator orientation="vertical" className="h-4" />
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </div>
      <Separator orientation="horizontal" className="w-full " />
      <div className="w-full relative">
        {getHeaderData()}

        {children}
      </div>
      {pathname === "/" ? (
        <Separator orientation="horizontal" className="w-full h-[0.7px]" />
      ) : null}
    </Header>
  );
};

export default AppHeader;
