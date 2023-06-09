import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

type Props = {
  params: {
    userId: string;
  };
};

export const generateMetadata = async ({ params: { userId } }: Props) => {
  const user = await prisma.user.findFirst({ where: { id: userId } });

  if (!user) return;

  return {
    title: `Users: ${user.name}`,
    description: `${user.name} - ${user.title}`,
  };
};

export default async function UserPage({ params: { userId } }: Props) {
  const user = await prisma.user.findFirst({ where: { id: userId } });

  if (!user) return notFound();

  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.title}</p>
      <p>
        <Link href="/users">Go Back</Link>
      </p>
    </>
  );
}
