import Image from 'next/image';
import careerImg from '@/assets/images/career.jpg';

export default function JobsPage() {
  return (
    <main className="min-h-[84vh]">
      <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 items-center gap-5">
        <div className="p-4 md:p-0 md:pl-10">
          <h1 className="text-center md:text-start text-accent text-xl md:text-4xl font-bold">
            Werden Sie Teil von etwas Großem!
          </h1>
          <p className="text-gray-700 text-justify mt-5">
            Unser wachsendes Team ist stets auf der Suche nach
            Immobilienberatern und -Vermittlern. Sind Sie erfahrener
            Immobilienmakler und suchen eine neue Herausforderung in einem
            dynamischen Unternehmen? Dann schicken Sie uns gerne Ihren
            Lebenslauf an
            <a
              className="mx-1 text-accent underline"
              href="mailto:karriere@grafenwert.de"
            >
              karriere@grafenwert.de
            </a>
          </p>
        </div>
        <div className="w-full md:max-w-lg place-self-center md:p-4">
          <Image
            src={careerImg}
            alt="career"
            className="object-cover max-h-80 md:shadow-xl md:rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
