/*
  Warnings:

  - Added the required column `duration` to the `experiences` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "experiences" ADD COLUMN     "duration" TEXT NOT NULL;
