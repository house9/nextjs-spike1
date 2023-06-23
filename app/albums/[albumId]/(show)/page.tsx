import { notFound } from "next/navigation";
import { findAlbum } from "../../repository";
import Link from "next/link";

type Props = {
  params: {
    albumId: string;
  };
};

export const generateMetadata = async ({ params: { albumId } }: Props) => {
  const album = await findAlbum({ id: albumId });

  if (!album) return;

  return {
    title: `Album: ${album.name}`,
    description: `${album.name} - ${album.releasedOn}`,
  };
};

export default async function AlbumShowPage({ params: { albumId } }: Props) {
  const album = await findAlbum({ id: albumId });

  if (!album) return notFound();

  return (
    <>
      <h1>Albums: [SHOW] - {album.name}</h1>
      <p>{album.releasedOn.toString()}</p>
      <p>
        <Link href="/albums">Go Back</Link>
      </p>
    </>
  );
}
