import ContactBanner from '@/components/contactBanner';
import styles from '@/styles/services.module.css';

export default function ServicesBrokeragePage() {
  return (
    <>
      <main className={styles.container}>
        <h1 className={styles.heading}>Immobilienvermittlung</h1>
        <p className="text-gray-600 text-justify">
          Unsere Vermittlungstätigkeiten sind vielseitig, genau wie unsere
          Mandanten. Unser Team aus Spezialisten hat jahrelange Erfahrung in
          unterschiedlichsten Bereichen der Immobilienwirtschaft.
          Grafenwert-Immobilien ist Ihr vielseitiger und professioneller Berater
          rund um das Thema Immobilien. Egal ob es um eine Eigentumswohnung oder
          um ein Industrieareal geht, in unserem Team finden Sie den richtigen
          Ansprechpartner.
        </p>

        <div className="flex flex-col gap-3 my-3 text-gray-600">
          <h2 className={styles.subheading}>Vermietung</h2>
          <div>
            <h3>Gewerbevermietung:</h3>
            <ul className="list-inside list-disc">
              <li>Gastronomie und Hotellerie</li>
              <li>Einzelhandel</li>
              <li>Büro</li>
              <li>Industrie und Logistik</li>
            </ul>
          </div>

          <div>
            <h3>Wohnungsvermietung:</h3>
            <ul className="list-inside list-disc">
              <li>Nur in Zusammenhang mit Verwaltungsmandat</li>
            </ul>
          </div>

          <h2 className={styles.subheading}>Verkauf</h2>

          <div>
            <h3>Gewerbe:</h3>
            <ul className="list-inside list-disc">
              <li>Büroimmobilien</li>
              <li>Hotels</li>
              <li>Einzelhandelsimmobilien</li>
              <li>Industrie und Logistik</li>
              <li>Auch Teileigentumsimmobilien</li>
              <li>Gewerbliche Grundstücke</li>
            </ul>
          </div>

          <div>
            <h3>Wohnen:</h3>
            <ul className="list-inside list-disc">
              <li>Mehrfamilienhäuser</li>
              <li>Wohn- und Geschäftshäuser</li>
              <li>Wohnanlagen</li>
              <li>Eigentumswohnungen</li>
              <li>Einfamilienhäuser</li>
              <li>Wohnrechtliche Grundstücke</li>
            </ul>
          </div>
        </div>
      </main>
      <ContactBanner
        ctaText="Haben Sie Interesse an diesem Angebot?"
        subject="Immobilienvermittlung"
      />
    </>
  );
}
