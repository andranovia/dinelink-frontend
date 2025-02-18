import ManageTable from "@/components/menuOrder/manageTable/ManageTable";
import ManageTableSummary from "@/components/menuOrder/manageTable/ManageTableSummary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const page = () => {
  return (
    <Card className="border-none rounded-none">
      <CardHeader>
        <CardTitle className="text-lg">Manage Table</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-8 gap-4">
        <ManageTable />
        <ManageTableSummary />
      </CardContent>
    </Card>
  );
};

export default page;
