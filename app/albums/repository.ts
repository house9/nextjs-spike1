import { prisma } from "@/lib/prisma";
import { Album } from "@prisma/client";

type FindAllArgs = {
  orderBy?: string;
  orderDirection?: string;
};
export function findAllAlbums({
  orderBy = "name",
  orderDirection = "asc",
}: FindAllArgs): Promise<Album[]> {
  return prisma.album.findMany({
    orderBy: {
      [orderBy.toString()]: orderDirection,
    },
  });
}

export type CreateAlbumArgs = {
  name: string;
  releasedOn: Date;
};
export function createAlbum({
  name,
  releasedOn,
}: CreateAlbumArgs): Promise<Album> {
  return prisma.album.create({
    data: {
      name: name,
      releasedOn: releasedOn,
    },
  });
}

export function findAlbum({ id }: { id: string }): Promise<Album | null> {
  return prisma.album.findFirst({
    where: {
      id: id,
    },
  });
}

export type UpdateAlbumArgs = {
  id: string;
  name: string;
  releasedOn: Date;
};
export function updateAlbum({
  id,
  name,
  releasedOn,
}: UpdateAlbumArgs): Promise<Album> {
  return prisma.album.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      releasedOn: releasedOn,
    },
  });
}

export function deleteAlbum({ id }: { id: string }): Promise<Album> {
  return prisma.album.delete({
    where: {
      id: id,
    },
  });
}
