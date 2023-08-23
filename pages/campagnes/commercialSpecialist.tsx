import Head from 'next/head';
import Image from 'next/image';
import RLImage from '@/public/images/people/RL.jpg';
import SZImage from '@/public/images/people/SZ.jpg';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import ServiceCard from '@/components/serviceCard';
import { use, useEffect, useState } from 'react';
import ContactForm from '@/components/contactForm';

const imageNames = [
  'bank',
  'medical',
  'office',
  'production',
  'restaurant',
  'shop',
];

export default function CommercialSpecialistCampagne() {
  const title = 'Grafenwert Immobilien';
  const description =
    'Wir für Sie - Ihr Immobilienmakler für Gewerbeimmobilien in Düsseldorf und Nordrhein-Westfalen. Zuverlässig - persönlich - kompetent.';
  const favicon = '/favicon.ico';
  const metaImage = 'https://www.grafenwert.de/images/hero.jpg';
  const url = 'https://www.grafenwert.de';

  const [imageName, setImageName] = useState(imageNames[0]);
  const [nextImageName, setNextImageName] = useState(imageNames[1]);
  const [inTransition, setInTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setInTransition(true);
      setTimeout(() => {
        const index = imageNames.indexOf(imageName);
        if (index < imageNames.length - 1) {
          setImageName(imageNames[index + 1]);
        } else {
          setImageName(imageNames[0]);
        }
        if (index < imageNames.length - 2) {
          setNextImageName(imageNames[index + 2]);
        } else if (index < imageNames.length - 1) {
          setNextImageName(imageNames[0]);
        } else {
          setNextImageName(imageNames[1]);
        }
        setInTransition(false);
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, [imageName]);

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
          <div className="w-full sm:h-[50vh] overflow-hidden relative">
            <img
              src={`/images/campagnes/commercialSpecialist/${imageName}.jpg`}
              alt={imageName}
              className="w-full opacity-0"
            />
            {imageNames.map((name) => (
              <img
                key={name}
                src={`/images/campagnes/commercialSpecialist/${name}.jpg`}
                alt={name}
                className={`w-full absolute top-0 left-0 transition-opacity duration-1000 ${
                  name == imageName ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="relative sm:absolute top-0 left-0 w-full h-full bg-none sm:bg-gradient-to-b from-gray-770 via-gray-970 to-gray-770 flex justify-center">
              <div className="max-w-screen-lg mx-auto px-3 flex flex-col justify-center gap-3 text-center text-gray-700 sm:text-white">
                <h1 className="text-2xl sm:text-6xl text-accent sm:text-white">
                  Grafenwert Immobilien
                </h1>
                <h2 className="text-xl sm:text-3xl mb-2">
                  Ihr Gewerbevermietungs-Experte
                </h2>
                <h3 className="text-xl">
                  Von Büros über Industrie bis hin zum Einzelhandel - Wir finden
                  die perfekte Lösung für Sie
                </h3>
              </div>
            </div>
          </div>
        </header>
        <main className="my-9">
          <div className="max-w-screen-lg mx-auto mb-10">
            <h1 className="text-accent text-center text-2xl sm:text-4xl">
              Wie wir Ihnen helfen können
            </h1>
            <ul className="mt-3 p-3 list-disc list-inside text-xl flex flex-col gap-4">
              <li>Maßgeschneiderte Lösungen für jede Branche</li>
              <li>Große Auswahl an verfügbaren Objekten</li>
              <li>Persönliche Beratung von Experten</li>
              <li>Effiziente Abwicklung und transparenter Prozess</li>
            </ul>
            <ContactForm />
          </div>
          <h2 className="text-accent text-center text-2xl sm:text-4xl">
            Zuverlässig - persönlich - kompetent
          </h2>
          <div className="my-5 max-w-screen-lg mx-auto px-3">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 items-center justify-center">
              <div className="flex-1">
                <Image
                  src={RLImage}
                  alt="RL"
                  className="w-full object-cover rounded-lg"
                />
                <p className="text-lg text-center text-gray-700">
                  Reinhard Löchner (Geschäftsführer)
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src={SZImage}
                  alt="SZ"
                  className="w-full object-cover rounded-lg"
                />
                <p className="text-lg text-center text-gray-700">
                  Sam Zahiri (Geschäftsführer)
                </p>
              </div>
            </div>
            <Link
              href="/about"
              className="w-full max-w-screen-lg mx-auto mt-3 p-3 text-white bg-accent rounded-lg flex items-center justify-center gap-2 text-lg sm:text-xl"
            >
              Mehr über uns <BsArrowRight className="text-xl" />
            </Link>
          </div>
          <div className="bg-gray-200 py-5 mt-10">
            <div className="max-w-screen-lg mx-auto">
              <h1 className="text-accent text-center text-2xl sm:text-4xl">
                Wir stehen Ihnen zur Seite.
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3">
                <ServiceCard
                  href="/services#brokerage"
                  title="Vermittlung"
                  text="Wir vermieten und verkaufen Ein- und Mehrfamilienhäuser, Wohnungen, Grundstücke und Gewerbeimmobilien. Vor dem Verkauf bieten wir unseren Kunden eine individuelle Bewertung an."
                  imageUrl="/images/services/brokerage.jpg"
                />
                <ServiceCard
                  href="/services#consulting"
                  title="Beratung"
                  text="Wir beraten Sie in allen Fragen rund um Ihre Immobilien. Von der Mietanpassung über Stay or Leave Analysen, in Erbschaftsfragen oder bei Fragen der Nachhaltigkeit (ESG)."
                  imageUrl="/images/services/consulting.jpg"
                />
                <ServiceCard
                  href="/services#management"
                  title="Hausverwaltung"
                  text="Wir verwalten Immobilien aller Art. Von der Eigentumswohnung bis hin zum Mehrfamilienhaus. Wir sind Ihr Ansprechpartner, wenn es um die Verwaltung von Immobilien geht."
                  imageUrl="/images/services/management.jpg"
                />
                <ServiceCard
                  href="/services#financing"
                  title="Finanzierung"
                  text="Wir investieren in Immobilien aller Art. Von der Eigentumswohnung bis hin zum Mehrfamilienhaus. Wir sind Ihr Ansprechpartner, wenn es um die Investition in Immobilien geht."
                  imageUrl="/images/services/financing.jpg"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-200 py-5 mt-10">
            <div className="max-w-screen-lg mx-auto">
              <h1 className="text-accent text-center text-2xl sm:text-4xl">
                Kostenlose Immobilienbewertung anfordern
              </h1>
              <p className="text-center text-lg sm:text-xl text-gray-700 mt-3">
                Mit unserem Immobilienbewertungstool können Sie den Wert Ihrer
                Immobilie schnell und einfach ermitteln.
              </p>
              <Link
                href="/services/evaluation"
                className="block w-full max-w-sm mx-auto my-5 p-3 text-center text-white bg-accent rounded-lg text-lg sm:text-xl"
              >
                Immobilienbewertung anfordern
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
