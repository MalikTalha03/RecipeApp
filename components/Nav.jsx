"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  let { data: session } = useSession();
  session = true

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-400 text-black w-full">
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 justify-between w-full">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <>
        {session ? (
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
          </div>
        ) : (
          <button
            onClick={() => signIn()}
            className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold"
          >
            Sign In
          </button>
        )}
        </>
      </div>

      <div className="md:hidden">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <button onClick={() => setShowMenu(!showMenu)}>
          <Image src="/menu.svg" alt="menu" width={20} height={20} />
        </button>
        {showMenu && (
          <div className="flex flex-col items-center gap-4">
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a>About</a>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
