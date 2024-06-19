/*
  Warnings:

  - You are about to drop the column `data` on the `about_me` table. All the data in the column will be lost.
  - Added the required column `description` to the `about_me` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "about_me" DROP COLUMN "data",
ADD COLUMN     "description" TEXT NOT NULL;
