import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Albums",
  description: "List of Albums",
};

export default async function AlbumsIndexPage() {
  const albums = await prisma.album.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <>
      <h1>Albums: [INDEX]</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Link href={`/albums/${album.id}`}>{album.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
