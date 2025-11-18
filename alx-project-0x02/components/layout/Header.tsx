import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-zinc-100 p-4">
      <h1 className="text-3xl text-blue font-bold">
        <a href="/home" className="hover:text-zinc-900">
          Home
        </a>
      </h1>
      <nav className="flex items-center gap-4">
        <a href="/about" className="hover:text-zinc-900">
          About
        </a>
        <a href="/posts" className="hover:text-zinc-900">
          Posts
        </a>
        <a href="/users" className="hover:text-zinc-900">
          Users
        </a>
      </nav>
    </header>
  );
}
