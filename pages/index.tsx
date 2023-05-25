import ServiceCard from '@/components/serviceCard';
import Head from 'next/head';
import Image from 'next/image';
import heroImage from '../public/images/hero.jpg';
import environmentIcon from '../assets/icons/environment.png';
import inheritanceIcon from '../assets/icons/inheritance.png';
import rentAdjustmentsIcon from '../assets/icons/rentAdjustments.png';
import stayOrLeaveIcon from '../assets/icons/stayOrLeave.png';

export default function Home() {
  const title = 'Grafenwert Immobilien';
  const description =
    'Wir für Sie - Wir stehen Ihnen zur Seite, wenn es um Immobilien geht. Zuverlässig, persönlich und kompetent.';
  const favicon = '/favicon.ico';
  const metaImage = 'https://www.grafenwert.de/images/hero.jpg';
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
                  Immobilien-Beratungsunternehmen, mit Jahrelanger Kompetenz und
                  Erfahrung im Bereich Investments und Immobilien. Verwurzelt in
                  Düsseldorf Beraten wir Mandanten in ganz NRW. Dabei ist uns
                  der stetige Austausch und das persönliche Gespräch immer
                  wichtig. Denn Vertrauen heißt: sich kennen.
                </h3>
              </div>
            </div>
          </div>
        </header>
        <main className="my-9">
          <div className="max-w-screen-lg mx-auto">
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
          </div>
          <div className="bg-gray-200 py-5 my-5">
            <h1 className="text-accent text-center text-3xl sm:text-4xl mb-9">
              Wer wir sind
            </h1>
            <div className="max-w-screen-lg mx-auto px-3 text-gray-700 flex flex-col">
              <p>
                Grafenwert Immobilien ist ein Zusammenschluss von Löchner
                Capital und Sam Zahiri (ehemals Colliers International AG und
                Graefer Immobilien). Unser Ziel ist es, Ihnen die bestmögliche
                Beratung in einer immer komplexer werdenden Immobilienwelt zu
                bieten. Unser Leistungsspektrum umfasst verschiedene Bereiche,
                um Sie ganzheitlich bei Ihren Immobilienangelegenheiten zu
                unterstützen. Hier sind einige unserer Schwerpunkte:
              </p>
              <div className="my-3 flex flex-col gap-3">
                <div className="flex gap-3 sm:gap-5 items-center flex-col sm:flex-row">
                  <Image src={environmentIcon} alt="ESG" width={70} />
                  <div>
                    <h5 className="text-accent text-lg">
                      ESG (Environmental, Social, and Governance)
                    </h5>
                    Wir beraten Sie bei Fragen der Nachhaltigkeit und
                    unterstützen Sie dabei, umweltfreundliche und sozial
                    verantwortungsbewusste Immobilieninvestitionen zu tätigen.
                    Wir helfen Ihnen, nachhaltige Immobilienprojekte zu
                    identifizieren und umzusetzen.
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-5 items-center flex-col sm:flex-row">
                  <Image src={inheritanceIcon} alt="Erbschaft" width={70} />
                  <div>
                    <h5 className="text-accent text-lg">Erbschaft</h5>
                    Wenn Sie eine Immobilie erben oder vererben möchten, stehen
                    wir Ihnen mit unserer Expertise zur Seite. Wir unterstützen
                    Sie bei der Bewertung der Immobilie, der Klärung rechtlicher
                    Aspekte und der Durchführung eines reibungslosen
                    Übergabeprozesses.
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-5 items-center flex-col sm:flex-row">
                  <Image
                    src={rentAdjustmentsIcon}
                    alt="Mietanpassungen"
                    width={70}
                  />
                  <div>
                    <h5 className="text-accent text-lg">Mietanpassungen</h5>
                    Bei Mietanpassungen helfen wir Ihnen, angemessene und faire
                    Mietpreise festzulegen. Wir analysieren den aktuellen
                    Immobilienmarkt und berücksichtigen lokale Gegebenheiten, um
                    eine optimale Mietstrategie für Ihre Immobilie zu
                    entwickeln.
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-5 items-center flex-col sm:flex-row">
                  <Image src={stayOrLeaveIcon} alt="StayOrLeave" width={70} />
                  <div>
                    <h5 className="text-accent text-lg">
                      Stay or leave Analysen
                    </h5>
                    Wenn Sie vor der Entscheidung stehen, eine Immobilie zu
                    behalten oder zu veräußern, bieten wir Ihnen umfassende
                    Analysen und Beratung. Wir bewerten die Wertentwicklung
                    Ihrer Immobilie, berücksichtigen Markttrends und
                    unterstützen Sie dabei, eine fundierte Entscheidung zu
                    treffen.
                  </div>
                </div>
              </div>
              <p>
                Darüber hinaus stehen wir Ihnen bei der Vermittlung, Verwaltung
                und Finanzierung von Immobilien zur Seite. Unser Team aus
                erfahrenen Experten arbeitet eng mit Ihnen zusammen, um
                maßgeschneiderte Lösungen für Ihre individuellen Anforderungen
                zu entwickeln. Kontaktieren Sie uns gerne, um weitere
                Informationen zu erhalten oder um einen Beratungstermin zu
                vereinbaren. Wir freuen uns darauf, Ihnen bei Ihren
                Immobilienangelegenheiten behilflich zu sein.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
