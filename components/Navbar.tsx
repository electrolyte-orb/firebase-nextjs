import Link from "next/link";
import { useAuth } from "./";
import Image from "next/image";
import { Bars2Icon } from "@heroicons/react/24/outline";
export default function Navbar() {
  const { user } = useAuth();
  return (
    <div className="flex items-center h-20 py-4 px-6 border-b-2 border-neutral-800 sticky top-0 bg-black bg-opacity-75 backdrop-blur-sm">
      <div className="text-lg font-medium">
        Firebase <span className="text-blue-500">Next.js</span>
      </div>
      <div className="ml-auto gap-2 hidden lg:flex">
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="/login">
          <span>Login</span>
        </Link>
        <Link href="/auth">
          <span>Auth</span>
        </Link>
      </div>
      <div className="ml-auto">
        <Bars2Icon className="h-10 w-10 p-2" />
      </div>
      <div className="mr-0 ml-2 w-10 h-10">
        {user && (
          <Image width={40} height={40} src={user.photoURL!} alt="Username" />
        )}
      </div>
    </div>
  );
}
