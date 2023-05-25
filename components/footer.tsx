import Link from 'next/link';
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-300 p-3">
      <div className="flex flex-col sm:flex-row w-full max-w-screen-lg mx-auto justify-between items-center gap-3">
        <div className="flex flex-row items-center gap-3 text-gray-800">
          <Link href="/about" className="hover:text-accent">
            Über uns
          </Link>
          <Link href="/imprint" className="hover:text-accent">
            Impressum
          </Link>
          <Link href="/privacy" className="hover:text-accent">
            Datenschutz
          </Link>
        </div>
        <div className="flex flex-row items-center gap-3 text-gray-800">
          <Link
            href="https://instagram.com/grafenwert"
            target="_blank"
            className="hover:text-accent"
          >
            <BsInstagram />
          </Link>
          <Link
            href="https://www.tiktok.com/@grafenwert"
            target="_blank"
            className="hover:text-accent"
          >
            <FaTiktok />
          </Link>
          <Link
            href="https://www.linkedin.com/company/grafenwert"
            target="_blank"
            className="hover:text-accent"
          >
            <BsLinkedin />
          </Link>
          <Link
            href="https://www.facebook.com/grafenwert"
            target="_blank"
            className="hover:text-accent"
          >
            <BsFacebook />
          </Link>
          <Link
            href="https://www.youtube.com/@Grafenwert-Immobilien"
            target="_blank"
            className="hover:text-accent"
          >
            <BsYoutube />
          </Link>
        </div>
      </div>
      <p className="text-gray-600 text-center mt-3">
        ©2023 Grafenwert Immobilien
      </p>
    </footer>
  );
}
