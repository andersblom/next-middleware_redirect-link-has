import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Link href="/foo" className="mb-4 block">next/link that redirects to /bar#baz</Link>
      <a href="/foo">a tag that redirects to /bar#baz</a>
    </main>
  );
}
