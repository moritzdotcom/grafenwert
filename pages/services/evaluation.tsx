import { useState } from 'react';
import styles from '@/styles/services.module.css';
import EvaluationTypeStep, {
  BaseImmoType,
  ImmoType,
} from '@/components/evaluation/typeStep';
import EvaluationLocationStep, {
  ImmoLocation,
} from '@/components/evaluation/locationStep';
import EvaluationSizeStep, { ImmoSize } from '@/components/evaluation/sizeStep';
import EvaluationRoomsStep, {
  ImmoRooms,
} from '@/components/evaluation/roomsStep';
import EvaluationPreviewCard from '@/components/evaluation/previewCard';
import { GetStaticProps } from 'next/types';
import EvaluationEquipmentStep, {
  ImmoEquipment,
} from '@/components/evaluation/equipmentStep';
import EvaluationConditionStep, {
  ImmoCondition,
} from '@/components/evaluation/conditionStep';
import EvaluationReasoningStep, {
  ImmoReasoning,
} from '@/components/evaluation/reasoningStep';
import EvaluationContactStep, {
  ImmoContact,
} from '@/components/evaluation/contactStep';
import EvaluationSuccessStep from '@/components/evaluation/successStep';

const steps = [
  'TYPE',
  'LOCATION',
  'SIZE',
  'ROOMS',
  'EQUIPMENT',
  'CONDITION',
  'REASONING',
  'CONTACT',
  'SUCCESS',
] as const;

export default function ServicesEvaluationPage({
  gmapsApiKey,
  mapBoxApiKey,
}: {
  gmapsApiKey: string;
  mapBoxApiKey: string;
}) {
  const [step, setStep] = useState<typeof steps[number]>('TYPE');
  const [baseType, setBaseType] = useState<BaseImmoType>();
  const [subType, setSubType] = useState<ImmoType>();
  const [location, setLocation] = useState<ImmoLocation>();
  const [size, setSize] = useState<ImmoSize>();
  const [rooms, setRooms] = useState<ImmoRooms>();
  const [equipment, setEquipment] = useState<ImmoEquipment>();
  const [condition, setCondition] = useState<ImmoCondition>();
  const [reasoning, setReasoning] = useState<ImmoReasoning>();
  const [contact, setContact] = useState<ImmoContact>();

  const handleSubmit = async () => {
    const response = await fetch('/api/evaluation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        baseType,
        subType,
        location,
        size,
        rooms,
        equipment,
        condition,
        reasoning,
        contact,
      }),
    });

    if (response.ok) {
      setStep('SUCCESS');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 'TYPE':
        return (
          <EvaluationTypeStep
            defaultValues={{ baseType }}
            onSubmit={(base, sub) => {
              setBaseType(base);
              setSubType(sub);
              setStep('LOCATION');
            }}
          />
        );
      case 'LOCATION':
        return (
          <EvaluationLocationStep
            defaultValues={location}
            gmapsApiKey={gmapsApiKey}
            goBack={() => setStep('TYPE')}
            onChange={(params) => setLocation(params)}
            onSubmit={() => setStep('SIZE')}
          />
        );
      case 'SIZE':
        return (
          <EvaluationSizeStep
            defaultValues={size}
            baseType={baseType}
            goBack={() => setStep('LOCATION')}
            onChange={(params) => setSize(params)}
            onSubmit={() => setStep('ROOMS')}
          />
        );
      case 'ROOMS':
        return (
          <EvaluationRoomsStep
            defaultValues={rooms}
            baseType={baseType}
            goBack={() => setStep('SIZE')}
            onChange={(params) => setRooms(params)}
            onSubmit={() => setStep('EQUIPMENT')}
          />
        );
      case 'EQUIPMENT':
        return (
          <EvaluationEquipmentStep
            goBack={() => setStep('ROOMS')}
            onSubmit={(params) => {
              setEquipment(params);
              setStep('CONDITION');
            }}
          />
        );
      case 'CONDITION':
        return (
          <EvaluationConditionStep
            goBack={() => setStep('EQUIPMENT')}
            onSubmit={(params) => {
              setCondition(params);
              setStep('REASONING');
            }}
          />
        );
      case 'REASONING':
        return (
          <EvaluationReasoningStep
            defaultValues={reasoning}
            goBack={() => setStep('CONDITION')}
            onSubmit={(params) => {
              setReasoning(params);
              setStep('CONTACT');
            }}
          />
        );
      case 'CONTACT':
        return (
          <EvaluationContactStep
            defaultValues={contact}
            goBack={() => setStep('REASONING')}
            onChange={(params) => setContact(params)}
            onSubmit={handleSubmit}
          />
        );
      case 'SUCCESS':
        return <EvaluationSuccessStep />;
      default:
        return null;
    }
  };

  return (
    <main className="max-w-screen-2xl mx-auto p-3 md:p-6 min-h-[84vh]">
      <h1 className={styles.heading}>Immobilienbewertung</h1>
      <h2 className="text-center text-gray-700">
        Wir bewerten Ihre Immobilie. Kostenlos und unverbindlich
      </h2>
      <div className="flex gap-3 md:gap-6 mt-10">
        <div className="flex-1">{renderStep()}</div>
        <div className="flex-1 hidden sm:block">
          <EvaluationPreviewCard
            mapBoxApiKey={mapBoxApiKey}
            baseType={baseType}
            subType={subType}
            location={location}
            size={size}
            rooms={rooms}
          />
        </div>
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const gmapsApiKey = process.env.GMAPS_API_KEY;
  const mapBoxApiKey = process.env.MAPBOX_API_KEY;

  return {
    props: {
      gmapsApiKey,
      mapBoxApiKey,
    },
  };
};
