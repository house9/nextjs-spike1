"use server";

import { createAlbum, deleteAlbum, updateAlbum } from "./repository";
import { redirect } from "next/navigation";

// TODO: Add security to all (maybe via middleware ?)
// TODO: Add validation

export async function createAlbumAction(formData: FormData) {
  console.log("createAlbumAction", formData);
  await createAlbum({
    name: formData.get("name") as string,
    releasedOn: new Date(formData.get("releasedOn") as string),
  });
  redirect("/albums");
}

export async function updateAlbumAction(id: string, formData: FormData) {
  console.log("createAlbumAction", formData);
  await updateAlbum({
    id,
    name: formData.get("name") as string,
    releasedOn: new Date(formData.get("releasedOn") as string),
  });
  redirect(`/albums/${id}`);
}

export async function deleteAlbumAction(id: string) {
  await deleteAlbum({ id: id });
  redirect("/albums");
}
