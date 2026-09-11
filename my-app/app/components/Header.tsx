import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <h1 className="text-2xl font-bold">IFCS</h1>

      <nav className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
