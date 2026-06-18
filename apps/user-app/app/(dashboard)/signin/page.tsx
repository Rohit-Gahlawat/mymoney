import { signIn } from "@/auth";

export default function SignInPage() {
    return (
        <form
            action={async (formData) => {
                "use server";

                await signIn("credentials", {
                    phone: formData.get("phone"),
                    password: formData.get("password"),
                    redirectTo: "/dashboard",
                });
            }}
        >
            <input name="phone" placeholder="Enter your Mobile Number" />
            <input name="password" type="password" placeholder="Enter Password" />
            <button type="submit">Sign In</button>
        </form>
    );
}