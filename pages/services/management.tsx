import ContactBanner from '@/components/contactBanner';
import styles from '@/styles/services.module.css';

export default function ServicesManagementPage() {
  return (
    <div className="min-h-[88vh]">
      <main className={styles.container}>
        <h1 className={styles.heading}>Hausverwaltung</h1>
        <p className="text-gray-600 text-justify">
          Ein dynamisches Management Ihrer Liegenschaften ist in seinem stetig
          ändernden Marktumfeld sehr wichtig. Wir hinterfragen mit Ihnen
          zusammen ihre aktuelle Nutzung ihrer Wohn- und Geschäftsflächen und
          entwickeln ein individuell auf ihre Anforderungen abgestimmtes
          Konzept. Bei der nachfolgenden Umsetzung sind wir Ihnen gerne
          behilflich.
        </p>
      </main>
      <ContactBanner
        ctaText="Benötigen Sie Hilfe bei der Verwaltung Ihrer Immobilie?"
        subject="Hausverwaltung"
      />
    </div>
  );
}
