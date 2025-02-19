"use client";

import { LoginForm } from "@/components/auth/loginForm";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import useAlertStore from "@/store/alert";
import Image from "next/image";
import { ImWarning } from "react-icons/im";

export default function LoginPage() {
  const { message, isVisible, type } = useAlertStore();

  return (
    <div className="grid min-h-svh lg:grid-cols-2 p-3 rounded-md bg-slate-100">
      <div className="flex flex-col gap-4 p-6 md:p-10 bg-white rounded-lg">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary p-1 text-primary-foreground">
              <Image
                src="/images/brand.png"
                alt="Logo"
                width={24}
                height={24}
              />
            </div>
            DineLink
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block rounded-lg overflow-hidden">
        <Image
          src="/images/restaurant.jpg"
          alt="login-image"
          width={500}
          height={500}
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      {isVisible && (
        <Alert className="fixed w-fit bg-white right-6 top-6" variant={type}>
          <ImWarning className="text-warning" />
          <AlertTitle>{message?.title}</AlertTitle>
          <AlertDescription>{message?.message}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
