'use client';
import { useEffect } from "react";
import Home from "./pages/home";

export default function Page() {
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("tw-elements");
    }
  }, []);

  return (
    <Home/>
  );
}
