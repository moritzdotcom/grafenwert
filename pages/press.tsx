import pressReleases, { PressRelease } from '@/data/pressReleases';

export default function PressPage({
  pressReleases,
}: {
  pressReleases: PressRelease[];
}) {
  return (
    <main className="max-w-screen-lg mx-auto my-7 px-5 min-h-[81.5vh]">
      <h1 className="text-center text-accent text-xl font-bold">Presse</h1>
      <div className="flex flex-col gap-16 mt-5">
        {pressReleases.map((pressRelease) => (
          <div className="group" key={pressRelease.id}>
            <img
              className="w-full sm:w-1/3 aspect-video sm:aspect-[4/3] object-cover rounded group-odd:float-left group-even:float-right mb-1 group-odd:mr-3 group-even:ml-3"
              src={pressRelease.imageUrl}
              alt={pressRelease.title}
            />
            <h2 className="text-accent text-xl">{pressRelease.title}</h2>
            <p className="text-gray-500 text-sm italic mt-1">
              {pressRelease.date}
            </p>
            <p
              className="text-gray-700 text-justify mt-2"
              dangerouslySetInnerHTML={{ __html: pressRelease.content }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      pressReleases: pressReleases,
    },
  };
}
