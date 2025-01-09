import Image from "next/image";
import React from "react";
import { SidebarHeader } from "./Sidebar";

const AppSidebarHeader = () => {
  return (
    <SidebarHeader className="flex  items-center gap-3 flex-row m-3 mb-0">
      <div className="p-2 bg-primary rounded-full w-10 h-10">
        <Image
          src="/images/brand.png"
          alt="DineLink"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-primary">DineLink</h3>

        <span className="text-[10px] text-primary opacity-60">
          Dining Meets Technology
        </span>
      </div>
    </SidebarHeader>
  );
};

export default AppSidebarHeader;
