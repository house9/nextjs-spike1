import { Album } from "@prisma/client";
import Link from "next/link";

type Props = {
  album: Album;
};

export default async function AlbumRow({ album }: Props) {
  return (
    <tr>
      <td>{album.name}</td>
      <td>
        <Link href={`/albums/${album.id}`}>[SHOW]</Link>
      </td>
      <td>
        <Link href={`/albums/${album.id}/edit`}>[EDIT]</Link>
      </td>
    </tr>
  );
}
