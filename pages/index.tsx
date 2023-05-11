import ServiceCard from '@/components/serviceCard';
import Head from 'next/head';
import Image from 'next/image';
import heroImage from '../public/images/hero.jpeg';

export default function Home() {
  const title = 'Grafenwert Immobilien';
  const description =
    'Wir für Sie - Wir stehen Ihnen zur Seite, wenn es um Immobilien geht. Zuverlässig, persönlich und kompetent.';
  const favicon = '/favicon.ico';
  const metaImage = 'https://www.grafenwert.de/images/hero.jpeg';
  const url = 'https://www.grafenwert.de';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href={favicon} />
        <link rel="icon" href={favicon} />

        <meta name="twitter:image" content={metaImage} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:image" content={metaImage} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:url" content={url} />
      </Head>
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
                  Wir für Sie - Wir stehen Ihnen zur Seite, wenn es um
                  Immobilien geht. <br />
                  Zuverlässig, persönlich und kompetent.
                </h2>
                <h3 className="text-justify">
                  Wir sind ein Eigentümergeführtes
                  Immobilien-Beratungsunternehmen, mit Jahrelanger
                  Kompetenz/Erfahrung im Bereich Investments und Immobilien.
                  Verwurzelt in Düsseldorf Beraten wir Mandanten in ganz NRW.
                  Dabei ist uns der stetige Austausch und das persönliche
                  Gespräch immer wichtig. Denn Vertrauen heißt: sich kennen.
                </h3>
              </div>
            </div>
          </div>
        </header>
        <main className="my-9 max-w-screen-lg mx-auto">
          <h1 className="text-accent text-center text-3xl sm:text-4xl">
            Unsere Leistungen. Für Sie.
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 mt-5">
            <ServiceCard
              href="/services/brokerage"
              title="Vermittlung"
              text="Wir vermitteln Immobilien aller Art. Von der Eigentumswohnung bis hin zum Mehrfamilienhaus. Wir sind Ihr Ansprechpartner, wenn es um die Vermittlung von Immobilien geht."
              imageUrl="/images/services/brokerage.jpg"
            />
            <ServiceCard
              href="/services/consulting"
              title="Beratung"
              text="Wir beraten Sie in allen Fragen rund um Immobilien. Von der Finanzierung bis hin zur Immobilienbewertung. Wir sind Ihr Ansprechpartner, wenn es um die Beratung von Immobilien geht."
              imageUrl="/images/services/consulting.jpg"
            />
            <ServiceCard
              href="/services/management"
              title="Hausverwaltung"
              text="Wir verwalten Immobilien aller Art. Von der Eigentumswohnung bis hin zum Mehrfamilienhaus. Wir sind Ihr Ansprechpartner, wenn es um die Verwaltung von Immobilien geht."
              imageUrl="/images/services/management.jpg"
            />
            <ServiceCard
              href="/services/financing"
              title="Finanzierung"
              text="Wir investieren in Immobilien aller Art. Von der Eigentumswohnung bis hin zum Mehrfamilienhaus. Wir sind Ihr Ansprechpartner, wenn es um die Investition in Immobilien geht."
              imageUrl="/images/services/financing.jpg"
            />
          </div>
          <h1 className="text-accent text-center text-3xl sm:text-4xl my-9">
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
              Verwaltung und Finanzierung.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
