"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  // const router = useRouter();
  // const pathname = usePathname();
  // const { isAuthenticated, logout } = useAuthStore();
  // const { userData } = useAuth({});
  // const isPublic = pathname === "/";
  // const token = localStorage.getItem("token");

  // useEffect(() => {
  //   if (!token) {
  //     logout();
  //     router.push("/login");
  //   }
  // }, [token, logout, router]);

  // useEffect(() => {
  //   if (
  //     !isAuthenticated &&
  //     pathname !== "/register" &&
  //     !isPublic &&
  //     userData?.message === "Unauthenticated."
  //   ) {
  //     router.push("/login");
  //   } else if (
  //     isAuthenticated &&
  //     (pathname === "/login" || pathname === "/register")
  //   ) {
  //     router.push(`/menu-order`);
  //   }
  // }, [isAuthenticated, router, pathname, isPublic, userData]);

  return children;
}
