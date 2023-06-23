import Link from "next/link";
import { findAllAlbums } from "../repository";
import { Metadata } from "next";
import Row from "./row";

export const metadata: Metadata = {
  title: "Albums",
  description: "List of Albums",
};

export default async function AlbumsIndexPage() {
  const albums = await findAllAlbums({});

  return (
    <>
      <h1>Albums: [INDEX]</h1>
      <h3>
        <Link href="/albums/new">Add New</Link>
      </h3>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <Row album={album} key={album.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
