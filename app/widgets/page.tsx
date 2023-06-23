import { Metadata } from "next";
import Increment from "../ui_components/increment";
import { increment } from "../../server-actions/increment";
import { prisma } from "@/lib/prisma";
import Counter from "../ui_components/counter";

export const metadata: Metadata = {
  title: "Widgets",
};

export default async function WidgetsPage() {
  const stat = await prisma.stat.findFirst({
    orderBy: {
      updatedAt: "desc",
    },
  });
  const count = stat?.clicks || 0;

  return (
    <div>
      <h1>Widgets: {new Date().toISOString()}</h1>
      <div className="flex flex-col justify-center items-center m-auto border-2 border-rose-600">
        <div className="bg-slate-400 w-full p-5">
          <h2>Client Actions</h2>
          <Counter />
        </div>
        <div className="bg-green-300 w-full p-5">
          <h2>Server Actions</h2>
          <Increment increment={increment} count={count} />
        </div>
      </div>
    </div>
  );
}
