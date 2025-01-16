import ExchangePoints from "@/components/rewards/ExchangePoints";
import { PieChartComponent } from "@/components/rewards/PieChart";
import RecentRewards from "@/components/rewards/RecentRewards";
import YourRewards from "@/components/rewards/YourRewards";
import React from "react";

const page = () => {
  return (
    <div className="p-3 grid grid-cols-3 gap-3">
      <YourRewards />
      <PieChartComponent />
      <div className="col-span-2">
        <RecentRewards />
      </div>
      <ExchangePoints />
    </div>
  );
};

export default page;
