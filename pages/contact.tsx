import ContactForm from '@/components/contactForm';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Grafenwert - Kontakt</title>
      </Head>
      <main className="mt-5 max-w-5xl mx-auto px-5 mb-5">
        <h3 className="text-accent mt-10 text-2xl lg:text-3xl font-bold pb-3">
          Fragen oder Anliegen?
        </h3>
        <p>Kontaktieren Sie uns! Wir helfen Ihnen gerne weiter.</p>
        <ContactForm />
        <h3 className="text-accent mt-10 text-2xl lg:text-3xl font-bold pb-3 border-b border-gray-300">
          So finden Sie uns
        </h3>
        <div className="w-full h-72 sm:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156.18866382634994!2d6.778234707676845!3d51.21873262485454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ca3e7732545d%3A0x63052a55db7c45d7!2sGraf-Adolf-Platz%2012%2C%2040213%20D%C3%BCsseldorf!5e0!3m2!1sde!2sde!4v1687526507156!5m2!1sde!2sde"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
    </>
  );
}
