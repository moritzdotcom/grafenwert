import ContactBanner from '@/components/contactBanner';
import styles from '@/styles/services.module.css';
import { google } from 'googleapis';
import { GetServerSidePropsContext } from 'next';

export default function ServicesBrokeragePage({
  videoUrl,
}: {
  videoUrl?: string;
}) {
  return (
    <>
      <main className={styles.container}>
        <h1 className={styles.heading}>Immobilienvermittlung</h1>
        <p className="text-gray-600 text-justify">
          Unsere Vermittlungstätigkeiten sind vielseitig, genau wie unsere
          Mandanten. Unser Team aus Spezialisten hat jahrelange Erfahrung in
          unterschiedlichsten Bereichen der Immobilienwirtschaft.
          Grafenwert-Immobilien ist Ihr vielseitiger und professioneller Berater
          rund um das Thema Immobilien. Egal ob es um eine Eigentumswohnung oder
          um ein Industrieareal geht, in unserem Team finden Sie den richtigen
          Ansprechpartner.
        </p>

        <div className="flex flex-col md:flex-row gap-5 my-3 text-gray-600">
          <div className="bg-gray-100 rounded p-3 w-full flex flex-col gap-3">
            <h2 className={`${styles.subheading} text-center`}>Vermietung</h2>
            <div>
              <h3 className="font-semibold">Gewerbevermietung:</h3>
              <ul className="list-inside list-disc">
                <li>Gastronomie und Hotellerie</li>
                <li>Einzelhandel</li>
                <li>Büro</li>
                <li>Industrie und Logistik</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Wohnungsvermietung:</h3>
              <ul className="list-inside list-disc">
                <li>Nur in Zusammenhang mit Verwaltungsmandat</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 rounded p-3 w-full flex flex-col gap-3">
            <h2 className={`${styles.subheading} text-center`}>Verkauf</h2>
            <div>
              <h3 className="font-semibold">Gewerbe:</h3>
              <ul className="list-inside list-disc">
                <li>Büroimmobilien</li>
                <li>Hotels</li>
                <li>Einzelhandelsimmobilien</li>
                <li>Industrie und Logistik</li>
                <li>Auch Teileigentumsimmobilien</li>
                <li>Gewerbliche Grundstücke</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Wohnen:</h3>
              <ul className="list-inside list-disc">
                <li>Mehrfamilienhäuser</li>
                <li>Wohn- und Geschäftshäuser</li>
                <li>Wohnanlagen</li>
                <li>Eigentumswohnungen</li>
                <li>Einfamilienhäuser</li>
                <li>Wohnrechtliche Grundstücke</li>
              </ul>
            </div>
          </div>
        </div>

        {videoUrl && (
          <div className="my-5 mx-auto w-full max-w-3xl">
            <h2 className={styles.subheading}>
              Unsere aktuellen Immobilienangebote
            </h2>
            <p className="text-gray-600 mb-3">
              Auf unserem YouTube Kanal finden Sie aktuelle Immobilienangebote
              in hochwertigen Videos aufbereitet.
            </p>
            <iframe
              width="100%"
              className="aspect-video"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </main>
      <ContactBanner
        ctaText="Haben Sie Interesse an diesem Angebot?"
        subject="Immobilienvermittlung"
      />
    </>
  );
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  res.setHeader('Cache-Control', 'public, s-maxage=7200');
  try {
    const apiKey = process.env.GMAPS_API_KEY; // Set your YouTube API key here
    const channelId = 'UCkWbvm5EepFZ57UFqn9e0mw'; // Replace with your actual channel ID

    // Create the YouTube Data API client
    const youtube = google.youtube({
      version: 'v3',
      auth: apiKey,
    });

    // Retrieve the latest video from the channel
    const searchResponse = await youtube.search.list({
      part: ['snippet'],
      channelId: channelId,
      order: 'date',
      maxResults: 1,
    });

    if (!searchResponse?.data?.items) return { props: {} };
    const latestVideo = searchResponse.data.items[0];

    if (!latestVideo?.id) return { props: {} };

    // Get the video details
    const videoId = latestVideo.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;

    // Send the video details as the API response
    return { props: { videoUrl } };
  } catch (error) {
    console.error('Error retrieving latest video:', error);
    return { props: {} };
  }
}
