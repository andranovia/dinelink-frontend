import { Button } from "@/components/ui/button";

import React from "react";
import { BsCalendarDate } from "react-icons/bs";

const DateHeader = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString("en-US", {
    weekday: "long",
  })}, ${currentDate.toLocaleString("en-US", {
    day: "2-digit",
  })} ${currentDate.toLocaleString("en-US", {
    month: "short",
  })} ${currentDate.getFullYear()} at ${currentDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })}`;

  return (
    <Button className={`w-full items-center px-3 border`} variant="ghost">
      <BsCalendarDate />
      <span className="font-medium text-sm">{formattedDate}</span>
    </Button>
  );
};

export default DateHeader;
