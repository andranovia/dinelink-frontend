import React from "react";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
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
} from "../ui/collapsible";
import { BsMenuButtonWide } from "react-icons/bs";
import { IoCartOutline, IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineTableRestaurant } from "react-icons/md";

const mainItemsSidebar = [
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

const subItemsSidebar = [
  {
    title: "Manage Orders",
    icon: MdOutlineTableRestaurant,
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
];

const AppSidebarContent = () => {
  return (
    <SidebarContent className="">
      <SidebarGroup className="px-0">
        <SidebarGroupLabel className="mx-2">Menu</SidebarGroupLabel>
        <SidebarGroupContent className="mt-2">
          <SidebarMenu className=" px-4 gap-2">
            {mainItemsSidebar.map((item) => (
              <SidebarMenuItem
                key={item.title}
                className={`hover:bg-black rounded-lg hover:text-white transition-colors ${
                  item.url === "#" && "bg-black text-white"
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
          <SidebarMenu className="px-4 py-2">
            {subItemsSidebar.map((item, index) => (
              <React.Fragment key={index}>
                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        className={`hover:bg-black rounded-lg py-1.5 hover:text-white transition-colors ${
                          item.title === "" && "bg-black text-white"
                        }`}
                      >
                        <item.icon />
                        <span className="text-sm font-medium">
                          {item.title}
                        </span>
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
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub className="gap-3">
                        {item.items.map((data, index) => (
                          <SidebarMenuSubItem
                            key={index}
                            className={`hover:bg-black rounded-md py-1.5 px-3 hover:text-white transition-colors ${
                              item.title === "#" && "bg-black text-white"
                            } ${index === 0 ? `mt-2` : ``}`}
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
  );
};

export default AppSidebarContent;
