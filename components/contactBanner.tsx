import Link from 'next/link';
import { IoMdChatboxes } from 'react-icons/io';

export default function ContactBanner({
  ctaText,
  subject,
}: {
  ctaText: string;
  subject?: string;
}) {
  return (
    <div className="bg-gray-100 p-7 my-3">
      <div className="w-full flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-3 max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-7 items-center sm:items-start">
          <h4 className="text-gray-700 text-3xl text-center sm:text-start max-w-md">
            {ctaText}
          </h4>
          <Link
            href={`/contact${subject ? `?subject=${subject}` : ''}`}
            as="/contact"
            className="bg-accent text-white px-3 py-2 rounded"
          >
            Kontaktieren Sie uns
          </Link>
        </div>
        <div className="p-5 rounded-full shadow-xl bg-gray-400 skew-x-2">
          <IoMdChatboxes className="text-5xl text-gray-100" />
        </div>
      </div>
    </div>
  );
}
