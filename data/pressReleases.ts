export interface PressRelease {
  id: number;
  title: string;
  date: string;
  content: string;
  imageUrl: string;
}

const pressReleases: PressRelease[] = [
  {
    id: 1,
    title: 'Gründung der Grafenwert GmbH in Düsseldorf',
    date: '25.04.2023',
    content: `
    Am 25. April 2023 gründen die beiden Immobilienexperten Reinhard Löchner und Sam Zahiri die Grafenwert Immobilien GmbH in der nordrhein-westfälischen Landeshauptstadt Düsseldorf. Das eigentümergeführte Unternehmen wird als Full-Service-Makler sämtliche Leistungen rund um die Immobilie anbieten.</br>
    <span style="font-style: italic">"Wir freuen uns sehr, unsere langjährige Erfahrung in einem gemeinsamen Unternehmen zu bündeln"</span>, erklärt Reinhard Löchner. <span style="font-style: italic">"Dabei ist es unser Ziel, unsere Mandanten bei ihren Immobilieninvestments optimal zu beraten und dabei auf deren individuelle Bedürfnisse und Wünsche einzugehen."</span></br>
    Das Beratungsangebot der Grafenwert Immobilien GmbH umfasst eine umfassende Betreuung von der Suche nach passenden Immobilien über die Finanzierung bis hin zur Verwaltung. Dabei steht immer der Kunde im Mittelpunkt und es wird großen Wert auf eine individuelle Beratung gelegt. Dank des Standorts in Düsseldorf werden Mandanten für Immobilienprojekte in ganz Nordrhein-Westfalen auf kurzem Weg individuell betreut.</br>
    <span style="font-style: italic">"Unser Ziel ist es, unsere Mandanten optimal zu unterstützen und ihnen bei ihren Immobilieninvestments zum Erfolg zu verhelfen"</span>, erklärt Sam Zahiri. <span style="font-style: italic">"Dabei setzen wir auf eine offene und ehrliche Kommunikation, um gemeinsam die besten Ergebnisse zu erzielen."</span></br>
    Die Grafenwert Immobilien GmbH startet mit einem klaren Fokus auf Kundenzufriedenheit mit einer umfassenden Immobilien-Expertise durch.</br>
    `,
    imageUrl: '/images/press/2023-04-25.jpeg',
  },
];

export default pressReleases;
