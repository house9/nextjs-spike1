import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

type Props = {
  params: {
    albumId: string;
  };
};

export const generateMetadata = async ({ params: { albumId } }: Props) => {
  const album = await prisma.album.findFirst({ where: { id: albumId } });

  if (!album) return;

  return {
    title: `Edit Album: ${album.name}`,
  };
};

export default async function AlbumShowPage({ params: { albumId } }: Props) {
  const album = await prisma.album.findFirst({ where: { id: albumId } });

  if (!album) return notFound();

  return (
    <>
      <h1>Albums: [EDIT] - {album.name}</h1>
      <p>TODO: form</p>
      <p>
        <Link href="/albums">Go Back</Link>
      </p>
    </>
  );
}
