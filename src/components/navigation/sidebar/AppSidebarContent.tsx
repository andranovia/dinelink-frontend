"use client";

import React from "react";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "./Sidebar";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../ui/collapsible";
import { BiFoodMenu } from "react-icons/bi";
import { PiCoins } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlinePayment, MdOutlineTableRestaurant } from "react-icons/md";
import { usePathname } from "next/navigation";

const mainItemsSidebar = [
  {
    title: "Menu Order",
    url: "/",
    icon: BiFoodMenu,
  },
  {
    title: "Rewards",
    url: "/rewards",
    icon: PiCoins,
  },
];

const subItemsSidebar = [
  {
    title: "Manage Orders",
    icon: MdOutlineTableRestaurant,
    items: [
      {
        title: "Active Orders",
        url: "/order/active",
      },
      {
        title: "Order History",
        url: "/order/history",
      },
    ],
  },
  {
    title: "All Menu",
    icon: IoFastFoodOutline,
    items: [
      {
        title: "Menu Items",
        url: "/menu",
      },
      {
        title: "Categories",
        url: "/categories",
      },
    ],
  },
  {
    title: "Manage Payment",
    icon: MdOutlinePayment,
  },
];

const AppSidebarContent = () => {
  const pathname = usePathname();

  return (
    <SidebarContent>
      <SidebarGroup className="p-2">
        <SidebarGroupContent className="mt-2">
          <SidebarMenu className=" px-2 gap-2">
            {mainItemsSidebar.map((item) => (
              <SidebarMenuItem
                key={item.title}
                className={` hover:bg-accent hover:text-primary rounded-lg p-1  text-primary transition-colors ${
                  item.url === pathname &&
                  "bg-primary text-white hover:bg-primary hover:text-white"
                }`}
              >
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <div className="flex items-center gap-2 flex-row">
                      <item.icon />
                      <span className="text-sm font-medium">{item.title}</span>
                    </div>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          <hr className="border-black my-4  border-opacity-20" />
          <SidebarMenu className="px-2 py-2">
            {subItemsSidebar.map((item, index) => (
              <React.Fragment key={index}>
                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger
                      asChild
                      className={` hover:bg-accent hover:text-primary rounded-lg text-primary  h-10 transition-colors ${
                        item.title === "rewards" && "bg-primary text-white"
                      }`}
                    >
                      <SidebarMenuButton>
                        <item.icon />
                        <span className="text-sm font-medium">
                          {item.title}
                        </span>
                        {item.items ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-right transition-transform ml-auto group-data-[state=open]/collapsible:rotate-90"
                          >
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        ) : null}
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    {item.items ? (
                      <CollapsibleContent>
                        <SidebarMenuSub className="gap-3">
                          {item.items.map((data, index) => (
                            <SidebarMenuSubItem
                              key={index}
                              className={` hover:bg-accent hover:text-primary text-primary rounded-md py-2 px-3 transition-colors ${
                                item.title === "#" && "bg-primary text-white"
                              } ${index === 0 ? `mt-2` : ``}`}
                            >
                              <Link href={data.url}>{data.title}</Link>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    ) : null}
                  </SidebarMenuItem>
                </Collapsible>
              </React.Fragment>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup />
    </SidebarContent>
  );
};

export default AppSidebarContent;
