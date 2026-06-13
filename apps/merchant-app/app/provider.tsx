"use client"
import { Provider } from "@repo/store";
import { SessionProvider } from "next-auth/react";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return <Provider>
        <SessionProvider>
            {children}
        </SessionProvider>

    </Provider>

}