import tasksApiRequest from "@/apiRequests/tasks";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const res = tasksApiRequest.get();
  const data = (await res).payload;

  return (
    <main className="flex items-center justify-center min-h-screen">
      <Button>Click dô đây</Button>
      <div>
        <h1>List tasks: </h1>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </div>
    </main>
  );
}
