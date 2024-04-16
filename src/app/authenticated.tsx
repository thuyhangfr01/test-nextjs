"use client";

import { LOCAL_STORAGE } from "@/constants";
import { getItemLocalStorage } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

export default function AuthenticatedComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const token = getItemLocalStorage(LOCAL_STORAGE.ACCESS_TOKEN);
  if (!token) {
    router.push("/login");
  }

  return <>{children}</>;
}
