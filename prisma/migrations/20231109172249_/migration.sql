/*
  Warnings:

  - You are about to drop the `Compra` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Compra";

-- CreateTable
CREATE TABLE "compra" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "apartment_or_house" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "compra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comprarealations" (
    "id" TEXT NOT NULL,
    "id_products" TEXT NOT NULL,
    "id_compra" TEXT NOT NULL,

    CONSTRAINT "comprarealations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "comprarealations" ADD CONSTRAINT "comprarealations_id_compra_fkey" FOREIGN KEY ("id_compra") REFERENCES "compra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comprarealations" ADD CONSTRAINT "comprarealations_id_products_fkey" FOREIGN KEY ("id_products") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
