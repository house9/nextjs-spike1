import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "James Hetfield",
      email: "james-hetfield@example.com",
      title: "Lead Vocals / Guitar",
    },
  });
  await prisma.user.create({
    data: {
      name: "Kirk Hammett",
      email: "kirk-hammet@example.com",
      title: "Lead Guitar",
    },
  });
  await prisma.user.create({
    data: {
      name: "Lars Ulrich",
      email: "lars-ulrich@example.com",
      title: "Drums",
    },
  });
  await prisma.user.create({
    data: {
      name: "Robert Trujillo",
      email: "robert-trujillo@example.com",
      title: "Bass",
    },
  });

  await prisma.album.create({
    data: {
      name: "Testing",
      releasedOn: new Date(),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
