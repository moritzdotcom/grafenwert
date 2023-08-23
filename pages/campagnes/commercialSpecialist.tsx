import Head from 'next/head';
import Image from 'next/image';
import RLImage from '@/public/images/people/RL.jpg';
import SZImage from '@/public/images/people/SZ.jpg';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import InputGroup from '@/components/inputGroup';
import { isValidEmail } from '@/services/validator';

const imageNames = [
  'bank',
  'medical',
  'production',
  'office',
  'restaurant',
  'shop',
];

const imageNameLookup: { [key: string]: string } = {
  bank: 'Bürogebäude',
  medical: 'Praxen',
  production: 'Produktionsstätten',
  office: 'Bürogebäude',
  restaurant: 'Gastronomie',
  shop: 'Einzelhandel',
};

export default function CommercialSpecialistCampagne() {
  const title = 'Grafenwert Immobilien';
  const description =
    'Wir für Sie - Ihr Immobilienmakler für Gewerbeimmobilien in Düsseldorf und Nordrhein-Westfalen. Zuverlässig - persönlich - kompetent.';
  const favicon = '/favicon.ico';
  const metaImage = 'https://www.grafenwert.de/images/hero.jpg';
  const url = 'https://www.grafenwert.de';

  const [imageName, setImageName] = useState(imageNames[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const index = imageNames.indexOf(imageName);
      if (index < imageNames.length - 1) {
        setImageName(imageNames[index + 1]);
      } else {
        setImageName(imageNames[0]);
      }
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
            <div className="flex absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-770 via-gray-970 to-gray-770 justify-center">
              <div className="hidden sm:flex max-w-screen-lg mx-auto px-3 flex-col justify-center gap-3 text-center text-gray-700 sm:text-white">
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
              <div className="absolute top-5 left-1/2 -translate-x-1/2">
                {imageNameLookup[imageName] && (
                  <h3 className="text-xl sm:text-2xl text-white">
                    {imageNameLookup[imageName]}
                  </h3>
                )}
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
              {imageNames.map((name) => (
                <button
                  onClick={() => setImageName(name)}
                  className={`border border-white rounded-full w-4 h-4 ${
                    imageName === name ? 'bg-white' : ''
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </header>
        <div className="flex sm:hidden w-full h-full bg-none justify-center my-5">
          <div className="max-w-screen-lg mx-auto px-3 flex flex-col justify-center gap-3 text-center text-gray-700">
            <h1 className="text-2xl sm:text-6xl text-accent">
              Grafenwert Immobilien
            </h1>
            <h2 className="text-xl sm:text-3xl mb-2">
              Ihr Gewerbevermietungs-Experte
            </h2>
            <h3 className="text-xl">
              Von Büros über Industrie bis hin zum Einzelhandel - Wir finden die
              perfekte Lösung für Sie
            </h3>
          </div>
        </div>
        <main className="my-9">
          <div className="max-w-screen-lg mx-auto mb-10">
            <h1 className="text-accent text-center text-2xl sm:text-4xl">
              Wie wir Ihnen helfen können
            </h1>
            <ul className="mt-3 p-3 text-xl flex flex-col gap-4">
              <li>
                <MdOutlineKeyboardDoubleArrowRight className="inline mr-1 text-accent font-bold" />
                Maßgeschneiderte Lösungen für jede Branche
              </li>
              <li>
                <MdOutlineKeyboardDoubleArrowRight className="inline mr-1 text-accent font-bold" />
                Große Auswahl an verfügbaren Objekten
              </li>
              <li>
                <MdOutlineKeyboardDoubleArrowRight className="inline mr-1 text-accent font-bold" />
                Persönliche Beratung von Experten
              </li>
              <li>
                <MdOutlineKeyboardDoubleArrowRight className="inline mr-1 text-accent font-bold" />
                Effiziente Abwicklung und transparenter Prozess
              </li>
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
        </main>
      </div>
    </>
  );
}

type ErrorObject = {
  companyName?: string;
  name?: string;
  address?: string;
  email?: string;
  privacy?: string;
};

const searchTypeLookup: { [key: string]: string } = {
  office: 'das perfekte Bürogebäude',
  medical: 'die passende Praxis',
  production: 'die optimale Produktionsstätte',
  restaurant: 'das ideale Restaurant',
  shop: 'die perfekte Ladenfläche',
  other: 'die perfekte Immobilie',
};

function ContactForm() {
  const [companyName, setCompanyName] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [searchType, setSearchType] = useState('office');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [sizeFrom, setSizeFrom] = useState('');
  const [sizeTo, setSizeTo] = useState('');

  const [privacy, setPrivacy] = useState(false);

  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [errors, setErrors] = useState<ErrorObject>({});
  const [formWasSubmitted, setFormWasSubmitted] = useState(false);

  const validate = () => {
    const tmpErrors: ErrorObject = {};

    if (companyName.length < 3) {
      tmpErrors.companyName = 'Bitte geben Sie den Firmennamen an';
    }
    if (name.length < 3) {
      tmpErrors.name = 'Bitte geben Sie den Ansprechpartner an';
    }
    if (address.length < 3) {
      tmpErrors.address = 'Bitte geben Sie die Adresse an';
    }
    if (!isValidEmail(email)) {
      tmpErrors.email = 'Bitte geben Sie die E-Mail-Adresse an';
    }
    if (!privacy) {
      tmpErrors.privacy = 'Bitte akzeptieren Sie die Datenschutzerklärung';
    }

    setErrors(tmpErrors);
    return Object.keys(tmpErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valid = validate();
    setFormWasSubmitted(true);
    if (!valid) return;
    setLoading(true);

    try {
      const res = await fetch('/api/commercialSpecialist', {
        body: JSON.stringify({
          companyName,
          name,
          address,
          email,
          phone,
          searchType,
          priceFrom,
          priceTo,
          sizeFrom,
          sizeTo,
        }),
        method: 'POST',
      });

      const response = await res.json();
      if (response.error) {
        console.error(response.error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setLoading(false);
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
    } catch (error) {
      console.error(error);
      setShowFailureMessage(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!formWasSubmitted) return;
    validate();
  }, [companyName, name, address, email, phone, privacy]);

  if (showSuccessMessage)
    return (
      <div
        className="p-4 my-4 text-gray-700 bg-gray-100 rounded-lg text-lg"
        role="alert"
      >
        Wir haben {searchTypeLookup[searchType]} für Sie gefunden! Wir antworten
        Ihnen so schnell wie möglich.
      </div>
    );
  if (showFailureMessage)
    return (
      <div className="p-4 my-4 text-accent bg-red-100 rounded-lg" role="alert">
        Beim versenden Ihrer Anfrage ist leider etwas schief gelaufen. Bitte
        teilen Sie uns Ihre Details direkt mit einer Mail an
        <span className="font-bold mx-1">info@grafenwert.de</span>
        mit.
      </div>
    );

  return (
    <form
      className="w-full mt-5 bg-gray-100 rounded-none md:rounded px-3 py-2"
      onSubmit={handleSubmit}
    >
      {loading ? (
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="animate-spin rounded-full h-12 w-12 border-t-accent border-4 border-white" />
          <h3 className="text-accent text-lg font-semibold ml-3">
            Bitte warten...
          </h3>
        </div>
      ) : (
        <>
          <h3 className="text-accent text-lg font-semibold">
            Ihre Kontaktdaten
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <InputGroup
                id="CompanyName"
                label="Firma*"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                error={errors.companyName}
              />
              <InputGroup
                id="Name"
                label="Ansprechpartner (Vor- & Nachname)*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
              />
            </div>
            <InputGroup
              id="address"
              type="text"
              label="Anschrift der Firma*"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              error={errors.address}
            />
            <InputGroup
              id="email"
              type="email"
              label="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />
            <InputGroup
              id="phone"
              type="tel"
              label="Telefonnummer (optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <h3 className="text-accent text-lg font-semibold">
              Was Sie suchen
            </h3>
            <div className="flex flex-col">
              <label htmlFor="searchType" className="text-gray-700">
                Ich suche*
              </label>
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="p-2.5 border-gray-200 border-2 rounded-md outline-none text-accent"
              >
                <option value="office">Ein Bürogebäude</option>
                <option value="medical">Eine Praxis</option>
                <option value="production">Eine Produktionsstätte</option>
                <option value="restaurant">Ein Restaurant</option>
                <option value="shop">Ein Einzelhandelsgeschäft</option>
                <option value="other">Sonstiges</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <InputGroup
                id="priceFrom"
                label="Preisvorstellung (ab)"
                type="number"
                suffix="€"
                value={priceFrom}
                onChange={(e) => setPriceFrom(e.target.value)}
              />
              <InputGroup
                id="priceTo"
                label="Preisvorstellung (bis)"
                type="number"
                suffix="€"
                value={priceTo}
                onChange={(e) => setPriceTo(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <InputGroup
                id="sizeFrom"
                label="Größe (ab)"
                type="number"
                suffix="m²"
                value={sizeFrom}
                onChange={(e) => setSizeFrom(e.target.value)}
              />
              <InputGroup
                id="sizeTo"
                label="Größe (bis)"
                type="number"
                suffix="m²"
                value={sizeTo}
                onChange={(e) => setSizeTo(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-[20px_1fr] items-start gap-2">
            <input
              type="checkbox"
              id="privacy"
              checked={privacy}
              onChange={(e) => setPrivacy(e.target.checked)}
              className="mt-1.5"
            />
            <label htmlFor="privacy" className="text-gray-700 cursor-pointer">
              Ich habe die
              <a
                href="/privacy"
                target="_blank"
                className="text-accent mx-1 underline"
              >
                Datenschutzerklärung
              </a>
              gelesen und bin mit der Verarbeitung meiner Daten einverstanden.*
            </label>
          </div>
          {errors.privacy && (
            <p className="text-red-500 text-sm">{errors.privacy}</p>
          )}
        </>
      )}
      <div className="flex justify-center mt-5 mb-3">
        <button
          type="submit"
          disabled={loading}
          className="bg-accent text-white px-5 py-2 rounded-md"
        >
          {loading ? 'Suchen...' : 'Suche starten'}
        </button>
      </div>
    </form>
  );
}
