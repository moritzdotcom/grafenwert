import { userInputToNumberString } from '@/services/formatter';
import { useEffect, useRef, useState } from 'react';
import { BaseImmoType } from './typeStep';

const EnergyEfficiency = [
  'A++',
  'A+',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
] as const;

export type ImmoSize = {
  livingSpace: number;
  totalArea: number;
  floorCount: number;
  floor: number;
  apartmentCount: number;
  annualNetRent: number;
  energyEfficiency: typeof EnergyEfficiency[number];
};

export default function EvaluationSizeStep({
  baseType = 'Wohnung',
  defaultValues,
  goBack,
  onChange,
  onSubmit,
}: {
  baseType?: BaseImmoType;
  defaultValues?: ImmoSize;
  goBack: () => void;
  onChange: (params: ImmoSize) => void;
  onSubmit: () => void;
}) {
  const [livingSpace, setLivingSpace] = useState<string>(
    String(defaultValues?.livingSpace || '')
  );
  const [totalArea, setTotalArea] = useState<string>(
    String(defaultValues?.totalArea || '')
  );
  const [floorCount, setFloorCount] = useState<string>(
    String(defaultValues?.floorCount || '')
  );
  const [floor, setFloor] = useState<string>(
    String(defaultValues?.floor || '')
  );
  const [apartmentCount, setApartmentCount] = useState<string>(
    String(defaultValues?.apartmentCount || '')
  );
  const [annualNetRent, setAnnualNetRent] = useState<string>(
    String(defaultValues?.annualNetRent || '')
  );
  const [energyEfficiency, setEnergyEfficiency] = useState<
    typeof EnergyEfficiency[number]
  >(defaultValues?.energyEfficiency || EnergyEfficiency[0]);

  const floorInputRef = useRef<HTMLInputElement>(null);

  const handleLivingSpaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLivingSpace(userInputToNumberString(e.target.value, { min: 0 }));
  };

  const handleTotalAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotalArea(userInputToNumberString(e.target.value, { min: 0 }));
  };

  const handleFloorCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFloorCount(
      userInputToNumberString(e.target.value, { min: 0, round: true })
    );
  };

  const handleFloorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFloor(
      userInputToNumberString(e.target.value, {
        min: 0,
        max: Number(floorCount || 5),
        round: true,
      })
    );
  };

  const handleApartmentCountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setApartmentCount(
      userInputToNumberString(e.target.value, { min: 0, round: true })
    );
  };

  const handleAnnualNetRentChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAnnualNetRent(userInputToNumberString(e.target.value, { min: 0 }));
  };

  const isDisabled = () => {
    if (baseType === 'Wohnung') {
      return !livingSpace || !floorCount || !floor;
    }
    if (baseType === 'Mehrfamilienhaus') {
      return !livingSpace || !totalArea || !apartmentCount || !annualNetRent;
    }
    if (baseType === 'Haus') {
      return !livingSpace || !totalArea || !floorCount;
    }
    return true;
  };

  useEffect(() => {
    onChange({
      livingSpace: Number(livingSpace),
      totalArea: Number(totalArea),
      floorCount: Number(floorCount),
      floor: Number(floor),
      apartmentCount: Number(apartmentCount),
      annualNetRent: Number(annualNetRent),
      energyEfficiency: energyEfficiency,
    });
  }, [
    livingSpace,
    totalArea,
    floorCount,
    floor,
    apartmentCount,
    annualNetRent,
    energyEfficiency,
  ]);

  return (
    <>
      <h3 className="text-xl text-accent mb-8">Details zu Ihrer Immobilie</h3>
      <div className="grid grid-cols-1 sm:grid-cols-[21ch_1fr] items-start mt-5">
        <label className="text-sm text-gray-500 mt-2">
          Gesamte Wohnfläche *
        </label>
        <div className="mb-3">
          <div className="w-full border border-gray-300 text-gray-500 text-lg rounded flex justify-center items-center gap-2">
            <div className="px-5"></div>
            <input
              value={livingSpace}
              onChange={handleLivingSpaceChange}
              className="text-accent text-center focus:outline-0 w-full"
              type="number"
              inputMode="numeric"
            />
            <div className="border-l border-gray-300 px-2 py-1">m&sup2;</div>
          </div>
        </div>
        {['Mehrfamilienhaus', 'Haus'].includes(baseType) && (
          <>
            <label className="text-sm text-gray-500 mt-2">
              Grundstücksfläche *
            </label>
            <div className="mb-3">
              <div className="w-full border border-gray-300 text-gray-500 text-lg rounded flex justify-center items-center gap-2">
                <div className="px-5"></div>
                <input
                  value={totalArea}
                  onChange={handleTotalAreaChange}
                  className="text-accent text-center focus:outline-0 w-full"
                  type="number"
                  inputMode="numeric"
                />
                <div className="border-l border-gray-300 px-2 py-1">
                  m&sup2;
                </div>
              </div>
            </div>
          </>
        )}
        {['Wohnung', 'Haus'].includes(baseType) && (
          <>
            <label className="text-sm text-gray-500 mt-2">
              Anzahl Etagen *
            </label>
            <div className="mb-3">
              <input
                value={floorCount}
                onChange={handleFloorCountChange}
                placeholder="5"
                className="w-full border border-gray-300 text-lg text-accent text-center rounded px-2 py-1 focus:outline-0"
                type="number"
                inputMode="numeric"
              />
            </div>
          </>
        )}
        {baseType === 'Wohnung' && (
          <>
            <label className="text-sm text-gray-500 mt-2">
              Etage der Wohnung *
            </label>
            <div className="mb-3">
              <div
                onClick={() => {
                  floorInputRef.current?.focus();
                }}
                className="w-full cursor-text border border-gray-300 text-gray-500 text-lg rounded px-2 py-1 flex justify-center items-center gap-2"
              >
                <input
                  value={floor}
                  ref={floorInputRef}
                  onChange={handleFloorChange}
                  className="text-accent text-right focus:outline-0 w-full appearance-none"
                  type="number"
                  inputMode="numeric"
                />
                <p>von</p>
                <p className="w-full">{floorCount || 5}</p>
              </div>
            </div>
          </>
        )}
        {baseType == 'Mehrfamilienhaus' && (
          <>
            <label className="text-sm text-gray-500 mt-2">
              Anzahl Wohneinheiten *
            </label>
            <div className="mb-3">
              <input
                value={apartmentCount}
                onChange={handleApartmentCountChange}
                className="w-full border border-gray-300 text-lg text-accent text-center rounded px-2 py-1 focus:outline-0"
                type="number"
                inputMode="numeric"
              />
            </div>
            <label className="text-sm text-gray-500 mt-2">
              Jährliche Nettomieteinnahmen *
            </label>
            <div className="mb-3">
              <div className="w-full border border-gray-300 text-gray-500 text-lg rounded flex justify-center items-center gap-2">
                <div className="px-4"></div>
                <input
                  value={annualNetRent}
                  onChange={handleAnnualNetRentChange}
                  className="text-accent text-center focus:outline-0 w-full"
                  type="number"
                  inputMode="numeric"
                />
                <div className="border-l border-gray-300 px-2 py-1">€</div>
              </div>
            </div>
          </>
        )}
        <label className="text-sm text-gray-500 mt-2">Energieeffizienz</label>
        <div className="mb-3">
          <select
            value={energyEfficiency}
            onChange={(e) => setEnergyEfficiency(e.target.value as any)}
            className="w-full border border-gray-300 text-lg text-accent text-center rounded px-2 py-1 focus:outline-0"
          >
            {EnergyEfficiency.map((efficiency) => (
              <option key={efficiency} value={efficiency}>
                {efficiency}
              </option>
            ))}
          </select>
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
          disabled={isDisabled()}
          className="bg-accent text-white px-3 py-2 rounded font-semibold w-full max-w-xs"
        >
          Weiter
        </button>
      </div>
    </>
  );
}
