"use client";

import { useRestaurant } from "@/hooks/services/useRestaurant";
import React from "react";
import { BiMinus, BiPlus, BiReset } from "react-icons/bi";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import TableItem from "./TableItem";

const ManageTable = () => {
  const { restaurantTable } = useRestaurant({
    params: { restaurantId: 1 },
  });

  return (
    <div className="h-[34rem] w-full relative overflow-hidden border rounded-xl bg-slate-100 col-span-6">
      <TransformWrapper limitToBounds={true} centerOnInit={true}>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="tools p-3  flex justify-between w-full items-end bottom-0 absolute z-40">
              <button
                onClick={() => resetTransform()}
                className="mr-2 p-2 bg-white border text-primary rounded"
              >
                <BiReset />
              </button>
              <div className="flex items-center gap-2 flex-col">
                <button
                  onClick={() => zoomIn()}
                  className="mr-2 p-2 bg-white border text-primary rounded"
                >
                  <BiPlus />
                </button>
                <button
                  onClick={() => zoomOut()}
                  className="mr-2 p-2 bg-white border text-primary rounded"
                >
                  <BiMinus />
                </button>
              </div>
            </div>
            <TransformComponent
              wrapperClass="bg-white overflow-hidden !w-full !h-full"
              contentClass="!p-20"
            >
              <div
                style={{ width: "100%", height: "100%" }}
                className="grid grid-cols-4 gap-20  gap-y-20 "
              >
                {restaurantTable?.restaurant_table.map((table, index) => (
                  <TableItem key={index} table={table} />
                ))}
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default ManageTable;
