"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => Promise<string | void>
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF0052] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:brightness-95 hover:shadow active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF0052] focus-visible:ring-offset-2"
    >
      {children}
    </button>
  );
};
