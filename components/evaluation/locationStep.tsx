import { ChangeEvent, useEffect, useState } from 'react';
import Autocomplete from 'react-google-autocomplete';

function findAddrComp(place: any, type: string) {
  if (place?.address_components) {
    return place.address_components.find((comp: { types: string[] }) =>
      comp.types.includes(type)
    )?.long_name;
  }
  return null;
}

type ErrorObject = {
  address?: string;
  city?: string;
  constructionYear?: string;
  rennovationYear?: string;
};

type Geolocation = {
  lat: number;
  lng: number;
};

export type ImmoLocation = {
  address: string;
  city: string;
  formattedAddress: string;
  geolocation?: Geolocation;
  constructionYear: number;
  rennovationYear?: number;
};

export default function EvaluationLocationStep({
  gmapsApiKey,
  defaultValues,
  goBack,
  onChange,
  onSubmit,
}: {
  gmapsApiKey: string;
  defaultValues?: ImmoLocation;
  goBack: () => void;
  onChange: (params: ImmoLocation) => void;
  onSubmit: () => void;
}) {
  const [address, setAddress] = useState<string>(defaultValues?.address || '');
  const [city, setCity] = useState<string>(defaultValues?.city || '');
  const [formattedAddress, setFormattedAddress] = useState<string>(
    defaultValues?.formattedAddress || ''
  );
  const [geolocation, setGeolocation] = useState<Geolocation | undefined>(
    defaultValues?.geolocation
  );
  const [constructionYear, setConstructionYear] = useState<string>(
    String(defaultValues?.constructionYear || '')
  );
  const [rennovationYear, setRennovationYear] = useState<string>(
    String(defaultValues?.rennovationYear || '')
  );
  const [errors, setErrors] = useState<ErrorObject>({});

  const handlePlaceChange = (place: any) => {
    if (!place) return;
    const street = findAddrComp(place, 'route');
    const streetNumber = findAddrComp(place, 'street_number');
    const cty = findAddrComp(place, 'locality');
    const addr =
      street && streetNumber
        ? `${street} ${streetNumber}`
        : place.formatted_address;
    setGeolocation({
      lat: place?.geometry?.location?.lat(),
      lng: place?.geometry?.location?.lng(),
    });
    setFormattedAddress(place.formatted_address || place.name);
    setAddress(addr);
    setCity(cty);
  };

  const handleConstructionYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConstructionYear(e.target.value);
    setErrors((err) => {
      delete err.constructionYear;
      return err;
    });
    if (value.length == 0) {
      setErrors({ ...errors, constructionYear: 'Pflichtfeld' });
    }
    if (Number(value) > new Date().getFullYear() || Number(value) < 1500) {
      setErrors((err) => ({
        ...err,
        constructionYear: 'Bitte geben Sie ein gültiges Baujahr ein',
      }));
    }
    if (rennovationYear && Number(value) > Number(rennovationYear)) {
      setErrors((err) => ({
        ...err,
        constructionYear: 'Baujahr muss vor Renovierungsjahr liegen',
      }));
    }
  };

  const handleRennovationYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRennovationYear(e.target.value);
    setErrors((err) => {
      delete err.rennovationYear;
      return err;
    });
    if (value.length == 0) return;
    if (Number(value) > new Date().getFullYear() || Number(value) < 1500) {
      setErrors((err) => ({
        ...err,
        rennovationYear: 'Bitte geben Sie ein gültiges Renovierungsjahr ein',
      }));
    }
    if (constructionYear && Number(value) < Number(constructionYear)) {
      setErrors((err) => ({
        ...err,
        rennovationYear: 'Renovierungsjahr muss nach Baujahr liegen',
      }));
    }
  };

  useEffect(() => {
    onChange({
      address,
      city,
      formattedAddress,
      geolocation,
      constructionYear: Number(constructionYear),
      rennovationYear: Number(rennovationYear),
    });
  }, [
    address,
    city,
    formattedAddress,
    geolocation,
    constructionYear,
    rennovationYear,
  ]);

  return (
    <>
      <h3 className="text-xl text-accent mb-8">Details zu Ihrer Immobilie</h3>
      <div className="grid grid-cols-1 sm:grid-cols-[15ch_1fr] items-start mt-5">
        <label className="text-sm text-gray-500 mt-2">
          Adresse & Haus-Nr. *
        </label>
        <div className="mb-3">
          <Autocomplete
            apiKey={gmapsApiKey}
            className="w-full border border-gray-300 text-lg text-center text-accent rounded px-2 py-1 focus:outline-0"
            onPlaceSelected={handlePlaceChange}
            placeholder="Musterstraße 1"
            options={{
              types: ['address'],
            }}
            defaultValue={address}
          />
        </div>
        <label className="text-sm text-gray-500 mt-2">Stadt *</label>
        <div className="mb-3">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Düsseldorf"
            className="w-full border border-gray-300 text-lg text-accent text-center rounded px-2 py-1 focus:outline-0"
          />
        </div>
        <label className="text-sm text-gray-500 mt-2">Baujahr *</label>
        <div className="mb-3">
          <input
            className="w-full border border-gray-300 text-lg text-accent text-center rounded px-2 py-1 focus:outline-0"
            value={constructionYear}
            onChange={handleConstructionYearChange}
            placeholder="2000"
            inputMode="numeric"
            type="number"
          />
          {errors.constructionYear && (
            <p className="text-red-700 text-sm">{errors.constructionYear}</p>
          )}
        </div>
        <label className="text-sm text-gray-500 mt-2">Renovierungsjahr</label>
        <div className="mb-3">
          <input
            className="w-full border border-gray-300 text-lg text-accent text-center rounded px-2 py-1 focus:outline-0"
            value={rennovationYear}
            onChange={handleRennovationYearChange}
            placeholder="-"
            inputMode="numeric"
            type="number"
          />
          {errors.rennovationYear && (
            <p className="text-red-700 text-sm">{errors.rennovationYear}</p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-end gap-3 mt-5">
        <button
          onClick={goBack}
          className="text-accent bg-gray-100 px-3 py-2 rounded w-full max-w-xs"
        >
          Zurück
        </button>
        <button
          onClick={onSubmit}
          disabled={
            !address ||
            !city ||
            !constructionYear ||
            Object.keys(errors).length > 0
          }
          className="bg-accent text-white px-3 py-2 rounded font-semibold w-full max-w-xs"
        >
          Weiter
        </button>
      </div>
    </>
  );
}
