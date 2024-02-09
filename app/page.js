import Image from "next/image";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-5xl font-bold">Welcome to Next.js</h1>
      </div>
    </div>
  );
}
