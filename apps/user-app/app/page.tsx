import { Button } from "@repo/ui/buttons";

import { PrismaClient } from "@repo/db";
import { useAtom, balanceAtom } from "@repo/store";



export default function Home() {
  return (
    <div>
      <Button label="hello from buttons" />
    </div>
  );
}
