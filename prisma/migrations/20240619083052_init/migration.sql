-- CreateTable
CREATE TABLE "about_me" (
    "id" SERIAL NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "about_me_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experiences" (
    "title" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "company_name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "experiences_pkey" PRIMARY KEY ("id")
);
