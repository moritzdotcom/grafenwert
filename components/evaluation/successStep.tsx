import { TfiEmail } from 'react-icons/tfi';

export default function EvaluationSuccessStep({}: {}) {
  return (
    <div className="flex flex-col items-center mt-5 text-center">
      <div className="bg-accent rounded-full p-6 shadow-xl">
        <TfiEmail className="text-4xl text-white" />
      </div>
      <h3 className="text-xl text-accent mt-4">
        Vielen Dank für Ihre Anfrage!
      </h3>
      <p className="text-gray-500 mt-2">
        Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei Ihnen
        melden.
      </p>
    </div>
  );
}
