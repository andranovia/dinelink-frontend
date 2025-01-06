import React from "react";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./Sidebar";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";

const AppSidebarFooter = () => {
  return (
    <SidebarFooter className="py-4">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton className="flex items-center gap-2 mx-2">
            <IoSettingsOutline />
            <span className="text-sm font-medium">Settings</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton className="flex items-center gap-2 mx-2">
            <IoLogOutOutline />
            <span className="text-sm font-medium">Logout</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default AppSidebarFooter;
