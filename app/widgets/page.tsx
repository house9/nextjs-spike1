import { Metadata } from "next";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Widgets",
};

export default function WidgetsPage() {
  console.log("[JH] Widgets");
  console.log("[JH] x-invoke-path", headers().get("x-invoke-path"));

  return (
    <div>
      <h1>Widgets</h1>
      <p>Hello World</p>
    </div>
  );
}
