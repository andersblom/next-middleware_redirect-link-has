import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Link href="/foo" className="mb-4 block">next/link that redirects to /bar#baz</Link>
      <a href="/foo" className="mb-4 block">a tag that redirects to /bar#baz</a>
      <Link href="/baz" className="mb-4 block">next/link that redirects to /bar?baz=qux</Link>
      <a href="/baz">a tag that redirects to /bar?baz=qux</a>
    </main>
  );
}
