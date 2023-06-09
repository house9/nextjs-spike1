#!/bin/bash
set -euv

rm -rf prisma/migrations
rm -f prisma/dev.db-journal
rm -f prisma/dev.db

prisma generate
prisma migrate dev --name init
prisma migrate reset --force
