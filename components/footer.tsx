import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-300 p-3 flex flex-col gap-3 sm:flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-3 text-gray-800">
        <Link href="/about">Über uns</Link>
        <Link href="/imprint">Impressum</Link>
        <Link href="/privacy">Datenschutz</Link>
      </div>
      <p className="text-gray-600">©2023 Grafenwert Immobilien</p>
    </footer>
  );
}
