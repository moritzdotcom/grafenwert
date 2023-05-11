import ContactBanner from '@/components/contactBanner';
import styles from '@/styles/services.module.css';

export default function ServicesManagementPage() {
  return (
    <div className="min-h-[88vh]">
      <main className={styles.container}>
        <h1 className={styles.heading}>Hausverwaltung</h1>
        <p className="text-gray-600 text-justify">
          Ein dynamisches Management Ihrer Liegenschaften ist extrem wichtig und
          wenn man das nicht verinnerlicht, kann einem viel Geld entgehen. Der
          Begriff Hausverwaltung ist etwas in die Jahre gekommen und gibt dem
          Bereich ein sehr trockenes Image. Dabei ist das Management Ihrer
          Immobilie und ein kritisches Hinterfragen der Wohn- und
          Geschäftsflächen wichtig für ein ertragsreiches cash flow. Wir schauen
          uns jede Liegenschaft individuell an und besprechen mit Ihnen die
          optimale Nutzung und eine gute Strukturierung Ihrer Mieterschaft. Alte
          Gewohnheiten kritisch hinterfragen ist eine unserer Stärken und diese
          Stärke wird auch Ihrer Immobilie zugutekommen.
        </p>
      </main>
      <ContactBanner
        ctaText="Benötigen Sie Hilfe bei der Verwaltung Ihrer Immobilie?"
        subject="Hausverwaltung"
      />
    </div>
  );
}
