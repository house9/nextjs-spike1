import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "New Album",
};

export default async function AlbumNewPage() {
  return (
    <>
      <h1>Albums: [NEW] - New Album</h1>
      <p>TODO: add form</p>
      <p>
        <Link href="/albums">Go Back</Link>
      </p>
    </>
  );
}
