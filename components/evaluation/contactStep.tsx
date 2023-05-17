import { isValidEmail, isValidPhoneNumber } from '@/services/validator';
import { useState, useEffect } from 'react';

type ErrorObject = {
  email?: string;
  phone?: string;
};

export type ImmoContact = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  privacyChecked: boolean;
};

export default function EvaluationContactStep({
  defaultValues,
  onChange,
  onSubmit,
  goBack,
}: {
  defaultValues?: ImmoContact;
  onChange: (contact: ImmoContact) => void;
  onSubmit: () => Promise<void>;
  goBack: () => void;
}) {
  const [firstName, setFirstName] = useState<string>(
    defaultValues?.firstName || ''
  );
  const [lastName, setLastName] = useState<string>(
    defaultValues?.lastName || ''
  );
  const [email, setEmail] = useState<string>(defaultValues?.email || '');
  const [phone, setPhone] = useState<string>(defaultValues?.phone || '');
  const [privacyChecked, setPrivacyChecked] = useState(
    defaultValues?.privacyChecked || false
  );
  const [errors, setErrors] = useState<ErrorObject>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setErrors({});
    const isEmailValid = isValidEmail(email);
    const isPhoneValid = phone.length > 0 ? isValidPhoneNumber(phone) : true;

    if (!isEmailValid || !isPhoneValid) {
      setErrors({
        email: isEmailValid
          ? undefined
          : 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        phone: isPhoneValid
          ? undefined
          : 'Bitte geben Sie eine gültige Telefonnummer ein.',
      });
      return;
    }
    setLoading(true);
    try {
      await onSubmit();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    onChange({
      firstName,
      lastName,
      email,
      phone,
      privacyChecked,
    });
  }, [firstName, lastName, email, phone, privacyChecked]);

  return (
    <>
      <h3 className="text-xl text-accent mb-8">Ihre persönliche Daten</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
        <div>
          <label className="block text-sm text-gray-500" htmlFor="firstName">
            Vorname *
          </label>
          <input
            id="firstName"
            className="w-full border border-gray-300 text-lg text-accent rounded px-2 py-1 focus:outline-0"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-500" htmlFor="lastName">
            Nachname *
          </label>
          <input
            id="lastName"
            className="w-full border border-gray-300 text-lg text-accent rounded px-2 py-1 focus:outline-0"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-500" htmlFor="email">
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 text-lg text-accent rounded px-2 py-1 focus:outline-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm text-gray-500" htmlFor="phone">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full border border-gray-300 text-lg text-accent rounded px-2 py-1 focus:outline-0"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone}</p>
          )}
        </div>
      </div>
      <div className="mt-5 grid grid-cols-[1rem_1fr] items-start gap-2">
        <input
          type="checkbox"
          id="privacy"
          className="mt-1"
          checked={privacyChecked}
          onChange={(e) => setPrivacyChecked(e.target.checked)}
        />
        <label
          htmlFor="privacy"
          className="text-sm text-gray-500 cursor-pointer"
        >
          Ich bin damit einverstanden, dass diese Daten Zwecks Bearbeitung und
          Beantwortung meiner konkreten Anfrage zur Immobilienbewertung zur
          Kontaktaufnahme per E-Mail oder Telefon genutzt werden. Ein
          Rechtsanspruch auf die Ausführung der kostenlosen Immobilienbewertung
          besteht nicht. *
        </label>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-end gap-3 mt-5">
        <button
          onClick={goBack}
          className="text-accent bg-gray-100 px-3 py-2 rounded w-full sm:max-w-[240px]"
        >
          Zurück
        </button>
        <button
          onClick={handleSubmit}
          disabled={!privacyChecked || !firstName || !lastName || !email}
          className="bg-accent text-white px-3 py-2 rounded font-semibold w-full sm:max-w-[360px]"
        >
          Bewertung anfordern
        </button>
      </div>
    </>
  );
}
