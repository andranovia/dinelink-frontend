import { PieChartComponent } from "@/components/rewards/PieChart";
import RecentRewards from "@/components/rewards/RecentRewards";
import RewardsExchange from "@/components/rewards/RewardsExchange";
import React from "react";

const page = () => {
  return (
    <div className="p-3 grid grid-cols-3 gap-3">
      <RewardsExchange />
      <PieChartComponent />
      <div className="col-span-2">
        <RecentRewards />
      </div>
    </div>
  );
};

export default page;
