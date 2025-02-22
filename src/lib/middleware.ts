"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuthStore from "@/store/authStore";
import useAuth from "@/hooks/services/useAuth";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, logout } = useAuthStore();
  const { userData } = useAuth({});
  const isPublic = pathname === "/";
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token && !isPublic) {
      logout();
      router.push("/login");
    }
  }, [token, logout, router, isPublic]);

  useEffect(() => {
    if (
      !isAuthenticated &&
      pathname !== "/register" &&
      !isPublic &&
      userData?.message === "Unauthenticated."
    ) {
      router.push("/login");
    } else if (
      isAuthenticated &&
      (pathname === "/login" || pathname === "/register")
    ) {
      if (userData?.type === "owner") {
        window.location.href = `http://localhost:3001/verification?token=${token}`;
      } else if (token) {
        router.push(`/menu-order`);
      }
    }
  }, [isAuthenticated, router, pathname, isPublic, userData, token]);

  return children;
}
