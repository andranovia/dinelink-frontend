"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuthStore from "@/store/authStore";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useAuthStore();

  const isPublic =
    pathname === "/login" || pathname === "/register" || pathname === "/";

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    } else {
      router.push("/menu-order");
    }
  }, [isAuthenticated, router]);

  return isAuthenticated || isPublic ? children : null;
}
