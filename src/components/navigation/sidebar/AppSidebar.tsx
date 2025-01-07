import { Sidebar } from "@/components/navigation/sidebar/Sidebar";
import React from "react";
import AppSidebarFooter from "./AppSidebarFooter";
import AppSidebarContent from "./AppSidebarContent";
import AppSidebarHeader from "./AppSidebarHeader";

export function AppSidebar() {
  return (
    <Sidebar>
      <AppSidebarHeader />
      <hr className="border-black mt-3 mb-3 border-opacity-20" />
      <AppSidebarContent />
      <hr className="border-black border-opacity-20" />
      <AppSidebarFooter />
    </Sidebar>
  );
}
