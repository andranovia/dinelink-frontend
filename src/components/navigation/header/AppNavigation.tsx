import React from "react";
import { Header } from "../../ui/header";
import { TopNavigation } from "../header/TopNavigation";
import { SearchNavigation } from "./SearchNavigation";
import { ProfileDropdown } from "./ProfileDropdown";
import { ThemeSwitch } from "./ThemeSwitch";

const AppNavigation = () => {
  return (
    <Header>
      <TopNavigation RestaurantName="Sentolop Food's" Open={true} />
      <div className="ml-auto flex items-center space-x-4">
        <SearchNavigation />
        <ThemeSwitch />
        <ProfileDropdown />
      </div>
    </Header>
  );
};

export default AppNavigation;
