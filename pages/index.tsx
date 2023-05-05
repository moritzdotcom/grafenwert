import Image from 'next/image';
import heroImage from '../assets/images/hero.jpeg';

export default function Home() {
  return (
    <div>
      <header>
        <div className="w-full sm:max-h-[80vh] overflow-hidden relative">
          <Image src={heroImage} alt="Grafenwert" className="w-full" />
          <div className="relative sm:absolute top-0 left-0 w-full h-full bg-none sm:bg-gradient-to-b from-gray-700 via-black to-gray-700 opacity-100 sm:opacity-70 flex justify-center">
            <div className="max-w-screen-lg mx-auto px-3 flex flex-col justify-center gap-3 text-center text-gray-700 sm:text-white">
              <h1 className="text-3xl sm:text-6xl text-accent sm:text-white">
                Grafenwert Immobilien
              </h1>
              <h2 className="text-xl sm:text-3xl">
                Wir für Sie - Wir stehen Ihnen zur Seite, wenn es um Immobilien
                geht. <br />
                Zuverlässig, persönlich und kompetent
              </h2>
              <h3 className="text-justify">
                Wir sind ein Eigentümergeführtes
                Immobilien-Beratungsunternehmen, mit Jahrelanger
                Kompetenz/Erfahrung im Bereich Investments und Immobilien.
                Verwurzelt in Düsseldorf Beraten wir Mandanten in ganz NRW.
                Dabei ist uns der stetige Austausch und das persönliche Gespräch
                immer wichtig. Denn Vertrauen heißt: sich kennen.
              </h3>
            </div>
          </div>
        </div>
      </header>
      <main className="my-5 max-w-screen-lg mx-auto">
        <h1 className="text-accent text-center text-3xl sm:text-4xl">
          Unsere Leistungen. Für Sie.
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 mt-5">
          <div className="bg-gray-300 p-3 flex flex-col gap-3">
            <h2 className="text-accent text-2xl">Vermittlung</h2>
            <p className="text-gray-700">
              Wir vermitteln Immobilien aller Art. Von der Eigentumswohnung bis
              hin zum Mehrfamilienhaus. Wir sind Ihr Ansprechpartner, wenn es um
              die Vermittlung von Immobilien geht.
            </p>
          </div>
          <div className="bg-gray-300 p-3 flex flex-col gap-3">
            <h2 className="text-accent text-2xl">Beratung</h2>
            <p className="text-gray-700">
              Wir beraten Sie in allen Fragen rund um Immobilien. Von der
              Finanzierung bis hin zur Immobilienbewertung. Wir sind Ihr
              Ansprechpartner, wenn es um die Beratung von Immobilien geht.
            </p>
          </div>
          <div className="bg-gray-300 p-3 flex flex-col gap-3">
            <h2 className="text-accent text-2xl">Hausverwaltung</h2>
            <p className="text-gray-700">
              Wir verwalten Immobilien aller Art. Von der Eigentumswohnung bis
              hin zum Mehrfamilienhaus. Wir sind Ihr Ansprechpartner, wenn es um
              die Verwaltung von Immobilien geht.
            </p>
          </div>
          <div className="bg-gray-300 p-3 flex flex-col gap-3">
            <h2 className="text-accent text-2xl">Investment</h2>
            <p className="text-gray-700">
              Wir investieren in Immobilien aller Art. Von der Eigentumswohnung
              bis hin zum Mehrfamilienhaus. Wir sind Ihr Ansprechpartner, wenn
              es um die Investition in Immobilien geht.
            </p>
          </div>
        </div>
        <h1 className="text-accent text-center text-3xl sm:text-4xl my-3">
          Wer wir sind
        </h1>
        <div className="mx-3 text-gray-700 flex flex-col gap-3">
          <p>
            Grafenwert Immobilien ist ein Zusammenschluss von Löchner Capital
            und Sam Zahiri (ehemals Colliers International AG und Graefer
            Immobilien). Gemeinsam bieten Ihnen die bestmögliche Beratung in
            einer immer komplexer werdenden Immobilienwelt.
          </p>
          <ul className="list-disc list-inside">
            <li>ESG</li>
            <li>Erbschaft</li>
            <li>Mietanpassungen</li>
            <li>Stay or leave Analysen</li>
          </ul>
          <p>
            Dabei unterstützen wir Sie ganzheitlich bei der Vermittlung,
            Verwaltung und Finanzierung
          </p>
        </div>
      </main>
    </div>
  );
}
