import Counter from "../ui_components/counter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messing around with NextJS",
};

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <Counter />
    </div>
  );
}
