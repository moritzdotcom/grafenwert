import { userInputToNumberString } from '@/services/formatter';
import { useEffect, useState } from 'react';
import { BaseImmoType } from './typeStep';

type Features = {
  neubau: boolean;
  pool: boolean;
  sauna: boolean;
};

export type ImmoRooms = {
  totalRooms: number;
  bathrooms: number;
  outdoorSpace: number;
  parkingPlaces: number;
  outdoorParkingPlaces: number;
  features: Features;
};

export default function EvaluationRoomsStep({
  baseType = 'Haus',
  defaultValues,
  goBack,
  onChange,
  onSubmit,
}: {
  baseType?: BaseImmoType;
  defaultValues?: ImmoRooms;
  goBack: () => void;
  onChange: (params: ImmoRooms) => void;
  onSubmit: () => void;
}) {
  const [totalRooms, setTotalRooms] = useState<string>(
    String(defaultValues?.totalRooms || '')
  );
  const [bathrooms, setBathrooms] = useState<string>(
    String(defaultValues?.bathrooms || '')
  );
  const [outdoorSpace, setOutdoorSpace] = useState<string>(
    String(defaultValues?.outdoorSpace || '')
  );
  const [parkingPlaces, setParkingPlaces] = useState<string>(
    String(defaultValues?.parkingPlaces || '')
  );
  const [outdoorParkingPlaces, setOutdoorParkingPlaces] = useState<string>(
    String(defaultValues?.outdoorParkingPlaces || '')
  );
  const [features, setFeatures] = useState<Features>(
    defaultValues?.features || {
      neubau: false,
      pool: false,
      sauna: false,
    }
  );

  const handleTotalRoomsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotalRooms(userInputToNumberString(e.target.value, { min: 0 }));
  };

  const handleBathroomsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBathrooms(userInputToNumberString(e.target.value, { min: 0 }));
  };

  const handleOutdoorSpaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOutdoorSpace(userInputToNumberString(e.target.value, { min: 0 }));
  };

  const handleParkingPlacesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setParkingPlaces(userInputToNumberString(e.target.value, { min: 0 }));
  };

  const handleOutdoorParkingPlacesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOutdoorParkingPlaces(
      userInputToNumberString(e.target.value, { min: 0 })
    );
  };

  useEffect(() => {
    onChange({
      totalRooms: Number(totalRooms),
      bathrooms: Number(bathrooms),
      outdoorSpace: Number(outdoorSpace),
      parkingPlaces: Number(parkingPlaces),
      outdoorParkingPlaces: Number(outdoorParkingPlaces),
      features,
    });
  }, [
    totalRooms,
    bathrooms,
    outdoorSpace,
    parkingPlaces,
    outdoorParkingPlaces,
    features,
  ]);

  return (
    <>
      <h3 className="text-xl text-accent mb-8">Details zu Ihrer Immobilie</h3>
      <div className="grid grid-cols-1 sm:grid-cols-[21ch_1fr] items-start mt-5">
        <label className="text-sm text-gray-500 mt-2">Zimmer *</label>
        <div className="mb-3">
          <input
            value={totalRooms}
            onChange={handleTotalRoomsChange}
            className="w-full border border-gray-300 text-lg text-accent text-center rounded px-2 py-1 focus:outline-0"
            type="number"
            inputMode="numeric"
          />
        </div>
        <label className="text-sm text-gray-500 mt-2">Badezimmer</label>
        <div className="mb-3">
          <input
            value={bathrooms}
            onChange={handleBathroomsChange}
            className="w-full border border-gray-300 text-lg text-accent text-center rounded px-2 py-1 focus:outline-0"
            type="number"
            inputMode="numeric"
          />
        </div>
        <label className="text-sm text-gray-500 mt-2">Balkon / Terrasse</label>
        <div className="mb-3">
          <div className="w-full border border-gray-300 text-gray-500 text-lg rounded flex justify-center items-center gap-2">
            <div className="px-5"></div>
            <input
              value={outdoorSpace}
              onChange={handleOutdoorSpaceChange}
              className="text-accent text-center focus:outline-0 w-full"
              type="number"
              inputMode="numeric"
            />
            <div className="border-l border-gray-300 px-2 py-1">m&sup2;</div>
          </div>
        </div>
        <label className="text-sm text-gray-500 mt-2">Garagenstellplätze</label>
        <div className="mb-3">
          <input
            value={parkingPlaces}
            onChange={handleParkingPlacesChange}
            className="w-full border border-gray-300 text-lg text-accent text-center rounded px-2 py-1 focus:outline-0"
            type="number"
            inputMode="numeric"
          />
        </div>
        <label className="text-sm text-gray-500 mt-2">Außenstellplätze</label>
        <div className="mb-3">
          <input
            value={outdoorParkingPlaces}
            onChange={handleOutdoorParkingPlacesChange}
            className="w-full border border-gray-300 text-lg text-accent text-center rounded px-2 py-1 focus:outline-0"
            type="number"
            inputMode="numeric"
          />
        </div>
      </div>
      {baseType == 'Haus' && (
        <div className="flex flex-col gap-3 mt-5">
          <div className="flex items-center gap-2">
            <input
              className=""
              type="checkbox"
              id="neubau"
              checked={features.neubau}
              onChange={(e) =>
                setFeatures({ ...features, neubau: e.target.checked })
              }
            />
            <label className="text-sm text-gray-500" htmlFor="neubau">
              Neubau (Erstbezug)
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className=""
              type="checkbox"
              id="pool"
              checked={features.pool}
              onChange={(e) =>
                setFeatures({ ...features, pool: e.target.checked })
              }
            />
            <label className="text-sm text-gray-500" htmlFor="pool">
              Schwimmbad
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className=""
              type="checkbox"
              id="sauna"
              checked={features.sauna}
              onChange={(e) =>
                setFeatures({ ...features, sauna: e.target.checked })
              }
            />
            <label className="text-sm text-gray-500" htmlFor="sauna">
              Sauna
            </label>
          </div>
        </div>
      )}
      <div className="flex items-center justify-end gap-3 mt-5">
        <button
          onClick={goBack}
          className="text-accent bg-gray-100 px-3 py-2 rounded w-full max-w-xs"
        >
          Zurück
        </button>
        <button
          onClick={onSubmit}
          disabled={!totalRooms}
          className="bg-accent text-white px-3 py-2 rounded font-semibold w-full max-w-xs"
        >
          Weiter
        </button>
      </div>
    </>
  );
}
