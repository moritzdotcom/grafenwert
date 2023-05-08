import Link from 'next/link';

export default function ServiceCard({
  href,
  title,
  text,
  imageUrl,
}: {
  href: string;
  title: string;
  text: string;
  imageUrl: string;
}) {
  return (
    <Link
      href={href}
      className="bg-gray-300 aspect-video rounded overflow-hidden"
      style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}
    >
      <div className="p-3 sm:p-6 h-full flex flex-col gap-3 justify-end bg-gradient-to-b from-transparent to-black transition-transform hover:scale-105">
        <h2 className="text-gray-100 text-xl sm:text-2xl">{title}</h2>
        <p className="text-gray-300 text-xs sm:text-sm">{text}</p>
      </div>
    </Link>
  );
}
