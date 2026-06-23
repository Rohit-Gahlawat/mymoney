import { type JSX } from "react";
import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-6">
      <h1 className="mb-4 border-b border-gray-200 pb-3 text-base font-semibold text-stone-800 sm:text-lg">
        {title}
      </h1>
      <div className="text-stone-600">{children}</div>
    </div>
  );
}
