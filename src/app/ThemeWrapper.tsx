"use client";

import { useEffect } from "react";
import { useTheme } from "./context/ThemeContext";

export default function ThemeWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return <div className="min-h-screen    ">{children}</div>;
}
