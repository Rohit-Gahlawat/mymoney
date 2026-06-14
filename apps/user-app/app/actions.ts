"use server"
import { signIn, signOut } from "@/auth"

export async function handleSignIn() {
    "use server";
    await signIn();
}

export async function handleSignOut() {
    "use server";
    await signOut();
}