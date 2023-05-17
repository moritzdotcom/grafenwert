import Image, { ImageProps } from 'next/image';
import OneStar from '@/assets/icons/OneStar.svg';
import TwoStars from '@/assets/icons/TwoStars.svg';
import ThreeStars from '@/assets/icons/ThreeStars.svg';

export type ImmoCondition =
  | 'Renovierungsbedürftig'
  | 'Gut erhalten'
  | 'Neu/ kürzlich renoviert';

function Button({
  src,
  title,
  details,
  onClick,
}: {
  src: ImageProps['src'];
  title: string;
  details: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="border border-gray-500 text-gray-500 rounded flex flex-col gap-4 p-3 items-center"
    >
      <div className="aspect-video w-24 relative">
        <Image src={src} alt={title} fill />
      </div>
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-sm">{details}</p>
    </button>
  );
}

export default function EvaluationConditionStep({
  onSubmit,
  goBack,
}: {
  onSubmit: (condition: ImmoCondition) => void;
  goBack: () => void;
}) {
  return (
    <>
      <h3 className="text-xl text-accent mb-8">Zustand der Immobilie</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
        <Button
          onClick={() => onSubmit('Renovierungsbedürftig')}
          src={OneStar}
          title="Renovierungsbedürftig"
          details="Die Nutzung der Immobilie bedarf vorheriger Renovierung"
        />
        <Button
          onClick={() => onSubmit('Gut erhalten')}
          src={TwoStars}
          title="Gut erhalten"
          details="Die Immobilie wurde im Laufe der gesamten Zeit gut instand gehalten."
        />
        <Button
          onClick={() => onSubmit('Neu/ kürzlich renoviert')}
          src={ThreeStars}
          title="Neu/ kürzlich renoviert"
          details="Neubau oder Kernsanierung innerhalb der letzten 2 Jahre."
        />
      </div>
      <div className="flex items-center justify-start gap-3 mt-5">
        <button
          onClick={goBack}
          className="text-accent bg-gray-100 px-3 py-2 rounded w-full max-w-xs"
        >
          Zurück
        </button>
      </div>
    </>
  );
}
