import ContactBanner from '@/components/contactBanner';
import styles from '@/styles/services.module.css';

export default function ServicesFinancingPage() {
  return (
    <div className="min-h-[88vh]">
      <main className={styles.container}>
        <h1 className={styles.heading}>Finanzierung & Versicherung</h1>
        <p className="text-gray-600 text-justify">
          Die Finanzierung und Versicherung ihrer Immobilie sollte den sich
          ständig ändernden Marktbedingungen gerecht werden. Wir beraten sie
          sowohl bei der Akquise als auch bei Refinanzierung individuell und
          bankenunabhängig. Wir möchten, dass Sie ihre Finanzierung und
          Versicherung zu Top-Konditionen erhalten.
        </p>
      </main>
      <ContactBanner
        ctaText="Sie haben Interesse an einer Finanzierung?"
        subject="Finanzierung & Versicherung"
      />
    </div>
  );
}
