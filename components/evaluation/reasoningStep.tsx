import { useState } from 'react';
import { IconType } from 'react-icons';
import { AiOutlineCalendar } from 'react-icons/ai';

type Reason =
  | 'Verkaufsabsicht'
  | 'Kaufabsicht'
  | 'Allgemeines Interesse'
  | 'Anderer Grund';

type Horizon = '1-3 Monate' | '4-12 Monate' | '> 12 Monate';

export type ImmoReasoning = {
  reason: Reason;
  otherReason?: string;
  horizon?: Horizon;
};

function Button({
  Icon,
  title,
  onClick,
  opaque,
}: {
  Icon?: IconType;
  title: string;
  onClick?: () => void;
  opaque?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`border border-gray-500 text-gray-500 rounded flex flex-col gap-4 p-3 items-center ${
        opaque ? 'opacity-30' : ''
      }`}
    >
      {Icon && <Icon className="text-3xl text-accent" />}
      <p className="text-sm font-semibold">{title}</p>
    </button>
  );
}

export default function EvaluationReasoningStep({
  defaultValues,
  onSubmit,
  goBack,
}: {
  defaultValues?: ImmoReasoning;
  onSubmit: (reasoning: ImmoReasoning) => void;
  goBack: () => void;
}) {
  const [reason, setReason] = useState<Reason | undefined>(
    defaultValues?.reason
  );
  const [otherReason, setOtherReason] = useState<string | undefined>(
    defaultValues?.otherReason || ''
  );

  return (
    <>
      <h3 className="text-xl text-accent mb-8">Grund für Ihre Bewertung</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
        <Button
          onClick={() => setReason('Verkaufsabsicht')}
          title="Verkaufsabsicht"
          opaque={Boolean(reason && reason !== 'Verkaufsabsicht')}
        />
        <Button
          onClick={() => setReason('Kaufabsicht')}
          title="Kaufabsicht"
          opaque={Boolean(reason && reason !== 'Kaufabsicht')}
        />
        <Button
          onClick={() => onSubmit({ reason: 'Allgemeines Interesse' })}
          title="Allgemeines Interesse"
          opaque={Boolean(reason && reason !== 'Allgemeines Interesse')}
        />
        <Button
          onClick={() => setReason('Anderer Grund')}
          title="Anderer Grund"
          opaque={Boolean(reason && reason !== 'Anderer Grund')}
        />
      </div>
      {reason === 'Anderer Grund' && (
        <div className="mt-5">
          <label htmlFor="reason" className="block text-sm text-gray-500">
            Anderer Grund
          </label>
          <div className="mt-1">
            <input
              id="reason"
              name="reason"
              className="w-full border border-gray-300 text-lg text-accent rounded px-2 py-1 focus:outline-0"
              value={otherReason}
              onChange={(e) => setOtherReason(e.target.value)}
            />
          </div>
        </div>
      )}
      {(reason == 'Kaufabsicht' || reason == 'Verkaufsabsicht') && (
        <div>
          <h3 className="text-xl text-accent mt-5 mb-3">Zeitlicher Horizont</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button
              onClick={() =>
                onSubmit({ reason: reason, horizon: '1-3 Monate' })
              }
              title="1-3 Monate"
              Icon={AiOutlineCalendar}
            />
            <Button
              onClick={() =>
                onSubmit({ reason: reason, horizon: '4-12 Monate' })
              }
              title="4-12 Monate"
              Icon={AiOutlineCalendar}
            />
            <Button
              onClick={() =>
                onSubmit({ reason: reason, horizon: '> 12 Monate' })
              }
              title="> 12 Monate"
              Icon={AiOutlineCalendar}
            />
          </div>
        </div>
      )}
      <div className="flex items-center justify-start gap-3 mt-5">
        <button
          onClick={goBack}
          className="text-accent bg-gray-100 px-3 py-2 rounded w-full max-w-xs"
        >
          Zurück
        </button>
        {reason == 'Anderer Grund' && (
          <button
            onClick={() =>
              onSubmit({ reason: reason, otherReason: otherReason })
            }
            disabled={!otherReason}
            className="bg-accent text-white px-3 py-2 rounded font-semibold w-full max-w-xs"
          >
            Weiter
          </button>
        )}
      </div>
    </>
  );
}
