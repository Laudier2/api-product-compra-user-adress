/*
  Warnings:

  - Added the required column `access` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "access" TEXT NOT NULL,
ADD COLUMN     "age" TEXT NOT NULL;
