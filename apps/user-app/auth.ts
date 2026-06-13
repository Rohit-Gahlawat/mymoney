import { authoptions } from "./lib/auth";
import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth(authoptions);