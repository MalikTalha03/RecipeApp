import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Discover & Share new Recipes</h1>
      <p className="text-lg mt-4">Tastebite is a platform for foodies to share 
      their favorite recipes with the world.</p>
      <input 
        type="search"
        placeholder="Enter Recipe Name"
        className="p-2 rounded-lg w-1/2 border-2 border-gray-300 mt-4"
      />
    </section>
  );
}
