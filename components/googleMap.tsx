import { useEffect } from 'react';
import { Status, Wrapper } from '@googlemaps/react-wrapper';

function Map({ marker }: { marker: { lat: number; lng: number } }) {
  useEffect(() => {
    // @ts-expect-error Property 'google' does not exist on type 'Window & typeof globalThis'
    const blankMap = new window.google.maps.Map(
      document.getElementById('gmap'),
      {
        zoom: 17,
        center: marker,
      }
    );
    // @ts-expect-error Property 'google' does not exist on type 'Window & typeof globalThis'
    const mark = new window.google.maps.Marker({
      position: marker,
      map: blankMap,
    });
  }, []);

  return <div id="gmap" className="w-full h-full" />;
}

export default function GoogleMap({
  marker,
  apiKey,
}: {
  marker: { lat: number; lng: number };
  apiKey: string;
}) {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  return (
    <Wrapper apiKey={apiKey} render={render}>
      <Map marker={marker} />
    </Wrapper>
  );
}
