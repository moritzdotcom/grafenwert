import ServiceCard from '@/components/serviceCard';
import styles from '@/styles/services.module.css';
import Image from 'next/image';
import environmentIcon from '../../assets/icons/environment.png';
import inheritanceIcon from '../../assets/icons/inheritance.png';
import rentAdjustmentsIcon from '../../assets/icons/rentAdjustments.png';
import stayOrLeaveIcon from '../../assets/icons/stayOrLeave.png';
import stopIcon from '../../assets/icons/stop.png';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main>
      <div className="max-w-screen-lg mx-auto p-3">
        <h1 className={styles.heading}>Unsere Leistungen</h1>
        <p className="text-gray-600 mt-3 text-center">
          Wir bieten Ihnen ein umfangreiches Leistungsspektrum, um Ihre
          Immobilie bestmöglich zu vermarkten.
        </p>
      </div>
      <div className="bg-gray-200">
        <div className="max-w-screen-lg mx-auto p-3 grid grid-cols-1 md:grid-cols-2 gap-3">
          <ServiceCard
            href="#brokerage"
            title="Vermittlung"
            text="Wir vermieten und verkaufen Ein- und Mehrfamilienhäuser, Wohnungen, Grundstücke und Gewerbeimmobilien. Vor dem Verkauf bieten wir unseren Kunden eine individuelle Bewertung an."
            imageUrl="/images/services/brokerage.jpg"
          />
          <ServiceCard
            href="#consulting"
            title="Beratung"
            text="Wir beraten Sie in allen Fragen rund um Ihre Immobilien. Von der Mietanpassung über Stay or Leave Analysen, in Erbschaftsfragen oder bei Fragen der Nachhaltigkeit (ESG)."
            imageUrl="/images/services/consulting.jpg"
          />
          <ServiceCard
            href="#management"
            title="Hausverwaltung"
            text="Wir verwalten Immobilien aller Art. Von der Eigentumswohnung bis hin zum Mehrfamilienhaus. Wir sind Ihr Ansprechpartner, wenn es um die Verwaltung von Immobilien geht."
            imageUrl="/images/services/management.jpg"
          />
          <ServiceCard
            href="#financing"
            title="Finanzierung"
            text="Wir investieren in Immobilien aller Art. Von der Eigentumswohnung bis hin zum Mehrfamilienhaus. Wir sind Ihr Ansprechpartner, wenn es um die Investition in Immobilien geht."
            imageUrl="/images/services/financing.jpg"
          />
        </div>
      </div>
      <section className="my-6 relative">
        <div className="absolute -top-10" id="brokerage" />
        <div className="max-w-screen-lg mx-auto p-3">
          <h1 className="text-accent text-2xl border-b border-gray-400 pb-2 mb-3">
            Immobilienvermittlung
          </h1>
          <p className="text-gray-600 text-justify">
            Unsere Vermittlungstätigkeiten sind vielseitig, genau wie unsere
            Mandanten. Unser Team aus Spezialisten hat jahrelange Erfahrung in
            unterschiedlichsten Bereichen der Immobilienwirtschaft.
            Grafenwert-Immobilien ist Ihr vielseitiger und professioneller
            Berater rund um das Thema Immobilien. Egal ob es um eine
            Eigentumswohnung oder um ein Industrieareal geht, in unserem Team
            finden Sie den richtigen Ansprechpartner.
          </p>

          <div className="flex flex-col md:flex-row gap-5 my-3 text-gray-600">
            <div className="bg-gray-100 rounded p-3 w-full flex flex-col gap-3">
              <h2 className={`${styles.subheading} text-center`}>Vermietung</h2>
              <div className="w-2/3 border-t border-gray-500 mx-auto" />
              <div>
                <h3 className="font-semibold">Gewerbevermietung:</h3>
                <ul className="list-inside list-disc">
                  <li>Gastronomie und Hotellerie</li>
                  <li>Einzelhandel</li>
                  <li>Büro</li>
                  <li>Industrie und Logistik</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Wohnungsvermietung:</h3>
                <ul className="list-inside list-disc">
                  <li>Nur in Zusammenhang mit Verwaltungsmandat</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 rounded p-3 w-full flex flex-col gap-3">
              <h2 className={`${styles.subheading} text-center`}>Verkauf</h2>
              <div className="w-2/3 border-t border-gray-500 mx-auto" />
              <div>
                <h3 className="font-semibold">Gewerbe:</h3>
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
                <h3 className="font-semibold">Wohnen:</h3>
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
          </div>
        </div>
      </section>
      <section className="my-6 relative">
        <div className="absolute -top-10" id="consulting" />
        <div className="max-w-screen-lg mx-auto p-3">
          <h1 className="text-accent text-2xl border-b border-gray-400 pb-2 mb-3">
            Ganzheitliche Beratung
          </h1>
          <div className="my-5">
            <div className="max-w-screen-lg mx-auto px-3 text-gray-700 flex flex-col">
              <p>
                Unser Ziel ist es, Ihnen die bestmögliche Beratung in einer
                immer komplexer werdenden Immobilienwelt zu bieten. Unser
                Leistungsspektrum umfasst verschiedene Bereiche, um Sie
                ganzheitlich bei Ihren Immobilienangelegenheiten zu
                unterstützen. Hier sind einige unserer Schwerpunkte:
              </p>
              <div className="my-3 flex flex-col gap-3">
                <div className="flex gap-3 sm:gap-5 items-center flex-col sm:flex-row">
                  <Image src={environmentIcon} alt="ESG" width={70} />
                  <div>
                    <h5 className="text-accent text-lg">
                      ESG (Environmental, Social, and Governance)
                    </h5>
                    Wir beraten Sie bei Fragen der Nachhaltigkeit und
                    unterstützen Sie dabei, umweltfreundliche und sozial
                    verantwortungsbewusste Immobilieninvestitionen zu tätigen.
                    Wir helfen Ihnen, nachhaltige Immobilienprojekte zu
                    identifizieren und umzusetzen.
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-5 items-center flex-col sm:flex-row">
                  <Image src={inheritanceIcon} alt="Erbschaft" width={70} />
                  <div>
                    <h5 className="text-accent text-lg">Erbschaft</h5>
                    Wenn Sie eine Immobilie erben oder vererben möchten, stehen
                    wir Ihnen mit unserer Expertise zur Seite. Wir unterstützen
                    Sie bei der Bewertung der Immobilie, der Klärung rechtlicher
                    Aspekte und der Durchführung eines reibungslosen
                    Übergabeprozesses.
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-5 items-center flex-col sm:flex-row">
                  <Image
                    src={rentAdjustmentsIcon}
                    alt="Mietanpassungen"
                    width={70}
                  />
                  <div>
                    <h5 className="text-accent text-lg">Mietanpassungen</h5>
                    Bei Mietanpassungen helfen wir Ihnen, angemessene und faire
                    Mietpreise festzulegen. Wir analysieren den aktuellen
                    Immobilienmarkt und berücksichtigen lokale Gegebenheiten, um
                    eine optimale Mietstrategie für Ihre Immobilie zu
                    entwickeln.
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-5 items-center flex-col sm:flex-row">
                  <Image src={stopIcon} alt="Mietpreisbremse" width={70} />
                  <div>
                    <h5 className="text-accent text-lg">Mietpreisbremse</h5>
                    Wir informieren Sie über die regionalen Spezifika der
                    Mietpreisregulation und beraten Sie zur angepassten
                    Vorgehensweise.
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-5 items-center flex-col sm:flex-row">
                  <Image src={stayOrLeaveIcon} alt="StayOrLeave" width={70} />
                  <div>
                    <h5 className="text-accent text-lg">
                      Stay or leave Analysen
                    </h5>
                    Unsere Stay-or-Leave-Analysen bieten Gewerbemietern eine
                    umfassende Unterstützung bei der Optimierung ihres
                    Mietvertrags oder der Suche nach einer alternativen
                    Immobilie. Bei dieser professionellen Dienstleistung
                    analysieren wir sorgfältig den bestehenden Mietvertrag, um
                    Möglichkeiten zur Optimierung der Vertragsbedingungen wie
                    Laufzeit, Verhandlungen, vorzeitige Verlängerung oder
                    Beendigung zu identifizieren. Falls eine Beendigung des
                    aktuellen Mietvertrags erwünscht ist, helfen wir unseren
                    Kunden aktiv bei der Suche nach einer geeigneten
                    Alternative.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-6 relative">
        <div className="absolute -top-10" id="management" />
        <div className="max-w-screen-lg mx-auto p-3">
          <h1 className="text-accent text-2xl border-b border-gray-400 pb-2 mb-3">
            Hausverwaltung
          </h1>
          <p className="text-gray-600 text-justify">
            Ein dynamisches Management Ihrer Liegenschaften ist in seinem stetig
            ändernden Marktumfeld sehr wichtig. Wir hinterfragen mit Ihnen
            zusammen ihre aktuelle Nutzung ihrer Wohn- und Geschäftsflächen und
            entwickeln ein individuell auf ihre Anforderungen abgestimmtes
            Konzept. Bei der nachfolgenden Umsetzung sind wir Ihnen gerne
            behilflich.
          </p>
        </div>
      </section>
      <section className="my-6 relative">
        <div className="absolute -top-10" id="financing" />
        <div className="max-w-screen-lg mx-auto p-3">
          <h1 className="text-accent text-2xl border-b border-gray-400 pb-2 mb-3">
            Finanzierung & Versicherung
          </h1>
          <p className="text-gray-600 text-justify">
            Die Finanzierung und Versicherung ihrer Immobilie sollte den sich
            ständig ändernden Marktbedingungen gerecht werden. Wir beraten sie
            sowohl bei der Akquise als auch bei Refinanzierung individuell und
            bankenunabhängig. Wir möchten, dass Sie ihre Finanzierung und
            Versicherung zu Top-Konditionen erhalten.
          </p>
        </div>
      </section>
      <div className="bg-gray-200 py-5 my-10">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-accent text-center text-2xl sm:text-4xl">
            Kostenlose Immobilienbewertung anfordern
          </h1>
          <p className="text-center text-lg sm:text-xl text-gray-700 mt-3">
            Mit unserem Immobilienbewertungstool können Sie den Wert Ihrer
            Immobilie schnell und einfach ermitteln.
          </p>
          <Link
            href="/services/evaluation"
            className="block w-full max-w-sm mx-auto my-5 p-3 text-center text-white bg-accent rounded-lg text-lg sm:text-xl"
          >
            Immobilienbewertung anfordern
          </Link>
        </div>
      </div>
    </main>
  );
}
