import InputGroup from '@/components/inputGroup';
import { isValidEmail } from '@/services/validator';
import styles from '@/styles/services.module.css';
import Head from 'next/head';
import { useEffect, useState } from 'react';

type ErrorObject = {
  clientCompanyName?: string;
  clientName?: string;
  clientAddress?: string;
  clientEmail?: string;
  landLordCompanyName?: string;
  rent?: string;
  size?: string;
  rentFrom?: string;
  rentUntil?: string;
  privacy?: string;
};

export default function OptimizationCampagne() {
  const [clientCompanyName, setClientCompanyName] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  const [landLordCompanyName, setLandLordCompanyName] = useState('');
  const [landLordName, setLandLordName] = useState('');
  const [landLordAddress, setLandLordAddress] = useState('');
  const [landLordEmail, setLandLordEmail] = useState('');
  const [landLordPhone, setLandLordPhone] = useState('');

  const [rent, setRent] = useState('');
  const [size, setSize] = useState('');
  const [rentFrom, setRentFrom] = useState('');
  const [rentUntil, setRentUntil] = useState('');
  const [rentIndexed, setRentIndexed] = useState(false);

  const [attachment, setAttachment] = useState<File>();
  const [privacy, setPrivacy] = useState(false);

  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [errors, setErrors] = useState<ErrorObject>({});
  const [formWasSubmitted, setFormWasSubmitted] = useState(false);

  const validate = () => {
    const tmpErrors: ErrorObject = {};

    if (clientCompanyName.length < 3) {
      tmpErrors.clientCompanyName = 'Bitte geben Sie den Firmennamen an';
    }
    if (clientName.length < 3) {
      tmpErrors.clientName = 'Bitte geben Sie den Ansprechpartner an';
    }
    if (clientAddress.length < 3) {
      tmpErrors.clientAddress = 'Bitte geben Sie die Adresse an';
    }
    if (!isValidEmail(clientEmail)) {
      tmpErrors.clientEmail = 'Bitte geben Sie die E-Mail-Adresse an';
    }
    if (landLordCompanyName.length < 3) {
      tmpErrors.landLordCompanyName = 'Bitte geben Sie den Firmennamen an';
    }
    if (!rent) {
      tmpErrors.rent = 'Bitte geben Sie die Miete an';
    }
    if (!size) {
      tmpErrors.size = 'Bitte geben Sie die Größe an';
    }
    if (!rentFrom) {
      tmpErrors.rentFrom = 'Bitte geben Sie das Datum an';
    }
    if (!rentUntil) {
      tmpErrors.rentUntil = 'Bitte geben Sie das Datum an';
    }
    if (new Date(rentFrom) > new Date()) {
      tmpErrors.rentFrom = 'Muss in der Vergangenheit liegen';
    }
    if (new Date(rentUntil) < new Date()) {
      tmpErrors.rentUntil = 'Muss in der Zukunft liegen';
    }
    if (new Date(rentFrom) > new Date(rentUntil)) {
      tmpErrors.rentFrom = 'Muss vor dem Enddatum liegen';
    }
    if (!privacy) {
      tmpErrors.privacy = 'Bitte akzeptieren Sie die Datenschutzerklärung';
    }

    setErrors(tmpErrors);
    return Object.keys(tmpErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const valid = validate();
    setFormWasSubmitted(true);
    if (!valid) return setLoading(false);

    const formData = new FormData();
    if (attachment) formData.append('attachment', attachment);
    Object.entries({
      clientCompanyName,
      clientName,
      clientAddress,
      clientEmail,
      clientPhone,
      landLordCompanyName,
      landLordName,
      landLordAddress,
      landLordEmail,
      landLordPhone,
      rent,
      size,
      rentFrom,
      rentUntil,
      rentIndexed,
      attachment,
    })
      .filter(([_, v]) => v !== undefined)
      .forEach(([key, value]) =>
        formData.append(
          key,
          typeof value == 'string' ? value : JSON.stringify(value)
        )
      );

    try {
      const res = await fetch('/api/optimization', {
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

  useEffect(() => {
    if (!formWasSubmitted) return;
    validate();
  }, [
    clientCompanyName,
    clientName,
    clientAddress,
    clientEmail,
    landLordCompanyName,
    rent,
    size,
    rentFrom,
    rentUntil,
    privacy,
  ]);

  return (
    <>
      <Head>
        <title>Grafenwert - Wir senken Ihre Mietkosten für Ihr Büro</title>
        <meta name="description" content="Wir optimieren Ihren Mietvertrag" />
      </Head>
      <main className="max-w-screen-xl mx-auto p-3 md:p-6 min-h-[84vh]">
        <h1 className={styles.heading}>
          Wir senken Ihre Mietkosten für Ihr Büro
        </h1>
        <h2 className="text-center text-gray-700">
          Wir optimieren Ihren Mietvertrag
        </h2>
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
            <span className="font-bold mx-1">info@grafenwert.de</span>
            mit.
          </div>
        )}
        {!(showSuccessMessage || showFailureMessage) && (
          <form
            className="max-w-screen-lg mx-auto mt-5"
            onSubmit={handleSubmit}
          >
            <h3 className="text-accent text-lg font-semibold mt-5">
              Ihre Kontaktdaten
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <InputGroup
                  id="clientCompanyName"
                  label="Firma*"
                  value={clientCompanyName}
                  onChange={(e) => setClientCompanyName(e.target.value)}
                  error={errors.clientCompanyName}
                />
                <InputGroup
                  id="clientName"
                  label="Ansprechpartner (Vor- & Nachname)*"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  error={errors.clientName}
                />
              </div>
              <InputGroup
                id="address"
                type="text"
                label="Anschrift der Firma*"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
                error={errors.clientAddress}
              />
              <InputGroup
                id="email"
                type="email"
                label="Email*"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                error={errors.clientEmail}
              />
              <InputGroup
                id="phone"
                type="tel"
                label="Telefonnummer (optional)"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
              />
            </div>
            <h3 className="text-accent text-lg font-semibold mt-5">
              Kontaktdaten des Vermieters
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <InputGroup
                  id="landLordCompanyName"
                  label="Firma*"
                  value={landLordCompanyName}
                  onChange={(e) => setLandLordCompanyName(e.target.value)}
                  error={errors.landLordCompanyName}
                />
                <InputGroup
                  id="landLordName"
                  label="Ansprechpartner (optional)"
                  value={landLordName}
                  onChange={(e) => setLandLordName(e.target.value)}
                />
              </div>
              <InputGroup
                id="address"
                type="text"
                label="Anschrift der Firma (optional)"
                value={landLordAddress}
                onChange={(e) => setLandLordAddress(e.target.value)}
              />
              <InputGroup
                id="email"
                type="email"
                label="Email (optional)"
                value={landLordEmail}
                onChange={(e) => setLandLordEmail(e.target.value)}
              />
              <InputGroup
                id="phone"
                type="tel"
                label="Telefonnummer (optional)"
                value={landLordPhone}
                onChange={(e) => setLandLordPhone(e.target.value)}
              />
            </div>
            <h3 className="text-accent text-lg font-semibold mt-5">
              Vertragsdaten
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <InputGroup
                  id="rent"
                  type="number"
                  label="Netto-Kaltmiete*"
                  value={rent}
                  onChange={(e) => setRent(e.target.value)}
                  error={errors.rent}
                  suffix="€"
                />
                <InputGroup
                  id="size"
                  type="number"
                  label="m²-Zahl*"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  error={errors.size}
                  suffix="m²"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <InputGroup
                  id="rentFrom"
                  label="Miete seit*"
                  type="date"
                  value={rentFrom}
                  onChange={(e) => setRentFrom(e.target.value)}
                  error={errors.rentFrom}
                />
                <InputGroup
                  id="rentUntil"
                  label="Miete bis*"
                  type="date"
                  value={rentUntil}
                  onChange={(e) => setRentUntil(e.target.value)}
                  error={errors.rentUntil}
                />
              </div>
              <div className="mt-1 grid grid-cols-[20px_1fr] items-center gap-2">
                <input
                  type="checkbox"
                  id="rentIndexed"
                  checked={rentIndexed}
                  onChange={(e) => setRentIndexed(e.target.checked)}
                />
                <label
                  htmlFor="rentIndexed"
                  className="text-gray-700 cursor-pointer"
                >
                  Ist Ihre Miete indexiert?
                </label>
              </div>
            </div>
            <h3 className="text-accent text-lg font-semibold mt-5">
              Mietvertrag
            </h3>
            <div className="flex flex-col gap-3 mt-2">
              <label htmlFor="attachment" className="text-gray-700">
                Mietvertrag anhängen (optional)
              </label>
              <input
                onChange={(e) => setAttachment(e.target.files?.[0])}
                className="text-accent focus:outline-0 w-full"
                type="file"
                accept="application/pdf"
                name="attachment"
                id="attachment"
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
                Anfrage absenden
              </button>
            </div>
          </form>
        )}
      </main>
    </>
  );
}
