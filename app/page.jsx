import Feed from "@components/Feed";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center mt-16">
      <h1 className=" font-bold text-center text-5xl sm:text-6xl mt-6">
        Discover & Share new Recipes
      </h1>
      <p className="mt-4 text-center text-lg sm:text-xl">
        Tastebite is a platform for foodies to share their favorite recipes with
        the world.
      </p>
      <Feed />
    </section>
  );
}
