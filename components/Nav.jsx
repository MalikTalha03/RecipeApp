"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { data: session } = useSession();
  const [providersList, setProvidersList] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const providers = await getProviders();
      setProvidersList(providers);
      console.log(providers);
    };
    fetchData();
  }, []);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-400 text-black w-full">
      <div className="hidden md:flex items-center gap-4 justify-between w-full">
        <Image src="/logo.png" alt="logo" width={90} height={90} />
        <>
          {session?.user ? (
            <div className="flex items-center gap-4">
              <button
                onClick={() => {}}
                className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold"
              >
                Add Recipe
              </button>
              <button
                onClick={() => signOut()}
                className="bg-red-500 text-white px-4 py-2 rounded-full font-bold"
              >
                Sign Out
              </button>
              <Link href="/profile">
                <Image
                  src="/user.png"
                  alt="user"
                  width={37}
                  height={37}
                  className="rounded-full cursor-pointer"
                />
              </Link>
            </div>
          ) : (
            <>
              {providersList &&
                Object.values(providersList).map((provider) => (
                  <button
                    onClick={() => signIn(provider.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold"
                    key={provider.name}
                  >
                    Sign In
                  </button>
                ))}
            </>
          )}
        </>
      </div>

      {/* Mobile Nav */}
      <div className="flex md:hidden items-center justify-between w-full">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        {session?.user ? (
          <>
            <Image
              src="/user.png"
              alt="user"
              width={37}
              height={37}
              className="rounded-full cursor-pointer"
              onClick={() => setShowDropdown((prev) => !prev)}
            />
            {showDropdown && (
              <div className="flex flex-col items-center gap-4 absolute top-16 right-4 p-4 rounded-lg border-2 border-gray-300 bg-white">
                <button onClick={() => {}} className=" px-4 py-2  font-bold">
                  Add Recipe
                </button>
                <Link href="/profile">
                  <button className=" px-4 py-2  font-bold">Profile</button>
                </Link>
                <button
                  onClick={() => signOut()}
                  className="bg-red-500 text-white px-4 py-2 rounded-full font-bold"
                >
                  Sign Out
                </button>
              </div>
            )}
          </>
        ) : (
          <button
            onClick={() => signIn()}
            className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold"
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
