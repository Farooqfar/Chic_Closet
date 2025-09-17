import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav>
        <ul className="flex justify-center items-center gap-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/solids">Solids</Link>
          </li>
          <li>
            <Link href="/luxe">Luxe</Link>
          </li>
          <li>
            <Link href="printed">Printed set</Link>
          </li>
          <li>
            <Link href="westren">Westren</Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
