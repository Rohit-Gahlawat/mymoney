"use client"
import { useBalance } from "@repo/store";

export default function Home() {
  const value = useBalance();
  return (<div>
    your balance is {value}
  </div>

  );
}
