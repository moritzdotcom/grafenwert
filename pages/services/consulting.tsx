import ContactBanner from '@/components/contactBanner';
import styles from '@/styles/services.module.css';
import { MdCheckCircle } from 'react-icons/md';

export default function ServicesConsultingPage() {
  return (
    <div className="min-h-[88vh]">
      <main className={styles.container}>
        <h1 className={styles.heading}>Ganzheitliche Beratung</h1>
        <p className="text-gray-600 text-justify">
          Wir kümmern uns um Ihre Angelegenheiten! Darauf können Sie sich
          verlassen! In einer stets komplexer werdenden Immobilienwelt mit immer
          mehr Regularien, kann man schnell den Überblick verlieren. Sprechen
          Sie uns daher gerne an, wenn Sie fachmännische Beratung benötigen. Wir
          betreuen Sie gerne in den Bereichen:
        </p>

        <div className="my-3 text-gray-600">
          <ul className="text-gray-700 mb-8">
            <li className="flex items-center my-2">
              <MdCheckCircle className="h-6 w-6 text-accent mr-2 mt-1" />
              <span>ESG (Environmental, Social, Governance)</span>
            </li>
            <li className="flex items-center my-2">
              <MdCheckCircle className="h-6 w-6 text-accent mr-2 mt-1" />
              <span>Mietpreisbremse bzw. Mietanpassungen</span>
            </li>
            <li className="flex items-center my-2">
              <MdCheckCircle className="h-6 w-6 text-accent mr-2 mt-1" />
              <span>Energiewende</span>
            </li>
            <li className="flex items-center my-2">
              <MdCheckCircle className="h-6 w-6 text-accent mr-2 mt-1" />
              <span>Finanzierung & Versicherung</span>
            </li>
            <li className="flex items-center my-2">
              <MdCheckCircle className="h-6 w-6 text-accent mr-2 mt-1" />
              <span>Erbschaft</span>
            </li>
            <li className="flex items-center my-2">
              <MdCheckCircle className="h-6 w-6 text-accent mr-2 mt-1" />
              <span>Stay or leave - Analysen</span>
            </li>
          </ul>
        </div>
      </main>
      <ContactBanner
        ctaText="Sind Sie interessiert an einer Beratung in einem der Themen?"
        subject="Beratung"
      />
    </div>
  );
}
