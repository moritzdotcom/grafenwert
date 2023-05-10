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
    Heute ist ein besonderer Tag für die Immobilienbranche in Nordrhein-Westfalen, denn die Grafenwert Immobilien GmbH wurde gegründet. Das Unternehmen wird von den erfahrenen Immobilienexperten Reinhard Löchner und Sam Zahiri geleitet und hat seinen Hauptsitz in der nordrhein-westfälischen Landeshauptstadt Düsseldorf.</br>
    Die Grafenwert Immobilien GmbH ist ein Eigentümergeführtes Beratungsunternehmen mit einem klaren Fokus auf Immobilieninvestments. Die beiden Gründer können dabei auf eine langjährige Kompetenz und Erfahrung in diesem Bereich zurückblicken. Mit ihrem umfassenden Wissen und Netzwerk haben sie bereits zahlreiche erfolgreiche Projekte in der Immobilienbranche realisiert.</br>
    <span style="font-style: italic">"Wir freuen uns sehr, unsere langjährige Erfahrung in einem eigenen Unternehmen bündeln zu können"</span>, erklärt Reinhard Löchner. <span style="font-style: italic">"Dabei ist es unser Ziel, unsere Mandanten bei ihren Immobilieninvestments optimal zu beraten und dabei auf deren individuelle Bedürfnisse und Wünsche einzugehen."</span></br>
    Das Beratungsangebot der Grafenwert Immobilien GmbH umfasst eine umfassende Betreuung von der Suche nach passenden Immobilien über die Finanzierung bis hin zur Verwaltung. Dabei steht immer der Kunde im Mittelpunkt und es wird eine individuelle Beratung auf höchstem Niveau geboten. Dank des Standorts in Düsseldorf ist das Unternehmen dabei optimal im Rheinland verankert und kann Mandanten in ganz NRW betreuen.</br>
    <span style="font-style: italic">"Unser Ziel ist es, unsere Mandanten optimal zu unterstützen und ihnen bei ihren Immobilieninvestments zum Erfolg zu verhelfen"</span>, erklärt Sam Zahiri. <span style="font-style: italic">"Dabei setzen wir auf eine offene und ehrliche Kommunikation, um gemeinsam die besten Ergebnisse zu erzielen."</span></br>
    Die Grafenwert Immobilien GmbH startet somit mit einem klaren Fokus auf Kundenzufriedenheit und einer umfassenden Expertise in der Immobilienbranche durch. Wir sind gespannt auf die kommenden Projekte und Entwicklungen des Unternehmens.</br>
    `,
    imageUrl: '/images/press/2023-04-25.jpeg',
  },
];

export default pressReleases;
