import { PrismaClient } from '../src/generated/prisma/client';
import { PrismaNeon } from "@prisma/adapter-neon";
import bcrypt from "bcrypt";

const adapter = new PrismaNeon({ connectionString: process.env.DIRECT_DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
    await prisma.balance.deleteMany();
    await prisma.onRampTransaction.deleteMany();
    await prisma.user.deleteMany();


    const alicePassword = await bcrypt.hash("alice12345", 10);
    const bobPassword = await bcrypt.hash("bob12345", 10);

    const alice = await prisma.user.upsert({
        where: { number: '9999999977' },
        update: {},
        create: {
            number: '9999999977',
            password: alicePassword,
            name: 'alice',
            onRampTransaction: {
                create: {
                    startTime: new Date(),
                    status: "Success",
                    amount: 20000,
                    token: "122",
                    provider: "HDFC Bank",
                },
            },
            Balance: {
                create: {
                    amount: 20000,
                    locked: 0,
                },
            },
        },
    });

    const bob = await prisma.user.upsert({
        where: { number: '9999999988' },
        update: {},
        create: {
            number: '9999999988',
            password: bobPassword,
            name: 'bob',
            onRampTransaction: {
                create: {
                    startTime: new Date(),
                    status: "Failed",
                    amount: 2000,
                    token: "123",
                    provider: "HDFC Bank",
                },
            },
            Balance: {
                create: {
                    amount: 20000,
                    locked: 0,
                },
            },
        },
    });

    console.log({ alice, bob });
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
