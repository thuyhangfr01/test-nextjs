import { ModeToggle } from "@/components/mode-toggle";
import LoginForm from "./login-form";

export default function LoginPage() {
  return (
    <div className="p-20">
      <ModeToggle />
      <h1 className="text-xl font-semibold text-center">Sign In</h1>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
