import { Metadata } from "next";
import Link from "next/link";
import { createAlbumAction } from "../server-actions";

export const metadata: Metadata = {
  title: "New Album",
};

export default async function AlbumNewPage() {
  return (
    <>
      <h1>Albums: [NEW] - New Album</h1>

      <form action={createAlbumAction}>
        <fieldset>
          <legend>Album</legend>

          <p>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </p>
          <p>
            <label htmlFor="releasedOn">Released On:</label>
            <input type="text" id="releasedOn" name="releasedOn" />
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
