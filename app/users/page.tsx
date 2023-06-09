import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
  description: "List of Users",
};

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
