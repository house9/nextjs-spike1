import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

type Props = {
  params: {
    userId: string;
  };
};

export default async function UserPage({ params: { userId } }: Props) {
  const user = await prisma.user.findFirst({ where: { id: userId } });

  if (!user) return notFound();

  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.title}</p>
    </>
  );
}
