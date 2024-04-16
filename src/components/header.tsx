import NavBar from "./navigation-bar";

export default async function Header() {
  return (
    <div className="flex space-x-4 p-10">
      <NavBar />
    </div>
  );
}
