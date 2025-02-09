"use client";
import { userAuthState } from "@/redux/slice/authSlice";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

const AuthWrapper = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useSelector(userAuthState);
  const router = useRouter();
  const path = usePathname();

  const goToAuth = useCallback(() => router.replace("/auth/login"), [router]);
  const goToHome = useCallback(() => router.replace("/"), [router]);

  useEffect(() => {
    if (!isAuthenticated && !path.startsWith("/auth")) {
      goToAuth();
    } else if (isAuthenticated && path.startsWith("/auth")) {
      goToHome();
    }
  }, [goToAuth, goToHome, isAuthenticated, path]);
  return children;
};

export default AuthWrapper;
