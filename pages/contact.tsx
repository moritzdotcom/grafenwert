import GoogleMap from '@/components/googleMap';
import useQueryParams from '@/hooks/useQueryParams';
import Head from 'next/head';
import { GetStaticProps } from 'next/types';
import { FormEvent, useState } from 'react';
import { MdLocalPhone, MdMail } from 'react-icons/md';

type ErrorObject = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactPage({
  gmapsApiKey,
}: {
  gmapsApiKey: string | undefined;
}) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<ErrorObject>({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const { subject } = useQueryParams();

  const handleValidation = () => {
    let tempErrors: ErrorObject = {};
    let isValid = true;

    if (name.length < 3) {
      tempErrors.name = 'Mindestens 3 Zeichen';
      isValid = false;
    }
    if (
      !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        email
      )
    ) {
      tempErrors.email = 'Ungültige Email';
      isValid = false;
    }
    if (message.length < 12) {
      tempErrors.message = 'Mindestens 12 Zeichen';
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const isValidForm = handleValidation();

    if (isValidForm) {
      const res = await fetch('/api/sendMail', {
        body: JSON.stringify({
          email: email,
          name: name,
          message: message,
          subject,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const response = await res.json();
      if (response.error) {
        console.log(response.error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setLoading(false);
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
    }
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Grafenwert - Kontakt</title>
      </Head>
      <main className="mt-5 max-w-5xl mx-auto px-5 mb-5">
        <h3 className="text-accent mt-10 text-2xl lg:text-3xl font-bold pb-3">
          Fragen oder Anliegen?
        </h3>
        <p>Kontaktieren Sie uns! Wir helfen Ihnen gerne weiter.</p>
        <div className="mt-10 flex flex-col lg:flex-row rounded-lg shadow-xl  overflow-hidden">
          <div className="bg-gray-200 w-full lg:w-1/3 p-3">
            <p className="font-bold text-xl mb-3 text-accent">
              Kontaktinformationen
            </p>
            <p>Grafenwert Immobilien GmbH</p>
            <p>Kittelbachstrasse 10</p>
            <p>40489 Düsseldorf</p>
            <a className="block mt-3" href="tel:+49 0211-522 884 20">
              <MdLocalPhone className="inline text-lg mr-2 text-accent" />
              0211-522 884 20
            </a>
            <a className="block mt-0 lg:mt-3" href="mailto:info@grafenwert.de">
              <MdMail className="inline text-lg mr-2 text-accent" />
              info@grafenwert.de
            </a>
          </div>
          <div className="w-full lg:w-2/3 p-3">
            <p className="font-bold text-xl text-accent">Kontaktformular</p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 mt-3 text-gray-800"
            >
              <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="p-2 border-gray-200 border-2 rounded-md outline-none"
                />
                {errors.name && <p className="text-accent">{errors.name}</p>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="p-2 border-gray-200 border-2 rounded-md outline-none"
                />
                {errors.email && <p className="text-accent">{errors.email}</p>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="message">Nachricht</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  id="message"
                  className="p-2 border-gray-200 border-2 rounded-md outline-none"
                />
                {errors.message && (
                  <p className="text-accent">{errors.message}</p>
                )}
              </div>
              {!(showSuccessMessage || showFailureMessage) && (
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-accent hover:bg-red-900 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold disabled:font-normal py-2 px-4 mt-3 rounded lg:self-end"
                >
                  {loading ? (
                    <>
                      <svg
                        role="status"
                        className="inline mr-2 w-4 h-4 text-white fill-accent animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" />
                      </svg>
                      Sendet...
                    </>
                  ) : (
                    'Senden'
                  )}
                </button>
              )}
              {showSuccessMessage && (
                <div
                  className="p-4 mb-4 text-sm text-gray-700 bg-gray-100 rounded-lg"
                  role="alert"
                >
                  Ihre Nachricht wurde versendet! Wir antworten Ihnen so schnell
                  wie möglich.
                </div>
              )}
              {showFailureMessage && (
                <div
                  className="p-4 mb-4 text-sm text-accent bg-red-100 rounded-lg"
                  role="alert"
                >
                  Beim versenden Ihrer Nachricht ist leider etwas schief
                  gelaufen. Bitte teilen Sie uns Ihr Anliegen direkt mit einer
                  Mail an
                  <span className="font-bold mx-1">contact@athome-immo.de</span>
                  mit.
                </div>
              )}
            </form>
          </div>
        </div>
        <h3 className="text-accent mt-10 text-2xl lg:text-3xl font-bold pb-3 border-b border-gray-300">
          So finden Sie uns
        </h3>
        <div className="w-full h-72">
          {gmapsApiKey && (
            <GoogleMap
              apiKey={gmapsApiKey}
              marker={{ lat: 51.29608, lng: 6.73654 }}
            />
          )}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const gmapsApiKey = process.env.GMAPS_API_KEY;

  return {
    props: {
      gmapsApiKey,
    },
  };
};
