"use client";

import React from "react";

// import Link from "next/link";

// import { useRouter } from "next/navigation";
// import { useSyncExternalStore, useTransition } from "react";

// import { disableDraftMode } from "./actions";

// const emptySubscribe = () => () => {};

export default function AlertBanner() {
  // const router = useRouter();
  // const [pending, startTransition] = useTransition();

  // const shouldShow = useSyncExternalStore(
  //   emptySubscribe,
  //   () => window.top === window,
  //   () => false,
  // );

  // if (!shouldShow) return null;

  return (
    <div
      className=' fixed top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur'
    >
      <div className="py-2 font-mono text-yellow-500 text-center text-sm">
    Ahsans Blog
      </div>
    </div>


  );
}
