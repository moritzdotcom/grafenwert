import Head from 'next/head';

export default function ImprintPage() {
  return (
    <>
      <Head>
        <title>Grafenwert - Impressum</title>
      </Head>
      <main className="max-w-xl mx-auto px-5 min-h-[70vh]">
        <h1 className="text-2xl text-center mt-5">Impressum</h1>
        <div className="w-full border-t-[1px] border-gray-500 my-2"></div>
        <h3 className="text-lg mt-5">
          Verantwortlich für den Inhalt der Website:
        </h3>
        <div className="w-full border-t-[1px] border-gray-500 my-2"></div>
        <p>Grafenwert Immobilien GmbH</p>
        <p>Graf-Adolf-Platz 12</p>
        <p>40213 Düsseldorf</p>
        <br />
        <p>Telefon (Zentrale): +49 152 286 880 82</p>
        {/* <p>Fax: (0211) 522 884 29</p> */}
        <p>E-Mail: info@grafenwert.de</p>
        <br />
        <p>Geschäftsführung:</p>
        <p>Sam Zahiri, Reinhard Löchner</p>
        <br />
        {/* TODO: <p>Umsatzsteuer. Ident-Nr.: DE 27 76 19 723</p> */}
        <p>Handelsregister: Amtsgericht Düsseldorf HRB 100615</p>
      </main>
    </>
  );
}
