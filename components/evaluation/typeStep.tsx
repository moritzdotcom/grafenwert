import Image, { ImageProps } from 'next/image';
import Wohnung from '@/assets/icons/Wohnung.svg';
import Einfamilienhaus from '@/assets/icons/Einfamilienhaus.svg';
import Mehrfamilienhaus from '@/assets/icons/Mehrfamilienhaus.svg';
import Penthouse from '@/assets/icons/Penthouse.svg';
import Maisonette from '@/assets/icons/Maisonette.svg';
import Attikawohnung from '@/assets/icons/Attikawohnung.svg';
import Terrassenwohnung from '@/assets/icons/Terrassenwohnung.svg';
import Einzimmerwohnung from '@/assets/icons/Einzimmerwohnung.svg';
import Doppelhaushaelfte from '@/assets/icons/Doppelhaushaelfte.svg';
import Reiheneckhaus from '@/assets/icons/Reiheneckhaus.svg';
import Reihenmittelhaus from '@/assets/icons/Reihenmittelhaus.svg';
import Bauernhof from '@/assets/icons/Bauernhof.svg';
import { useRef, useState } from 'react';

export type ImmoType =
  | 'Mehrfamilienhaus'
  | 'Wohnung'
  | 'Penthouse'
  | 'Maisonette'
  | 'Attikawohnung'
  | 'Terrassenwohnung'
  | 'Einzimmerwohnung'
  | 'Einfamilienhaus'
  | 'Doppelhaushälfte'
  | 'Reiheneckhaus'
  | 'Reihenmittelhaus'
  | 'Bauernhof';

export type BaseImmoType = 'Wohnung' | 'Haus' | 'Mehrfamilienhaus';

function Button({
  src,
  title,
  onClick,
  opaque,
}: {
  src: ImageProps['src'];
  title: string;
  onClick?: () => void;
  opaque?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`border border-gray-500 rounded flex flex-row sm:flex-col gap-4 p-3 items-center ${
        opaque ? 'opacity-30' : ''
      }`}
    >
      <div className="aspect-video w-32 relative">
        <Image src={src} alt={title} fill />
      </div>
      <p className="text-sm text-gray-500">{title}</p>
    </button>
  );
}

export default function EvaluationTypeStep({
  defaultValues,
  onSubmit,
}: {
  defaultValues?: { baseType?: BaseImmoType };
  onSubmit: (baseType: BaseImmoType, type: ImmoType) => void;
}) {
  const [baseType, setBaseType] = useState<BaseImmoType | undefined>(
    defaultValues?.baseType
  );
  const subtypeRef = useRef<HTMLDivElement>(null);

  const changeBaseType = (type: BaseImmoType) => {
    setBaseType(type);
    setTimeout(() => {
      subtypeRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <h3 className="text-xl text-accent mb-8">
        Welche Immobilie möchten Sie bewerten lassen?
      </h3>
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-5">
        <Button
          onClick={() => changeBaseType('Wohnung')}
          src={Wohnung}
          title="Wohnung"
          opaque={Boolean(baseType && baseType !== 'Wohnung')}
        />
        <Button
          onClick={() => changeBaseType('Haus')}
          src={Einfamilienhaus}
          title="Haus"
          opaque={Boolean(baseType && baseType !== 'Haus')}
        />
        <Button
          onClick={() => onSubmit('Mehrfamilienhaus', 'Mehrfamilienhaus')}
          src={Mehrfamilienhaus}
          title="Mehrfamilienhaus"
          opaque={Boolean(baseType && baseType !== 'Mehrfamilienhaus')}
        />
      </div>
      <div ref={subtypeRef} />
      {(baseType == 'Wohnung' || baseType == 'Haus') && (
        <div className="mt-14">
          <h3 className="text-xl text-accent">
            Um welche Immobilienart handelt es sich?
          </h3>
          {baseType == 'Wohnung' ? (
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-5">
              <Button
                onClick={() => onSubmit(baseType, 'Wohnung')}
                src={Wohnung}
                title="Wohnung"
              />
              <Button
                onClick={() => onSubmit(baseType, 'Penthouse')}
                src={Penthouse}
                title="Penthouse"
              />
              <Button
                onClick={() => onSubmit(baseType, 'Maisonette')}
                src={Maisonette}
                title="Maisonette"
              />
              <Button
                onClick={() => onSubmit(baseType, 'Attikawohnung')}
                src={Attikawohnung}
                title="Attikawohnung"
              />
              <Button
                onClick={() => onSubmit(baseType, 'Terrassenwohnung')}
                src={Terrassenwohnung}
                title="Terrassenwohnung"
              />
              <Button
                onClick={() => onSubmit(baseType, 'Einzimmerwohnung')}
                src={Einzimmerwohnung}
                title="Einzimmerwohnung"
              />
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-5">
              <Button
                onClick={() => onSubmit(baseType, 'Einfamilienhaus')}
                src={Einfamilienhaus}
                title="Einfamilienhaus"
              />
              <Button
                onClick={() => onSubmit(baseType, 'Doppelhaushälfte')}
                src={Doppelhaushaelfte}
                title="Doppelhaushälfte"
              />
              <Button
                onClick={() => onSubmit(baseType, 'Reiheneckhaus')}
                src={Reiheneckhaus}
                title="Reiheneckhaus"
              />
              <Button
                onClick={() => onSubmit(baseType, 'Reihenmittelhaus')}
                src={Reihenmittelhaus}
                title="Reihenmittelhaus"
              />
              <Button
                onClick={() => onSubmit(baseType, 'Bauernhof')}
                src={Bauernhof}
                title="Bauernhof"
              />
            </div>
          )}
        </div>
      )}
      {baseType == 'Mehrfamilienhaus' && (
        <div className="flex items-center justify-center gap-3 mt-5">
          <button
            onClick={() => onSubmit('Mehrfamilienhaus', 'Mehrfamilienhaus')}
            className="bg-accent text-white px-3 py-2 rounded font-semibold w-full sm:max-w-[240px]"
          >
            Weiter
          </button>
        </div>
      )}
    </>
  );
}
