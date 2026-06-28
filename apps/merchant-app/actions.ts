"use server"
import { signIn, signOut, auth } from "@/auth";
import db from "@repo/db";
import { randomUUID } from "crypto";

export async function handleSIgnIn() {
    await signIn("google");
}

export async function handleSignOut() {
    await signOut();
}

export async function handleWithdrawals(amount: number, provider: string) {
    const session = await auth();
    const userId = session?.user?.id
    if (!userId) {
        throw new Error("you are not logged in")
    };
    const randomID = randomUUID();
    const token = `ID_${Date.now()}_${randomID}`;


    try {
        const result = await db.merchantBalance.updateMany({
            where: {
                merchantId: Number(userId),
                amount: {
                    gte: amount
                }
            },
            data: {
                amount: {
                    decrement: amount
                },
                locked: {
                    increment: amount
                }

            }

        })
        if (result.count === 0) {
            throw new Error("Insufficient Balance")
        }

    } catch (e) {
        return alert(e instanceof Error ? e.message : "something went wrong")
    }

    await db.merchantWithdrawal.create({
        data: {
            status: "Processing",
            startTime: new Date(),
            token: token,
            userId: Number(userId),
            provider: provider,
            amount: amount
        }
    });
    return token
}