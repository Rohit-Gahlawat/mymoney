-- CreateEnum
CREATE TYPE "UserWithdrawalEnum" AS ENUM ('Success', 'Failed', 'Processing');

-- CreateTable
CREATE TABLE "UserWithdrawal" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "status" "UserWithdrawalEnum" NOT NULL,
    "provider" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserWithdrawal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MerchantWithdrawal" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "status" "UserWithdrawalEnum" NOT NULL,
    "provider" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "MerchantWithdrawal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserWithdrawal_token_key" ON "UserWithdrawal"("token");

-- CreateIndex
CREATE UNIQUE INDEX "MerchantWithdrawal_token_key" ON "MerchantWithdrawal"("token");

-- AddForeignKey
ALTER TABLE "UserWithdrawal" ADD CONSTRAINT "UserWithdrawal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MerchantWithdrawal" ADD CONSTRAINT "MerchantWithdrawal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
