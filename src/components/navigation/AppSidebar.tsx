import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/navigation/DefaultSidebar";
import Image from "next/image";
import { BsMenuButtonWide } from "react-icons/bs";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineTableRestaurant } from "react-icons/md";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import React from "react";

const items = [
  {
    title: "Menu Order",
    url: "#",
    icon: BsMenuButtonWide,
  },
  {
    title: "Cart",
    url: "/Cart",
    icon: IoCartOutline,
  },
];

const itemsTwo = [
  {
    title: "Manage Orders",
    icon: BsMenuButtonWide,
    items: [
      {
        title: "Active Orders",
        url: "/orders/active",
      },
      {
        title: "Order History",
        url: "/orders/history",
      },
    ],
  },
  {
    title: "All Menu",
    icon: BsMenuButtonWide,
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
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex  items-center gap-3 flex-row m-3 mb-0">
        <div className="p-2 bg-black rounded-full w-10 h-10">
          <Image
            src="/images/brand.png"
            alt="DineLink"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold">DineLink</h3>

          <span className="text-xs text-gray-500">Dining Meets Technology</span>
        </div>
      </SidebarHeader>
      <hr className="border-black mt-4 mb-2 border-opacity-20" />

      <SidebarContent className="">
        <SidebarGroup>
          <SidebarGroupLabel className="mx-2">Menu</SidebarGroupLabel>
          <SidebarGroupContent className="mt-2">
            <SidebarMenu className=" px-2">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={`hover:bg-gray-900 rounded-lg py-1 hover:text-white ${
                    item.url === "#" && "bg-gray-900 text-white"
                  }`}
                >
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <div className="flex items-center gap-2 flex-row">
                        <item.icon size={15} />
                        <span className="text-sm font-medium">
                          {item.title}
                        </span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <hr className="border-black my-4  border-opacity-20" />
            <SidebarMenu className="p-2">
              {itemsTwo.map((item, index) => (
                <React.Fragment key={index}>
                  <Collapsible defaultOpen className="group/collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <MdOutlineTableRestaurant className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {item.title}
                          </span>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="gap-3">
                          {item.items.map((data, index) => (
                            <SidebarMenuSubItem
                              key={index}
                              className={index === 0 ? `mt-2` : ``}
                            >
                              <Link href={data.url}>{data.title}</Link>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                </React.Fragment>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
