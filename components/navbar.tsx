import Image from 'next/image';
import Link from 'next/link';
import GrafenwertLogo from '../public/logo.png';
import { IoIosArrowDown, IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((o) => !o);
  const closeAll = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      <button
        onClick={toggle}
        className="flex items-center justify-between gap-1"
      >
        Leistungen
        <IoIosArrowDown
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`${
          isOpen ? 'max-h-96 py-2' : 'max-h-0 overflow-hidden'
        } transition-all flex flex-col gap-2 -mt-1 -mx-2 px-5 bg-gray-400`}
      >
        <Link onClick={closeAll} href="/services/brokerage">
          Vermittlung
        </Link>
        <div className="w-full bg-accent h-[1px]" />
        <Link onClick={closeAll} href="/services/consulting">
          Beratung
        </Link>
        <div className="w-full bg-accent h-[1px]" />
        <Link onClick={closeAll} href="/services/management">
          Hausverwaltung
        </Link>
        <div className="w-full bg-accent h-[1px]" />
        <Link onClick={closeAll} href="/services/financing">
          Finanzierung
        </Link>
        <div className="w-full bg-accent h-[1px]" />
        <Link onClick={closeAll} href="/services/evaluation">
          Immobilien Bewertung
        </Link>
      </div>
      <div className="w-full bg-accent h-[1px]" />
      <Link onClick={closeAll} href="/about">
        Über uns
      </Link>
      <div className="w-full bg-accent h-[1px]" />
      <Link onClick={closeAll} href="/press">
        Presse
      </Link>
      <div className="w-full bg-accent h-[1px]" />
      <Link onClick={closeAll} href="/jobs">
        Karriere
      </Link>
      <div className="w-full bg-accent h-[1px]" />
      <Link onClick={closeAll} href="/contact">
        Kontakt
      </Link>
    </>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((o) => !o);

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <nav className="sticky top-0 flex items-center justify-between bg-gray-300 py-2 px-4 shadow-lg text-accent z-50">
        <div className="sm:hidden" />
        <Link href="/">
          <Image src={GrafenwertLogo} alt="Grafenwert" height={40} />
        </Link>
        <div className="sm:hidden justify-self-end">
          <button onClick={toggle} className="text-2xl text-gray-800">
            {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
          </button>
        </div>
        <div
          className={`absolute bottom-0 left-0 w-full bg-gray-300 transition-all flex sm:hidden flex-col gap-2 p-2 shadow-xl ${
            isOpen
              ? 'opacity-100 translate-y-full'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <MobileMenu onClose={() => setIsOpen(false)} />
        </div>
        <div className="gap-4 hidden sm:flex">
          <div className="relative">
            <button onClick={toggle} className="flex items-center gap-1">
              <IoIosArrowDown
                className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
              Leistungen
            </button>
            <div
              className={`absolute top-10 left-0 w-52 bg-gray-300 transition-opacity flex flex-col gap-2 p-2 shadow-xl ${
                isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <Link onClick={toggle} href="/services/brokerage">
                Vermittlung
              </Link>
              <div className="w-full bg-accent h-[1px]" />
              <Link onClick={toggle} href="/services/consulting">
                Beratung
              </Link>
              <div className="w-full bg-accent h-[1px]" />
              <Link onClick={toggle} href="/services/management">
                Hausverwaltung
              </Link>
              <div className="w-full bg-accent h-[1px]" />
              <Link onClick={toggle} href="/services/financing">
                Finanzierung
              </Link>
              <div className="w-full bg-accent h-[1px]" />
              <Link onClick={toggle} href="/services/evaluation">
                Immobilien Bewertung
              </Link>
            </div>
          </div>
          <Link href="/about">Über uns</Link>
          <Link href="/press">Presse</Link>
          <Link href="/jobs">Karriere</Link>
          <Link href="/contact">Kontakt</Link>
        </div>
      </nav>
    </ClickAwayListener>
  );
}
