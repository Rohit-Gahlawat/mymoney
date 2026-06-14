
import { Button } from "@repo/ui/buttons";
import { Appbar } from "@repo/ui/appbar"
// import { PrismaClient } from "@repo/db";
// import { useAtom, balanceAtom, useBalance } from "@repo/store";
import { auth, } from "@/auth"
import { handleSignIn, handleSignOut } from "./actions"



export default async function Home() {
  const session = await auth();
  const user = session?.user
  return (
    <div>
      <Appbar user={user} onSignin={handleSignIn} onSignout={handleSignOut}></Appbar>
      <Button label="hello from buttons" />
    </div>
  );
}
