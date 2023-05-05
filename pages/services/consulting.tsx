import ContactBanner from '@/components/contactBanner';
import styles from '@/styles/services.module.css';

export default function ServicesConsultingPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Ganzheitliche Beratung</h1>
      <p className="text-gray-600 text-justify">
        Wir kümmern uns um Ihre Angelegenheiten! Darauf können Sie sich
        verlassen! In einer stets komplexer werdenden Immobilienwelt mit immer
        mehr Regularien, kann man schnell den Überblick verlieren. Sprechen Sie
        uns daher gerne an, wenn Sie fachmännische Beratung benötigen. Wir
        betreuen Sie gerne in den Bereichen:
      </p>

      <div className="my-3 text-gray-600">
        <ul className="list-inside list-disc">
          <li>ESG (Enviormental, Social, Governance)</li>
          <li>Mietpreisbremse bzw. Mietanpassungen</li>
          <li>Energiewende</li>
          <li>Finanzierung & Versicherung</li>
          <li>Erbschaft</li>
          <li>Stay or leave - Analysen</li>
        </ul>
      </div>
      <ContactBanner ctaText="Sind Sie interessiert an einer Beratung in einem der Themen?" />
    </main>
  );
}
