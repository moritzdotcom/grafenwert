import Image, { ImageProps } from 'next/image';
import OneStar from '@/assets/icons/OneStar.svg';
import TwoStars from '@/assets/icons/TwoStars.svg';
import ThreeStars from '@/assets/icons/ThreeStars.svg';
import FourStars from '@/assets/icons/FourStars.svg';

export type ImmoEquipment = 'Einfach' | 'Normal' | 'Gehoben' | 'Luxuriös';

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

export default function EvaluationEquipmentStep({
  onSubmit,
  goBack,
}: {
  onSubmit: (equipment: ImmoEquipment) => void;
  goBack: () => void;
}) {
  return (
    <>
      <h3 className="text-xl text-accent mb-8">Ausstattung der Immobilie</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
        <Button
          onClick={() => onSubmit('Einfach')}
          src={OneStar}
          title="Einfach"
          details="Schlechter Wärmeschutz, 1-fach verglaste Fenster und kein Bodenbelag"
        />
        <Button
          onClick={() => onSubmit('Normal')}
          src={TwoStars}
          title="Normal"
          details="Durchschnittliche marktübliche Ausstattungsmerkmale"
        />
        <Button
          onClick={() => onSubmit('Gehoben')}
          src={ThreeStars}
          title="Gehoben"
          details="Gute Wärmedämmung, 3-fach verglaste Fenster, Fertigparkett und Fußbodenheizung"
        />
        <Button
          onClick={() => onSubmit('Luxuriös')}
          src={FourStars}
          title="Luxuriös"
          details="Hochwertige Dämmung, 3-fach verglaste Fenster, hochwertiger Parkett- oder Dielenboden und Fußbodenheizung"
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
