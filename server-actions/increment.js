"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function increment() {
  const stat = await prisma.stat.findFirst({
    orderBy: {
      updatedAt: "desc",
    },
  });

  if (stat) {
    await prisma.stat.update({
      where: {
        id: stat.id,
      },
      data: {
        clicks: stat.clicks + 1,
      },
    });
  } else {
    await prisma.stat.create({
      data: {
        clicks: 1,
      },
    });
  }

  console.log('[SERVER-ACTION] invoked: "increment"');
  revalidatePath("/widgets");
}
