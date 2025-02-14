"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAuth from "@/hooks/services/useAuth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { RegisterPayloadType } from "@/types/auth";
import { ImGoogle3 } from "react-icons/im";
import Link from "next/link";

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [registerPayload, setRegisterPayload] = useState<RegisterPayloadType>({
    name: "",
    email: "",
    password: "",
  });
  const { registerAction } = useAuth({ RegisterPayload: registerPayload });

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={RegisterSchema}
      onSubmit={(values, { setSubmitting }) => {
        setRegisterPayload(values);
        registerAction();
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={cn("flex flex-col gap-6", className)} {...props}>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-balance text-sm text-muted-foreground">
              Enter your data below to create an account
            </p>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Field
                id="name"
                name="name"
                type="name"
                placeholder="John Doe"
                as={Input}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@email.com"
                as={Input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Field id="password" name="password" type="password" as={Input} />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Register
            </Button>
            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
              <span className="relative z-10 bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
            <Button variant="outline" className="w-full">
              <ImGoogle3 />
              Register with Google
            </Button>
          </div>
          <div className="text-center text-sm">
            Already have an account? {""}
            <Link href="/login" className="underline underline-offset-4">
              Sign In
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}
