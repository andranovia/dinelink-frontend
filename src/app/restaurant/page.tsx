"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useRestaurant } from "@/hooks/services/useRestaurant";
import { cn } from "@/lib/utils";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdInput } from "react-icons/md";

const Page = () => {
  const [restaurantCodes, setRestaurantCodes] = useState<string | undefined>(
    undefined
  );
  const { restaurantByCode } = useRestaurant({
    restaurantCode: restaurantCodes,
  });

  useEffect(() => {
    localStorage.removeItem("restaurantCode");
  }, []);

  const code = localStorage.getItem("restaurantCode");

  useEffect(() => {
    if (restaurantByCode) {
      localStorage.setItem("restaurantCode", restaurantByCode.restaurant.code);
      setTimeout(() => {
        window.location.href = `/menu-order`;
      }, 2000);
    }
  }, [restaurantByCode, code]);

  return (
    <div className="flex justify-center items-center py-6 flex-col gap-6">
      <div className="flex justify-center gap-2 md:justify-start">
        <a href="#" className="flex items-center gap-2 font-medium">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary p-1 text-primary-foreground">
            <Image src="/images/brand.png" alt="Logo" width={24} height={24} />
          </div>
          <h1 className="text-2xl font-bold">DineLink</h1>
        </a>
      </div>
      <Separator />
      <div className="flex flex-col items-center gap-10 py-6">
        <div className="p-2 rounded-full bg-slate-100">
          <MdInput size={50} />
        </div>
        <h1 className="text-2xl font-bold">Input Restaurant Code</h1>
        <p className="text-gray-500 text-center">
          Please enter the code provided by your restaurant to start ordering.
        </p>
        <Separator />
        <div className="flex justify-center items-center gap-4 flex-col">
          <Card className="w-[35rem]">
            <CardContent className="flex flex-col gap-2  px-3 py-3">
              <Formik
                initialValues={{ code: "" }}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(false);
                  setRestaurantCodes(values.code.toLowerCase());
                }}
              >
                {({ isSubmitting }) => (
                  <Form className={cn("flex flex-col gap-6")}>
                    <Field id="code" name="code" type="code" as={Input} />

                    <Button variant={"default"} className="w-full">
                      Confirm
                    </Button>
                  </Form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
