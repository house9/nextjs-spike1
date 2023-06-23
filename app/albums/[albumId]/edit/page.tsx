import { notFound } from "next/navigation";
import Link from "next/link";
import { findAlbum } from "../../repository";
import { updateAlbumAction } from "../../server-actions";

type Props = {
  params: {
    albumId: string;
  };
};

export const generateMetadata = async ({ params: { albumId } }: Props) => {
  const album = await findAlbum({ id: albumId });

  if (!album) return;

  return {
    title: `Edit Album: ${album.name}`,
  };
};

export default async function AlbumEditPage({ params: { albumId } }: Props) {
  const album = await findAlbum({ id: albumId });

  if (!album) return notFound();

  const submitForm = async (formData: FormData) => {
    "use server";
    updateAlbumAction(album.id, formData);
  };

  return (
    <>
      <h1>Albums: [EDIT] - {album.name}</h1>

      <form action={submitForm}>
        <fieldset>
          <legend>Album</legend>

          <p>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={album.name} />
          </p>
          <p>
            <label htmlFor="releasedOn">Released On:</label>
            <input
              type="text"
              id="releasedOn"
              name="releasedOn"
              value={album.releasedOn.toString()}
            />
          </p>

          <p>
            <button type="submit">Create Album</button>
          </p>
        </fieldset>
      </form>

      <p>
        <Link href="/albums">Cancel and go back</Link>
      </p>
    </>
  );
}
