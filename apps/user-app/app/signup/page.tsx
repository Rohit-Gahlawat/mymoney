"use client"
import Link from "next/link";
import { useState } from "react";
import { SignUp } from "../actions";
import { useRouter } from "next/navigation";

export default function SignUpPage() {

    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");
    const [confirmPassword, setCOnfirmPassword] = useState("");
    const [err, setErr] = useState("")
    const router = useRouter();


    async function onSignUp() {
        setErr("");
        if (password !== confirmPassword) {
            setErr("Passwords do not match")
            return;
        }
        const res = await SignUp({ phone: number, password });
        if (!res.success) {

            setErr(res.message ?? "signup failed") // diff bw ?? and ||
            return;
        }
        router.push("/dashboard");
        router.refresh();

    }

    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white px-4 py-12">

            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF0052] text-lg font-bold text-white shadow-sm">
                        P
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-stone-800">
                        Create your account
                    </h1>
                    <p className="mt-1 text-sm text-stone-500">
                        Open a mymoney wallet in seconds
                    </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                    {err && (
                        <p className="mb-4 rounded-lg bg-[#FF0052]/10 px-3 py-2 text-sm text-[#FF0052]">
                            {err}
                        </p>
                    )}
                    <form className="flex flex-col gap-4">


                        <label className="block">
                            <span className="mb-1.5 block text-sm font-medium text-stone-700">
                                Mobile Number
                            </span>
                            <input
                                name="phone"
                                type="tel"
                                placeholder="Enter your mobile number"
                                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-stone-800 outline-none transition-colors placeholder:text-stone-400 focus:border-[#FF0052] focus:ring-2 focus:ring-[#FF0052]/30"
                                onChange={(e) => {
                                    setNumber(e.target.value);
                                }}
                                value={number}
                            />
                        </label>

                        <label className="block">
                            <span className="mb-1.5 block text-sm font-medium text-stone-700">
                                Password
                            </span>
                            <input
                                name="password"
                                type="password"
                                placeholder="Create a password"
                                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-stone-800 outline-none transition-colors placeholder:text-stone-400 focus:border-[#FF0052] focus:ring-2 focus:ring-[#FF0052]/30"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                value={password}
                            />
                        </label>

                        <label className="block">
                            <span className="mb-1.5 block text-sm font-medium text-stone-700">
                                Confirm Password
                            </span>
                            <input
                                name="confirmPassword"
                                type="password"
                                placeholder="Re-enter your password"
                                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-stone-800 outline-none transition-colors placeholder:text-stone-400 focus:border-[#FF0052] focus:ring-2 focus:ring-[#FF0052]/30"
                                onChange={(e) => {
                                    setCOnfirmPassword(e.target.value);
                                }}
                                value={confirmPassword}
                            />
                        </label>

                        <button
                            type="button"
                            className="mt-2 w-full rounded-xl bg-[#FF0052] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 active:brightness-90"
                            onClick={onSignUp}
                        >
                            Create account
                        </button>
                    </form>
                </div>

                <p className="mt-6 text-center text-sm text-stone-500">
                    Already have an account?{" "}
                    <Link
                        href="/signin"
                        className="font-semibold text-[#FF0052] underline-offset-2 hover:underline"
                    >
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
}
