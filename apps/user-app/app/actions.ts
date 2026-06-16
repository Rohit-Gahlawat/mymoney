"use server"
import { signIn, signOut } from "@/auth";
import { randomUUID } from "crypto";
import db from "@repo/db";
import { auth } from "@/auth";


export async function handleSignIn() {
    "use server";
    await signIn();
};

export async function handleSignOut() {
    "use server";
    await signOut();
};

export async function addMoney(amount: number, provider: string) {
    const randomID = randomUUID();
    const token = `ID_${Date.now()}_${randomID}`;
    const session = await auth();
    if (!session?.user?.id) {
        return alert("you are not logged in")
    } else {
        await db.onRampTransaction.create({
            data: {
                status: "Processing",
                startTime: new Date(),
                token: token,
                amount: amount,
                provider: provider,
                userId: session?.user?.id

            }
        })
        return token;
    }





}