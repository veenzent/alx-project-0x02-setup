import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-zinc-100 p-4">
      <h1 className="text-3xl text-blue font-bold">
        <Link href="/home" className="hover:text-zinc-900">
          Home
        </Link>
      </h1>
      <nav className="flex items-center gap-4">
        <Link href="/about" className="hover:text-zinc-900">
          About
        </Link>
        <Link href="/posts" className="hover:text-zinc-900">
          Posts
        </Link>
        <Link href="/users" className="hover:text-zinc-900">
          Users
        </Link>
      </nav>
    </header>
  );
}
