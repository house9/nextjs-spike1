import { headers } from "next/headers";

export default function Widgets() {
  console.log("[JH] Widgets");
  console.log("[JH] x-invoke-path", headers().get("x-invoke-path"));

  return (
    <div>
      <h1>Widgets</h1>
      <p>Hello World</p>
    </div>
  );
}
