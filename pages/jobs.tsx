import Image from 'next/image';
import careerImg from '@/assets/images/career.jpg';
import InputGroup from '@/components/inputGroup';
import { useState } from 'react';
import { isValidEmail, isValidPhoneNumber } from '@/services/validator';

type ErrorObject = {
  name?: string;
  email?: string;
  phone?: string;
  privacy?: string;
  cv?: string;
};

const salutationOptions = ['Herr', 'Frau'] as const;

type Salutation = (typeof salutationOptions)[number];

export default function JobsPage() {
  const [salutation, setSalutation] = useState<Salutation>('Herr');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [cv, setCv] = useState<File>();
  const [motivationalLetter, setMotivationalLetter] = useState<File>();
  const [privacy, setPrivacy] = useState(false);

  const [errors, setErrors] = useState<ErrorObject>({});
  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const validate = () => {
    const tmpErrors: ErrorObject = {};

    if (name.length === 0) {
      tmpErrors.name = 'Bitte geben Sie Ihren Namen ein.';
    }
    if (!isValidEmail(email)) {
      tmpErrors.email = 'Ungültige E-Mail-Adresse.';
    }
    if (!isValidPhoneNumber(phone)) {
      tmpErrors.phone = 'Ungültige Telefonnummer.';
    }
    if (!privacy) {
      tmpErrors.privacy =
        'Bitte akzeptieren Sie unsere Datenschutzbestimmungen.';
    }
    if (!cv) {
      tmpErrors.cv = 'Bitte laden Sie Ihren Lebenslauf hoch.';
    }

    setErrors(tmpErrors);
    return Object.keys(tmpErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const isValid = validate();
    if (!isValid) return;

    setLoading(true);
    const formData = new FormData();
    if (cv) formData.append('cv', cv);
    if (motivationalLetter)
      formData.append('motivationalLetter', motivationalLetter);
    Object.entries({
      salutation,
      name,
      email,
      phone,
    })
      .filter(([_, v]) => v !== undefined)
      .forEach(([key, value]) =>
        formData.append(
          key,
          typeof value == 'string' ? value : JSON.stringify(value)
        )
      );

    try {
      const res = await fetch('/api/application', {
        body: formData,
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

  return (
    <main className="min-h-[84vh]">
      <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 items-center gap-5">
        <div className="p-4 md:p-0 md:pl-10">
          <h1 className="text-center md:text-start text-accent text-xl md:text-4xl font-bold">
            Werden Sie Teil von etwas Großem!
          </h1>
          <p className="text-gray-700 text-justify mt-5">
            Unser wachsendes Team ist stets auf der Suche nach
            Immobilienberatern und -Vermittlern. Sind Sie erfahrener
            Immobilienmakler und suchen eine neue Herausforderung in einem
            dynamischen Unternehmen? Dann schicken Sie uns gerne Ihren
            Lebenslauf an
            <a
              className="mx-1 text-accent underline"
              href="mailto:karriere@grafenwert.de"
            >
              karriere@grafenwert.de
            </a>
          </p>
        </div>
        <div className="w-full md:max-w-lg place-self-center md:p-4">
          <Image
            src={careerImg}
            alt="career"
            className="object-cover max-h-80 md:shadow-xl md:rounded-lg"
          />
        </div>
      </div>
      <div className="w-full max-w-screen-lg mx-auto my-5 px-3">
        {showSuccessMessage && (
          <div
            className="p-4 my-4 text-gray-700 bg-gray-100 rounded-lg"
            role="alert"
          >
            Ihre Anfrage wurde versendet! Wir antworten Ihnen so schnell wie
            möglich.
          </div>
        )}
        {showFailureMessage && (
          <div
            className="p-4 my-4 text-accent bg-red-100 rounded-lg"
            role="alert"
          >
            Beim versenden Ihrer Anfrage ist leider etwas schief gelaufen. Bitte
            teilen Sie uns Ihre Details direkt mit einer Mail an
            <span className="font-bold mx-1">karriere@grafenwert.de</span>
            mit.
          </div>
        )}
        {!(showSuccessMessage || showFailureMessage) && (
          <form className="w-full" onSubmit={handleSubmit}>
            <h3 className="text-accent text-xl text-center font-semibold my-5">
              Jetzt bewerben
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex flex-col sm:w-1/3">
                  <label htmlFor="salutation" className="text-gray-700">
                    Anrede*
                  </label>
                  <select
                    id="salutation"
                    className="text-accent border-2 border-gray-200 rounded-md focus:outline-0 py-2.5"
                    value={salutation}
                    onChange={(e) =>
                      setSalutation(e.target.value as Salutation)
                    }
                  >
                    {salutationOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <InputGroup
                  id="name"
                  label="Name*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={errors.name}
                />
              </div>
              <InputGroup
                id="email"
                type="email"
                label="E-Mail Adresse*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
              />
              <InputGroup
                id="phone"
                type="tel"
                label="Telefonnummer*"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={errors.phone}
              />
            </div>
            <h3 className="text-accent text-lg font-semibold mt-5">
              Anhänge hinzufügen
            </h3>
            <div className="flex flex-col gap-1 mt-2">
              <label htmlFor="cv" className="text-gray-700">
                Lebenslauf anhängen (PDF)*
              </label>
              <input
                onChange={(e) => setCv(e.target.files?.[0])}
                className="text-accent focus:outline-0 w-full"
                type="file"
                accept="application/pdf"
                name="cv"
                id="cv"
              />
            </div>
            {errors.cv && <p className="text-red-500 text-sm">{errors.cv}</p>}
            <div className="flex flex-col gap-1 mt-4">
              <label htmlFor="motivationalLetter" className="text-gray-700">
                Anschreiben anhängen (PDF)
              </label>
              <input
                onChange={(e) => setMotivationalLetter(e.target.files?.[0])}
                className="text-accent focus:outline-0 w-full"
                type="file"
                accept="application/pdf"
                name="motivationalLetter"
                id="motivationalLetter"
              />
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
                gelesen und bin mit der Verarbeitung meiner Daten
                einverstanden.*
              </label>
            </div>
            {errors.privacy && (
              <p className="text-red-500 text-sm">{errors.privacy}</p>
            )}
            <div className="flex justify-end mt-5">
              <button
                type="submit"
                disabled={loading}
                className="bg-accent text-white px-5 py-2 rounded-md"
              >
                Bewerbung absenden
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
