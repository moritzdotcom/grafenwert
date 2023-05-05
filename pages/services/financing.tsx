import ContactBanner from '@/components/contactBanner';
import styles from '@/styles/services.module.css';

export default function ServicesFinancingPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Finanzierung & Versicherung</h1>
      <p className="text-gray-600 text-justify">
        Ein Euro gespart ist wie Ein Euro verdient! Geben Sie nicht unnötig Geld
        für teure Finanzierungen und Versicherungen aus. Lassen Sie uns
        vergleichen was möglich ist. Unser Spezialist für Finanzierungen und
        Versicherungen lädt Sie gerne zu einem persönlichen Beratungsgespräch in
        unser Büro ein. Sie möchten eine neue Immobilie kaufen? Lassen Sie uns
        Angebote diverser Banken vergleichen und das Beste für Sie
        Zusammenstellen. Durch unsere langjährigen Kontakte bei verschiedenen
        Banken, erhalten wir Top-Konditionen und können Ihre Finanzierung
        schneller platzieren. Gerade beim Immobilienkauf ist eine schnelle
        Finanzierungsbestätigung wichtig, da sonst ein anderer Interessent den
        Zuschlag kriegen könnte. Wir sorgen dafür, dass Sie den Zuschlag
        bekommen, und zwar zu Top-Konditionen und mit ganzheitlicher Beratung.
      </p>
      <ContactBanner ctaText="Sie haben Interesse an einer Finanzierung?" />
    </main>
  );
}
