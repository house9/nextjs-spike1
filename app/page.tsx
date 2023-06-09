// import Image from 'next/image'

import { headers } from "next/headers";
import Counter from "./ui_components/counter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messing around with NextJS",
};

export default function RootPage() {
  console.log("[JH] Root");
  console.log("[JH] x-invoke-path", headers().get("x-invoke-path"));

  // headers().forEach((value, key) => {
  //   console.log("[JH] headers", key, value);
  // });

  return (
    <div>
      <h1>Root</h1>
      <Counter />
    </div>
  );
}
