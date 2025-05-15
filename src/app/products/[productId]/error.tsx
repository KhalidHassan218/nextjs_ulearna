"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: Readonly<{
  error: Error;
  reset: () => void;
}>) {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="flex-col flex gap-2 items-center justify-center ">
      <div>{error.message}</div>
      <button
        className="bg-blue-700 w-fit p-4 text-white text-center rounded-3xl hover:bg-blue-950"
        onClick={reload}
      >
        Reload The Page
      </button>
      <Link
        className="bg-blue-700 w-fit p-4 text-white text-center rounded-3xl hover:bg-blue-950"
        href={"/"}
      >
        Go back
      </Link>
    </div>
  );
}
