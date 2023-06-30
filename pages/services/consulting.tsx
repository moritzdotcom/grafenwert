import ContactBanner from '@/components/contactBanner';
import styles from '@/styles/services.module.css';
import environmentIcon from '../../assets/icons/environment.png';
import inheritanceIcon from '../../assets/icons/inheritance.png';
import rentAdjustmentsIcon from '../../assets/icons/rentAdjustments.png';
import stayOrLeaveIcon from '../../assets/icons/stayOrLeave.png';
import Image from 'next/image';

export default function ServicesConsultingPage() {
  return (
    <div className="min-h-[88vh]">
      <main className={styles.container}>
        <h1 className={styles.heading}>Ganzheitliche Beratung</h1>
        <div className="my-5">
          <div className="max-w-screen-lg mx-auto px-3 text-gray-700 flex flex-col">
            <p>
              Unser Ziel ist es, Ihnen die bestmögliche Beratung in einer immer
              komplexer werdenden Immobilienwelt zu bieten. Unser
              Leistungsspektrum umfasst verschiedene Bereiche, um Sie
              ganzheitlich bei Ihren Immobilienangelegenheiten zu unterstützen.
              Hier sind einige unserer Schwerpunkte:
            </p>
            <div className="my-3 flex flex-col gap-3">
              <div className="flex gap-3 sm:gap-5 items-center flex-col sm:flex-row">
                <Image src={environmentIcon} alt="ESG" width={70} />
                <div>
                  <h5 className="text-accent text-lg">
                    ESG (Environmental, Social, and Governance)
                  </h5>
                  Wir beraten Sie bei Fragen der Nachhaltigkeit und unterstützen
                  Sie dabei, umweltfreundliche und sozial verantwortungsbewusste
                  Immobilieninvestitionen zu tätigen. Wir helfen Ihnen,
                  nachhaltige Immobilienprojekte zu identifizieren und
                  umzusetzen.
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
                  eine optimale Mietstrategie für Ihre Immobilie zu entwickeln.
                </div>
              </div>
              <div className="flex gap-3 sm:gap-5 items-center flex-col sm:flex-row">
                <Image
                  src={rentAdjustmentsIcon}
                  alt="Mietanpassungen"
                  width={70}
                />
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
                  Mietvertrags oder der Suche nach einer alternativen Immobilie.
                  Bei dieser professionellen Dienstleistung analysieren wir
                  sorgfältig den bestehenden Mietvertrag, um Möglichkeiten zur
                  Optimierung der Vertragsbedingungen wie Laufzeit,
                  Verhandlungen, vorzeitige Verlängerung oder Beendigung zu
                  identifizieren. Falls eine Beendigung des aktuellen
                  Mietvertrags erwünscht ist, helfen wir unseren Kunden aktiv
                  bei der Suche nach einer geeigneten Alternative.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ContactBanner
        ctaText="Sind Sie interessiert an einer Beratung in einem der Themen?"
        subject="Beratung"
      />
    </div>
  );
}
