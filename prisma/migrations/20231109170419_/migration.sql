/*
  Warnings:

  - You are about to drop the column `adress` on the `Compra` table. All the data in the column will be lost.
  - You are about to drop the column `product` on the `Compra` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `Compra` table. All the data in the column will be lost.
  - Added the required column `apartment_or_house` to the `Compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `Compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `Compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `Compra` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Compra" DROP COLUMN "adress",
DROP COLUMN "product",
DROP COLUMN "user",
ADD COLUMN     "apartment_or_house" TEXT NOT NULL,
ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "district" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "number" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
