import Image from 'next/image';
import PartnersImage from '../public/images/people/partners.jpg';

export default function AboutPage() {
  return (
    <main className="max-w-screen-lg mx-auto my-7 px-5 min-h-[81.5vh]">
      <h1 className="text-center text-accent text-xl font-bold">Über uns</h1>
      <h2 className="text-center text-gray-700 text-xl">
        Kompetenz durch Erfahrung
      </h2>
      <div className="flex flex-col md:flex-row-reverse gap-3 mt-10">
        <Image
          src={PartnersImage}
          alt="Partners"
          className="object-cover rounded-md w-full md:w-2/5"
        />
        <p className="text-gray-700 w-full">
          Unsere Geschäftsführer und Gesellschafter Reinhard Löchner und Sam
          Zahiri sind seit 2008 mit großer Leidenschaft im Immobilienmarkt in
          Nordrhein-Westfalen tätig. Die von Ihnen sorgfältig aufgebauten
          Immobilienportfolios werden erstklassisch bewirtschaftet und
          regelmäßig erweitert. Profitieren sie von diesem Know-how. Wir beraten
          sie gerne.
        </p>
      </div>
    </main>
  );
}
