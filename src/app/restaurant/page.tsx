"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { MdInput } from "react-icons/md";
const Page = () => {
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
                }}
              >
                {({ isSubmitting }) => (
                  <Form className={cn("flex flex-col gap-6")}>
                    <Field id="code" name="code" type="code" as={Input} />
                  </Form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </div>
        <Link href="/menu-order" className="flex items-center gap-2">
          <Button variant={"default"} className="!p-6">
            Confirm
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
