import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <Button>Click dô đây</Button>
      <Link href="/home">Home page</Link>
      <div>
        <h1>List tasks: </h1>
      </div>
    </main>
  );
}
