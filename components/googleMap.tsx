import { useEffect } from 'react';
import { Status, Wrapper } from '@googlemaps/react-wrapper';

function Map({
  marker,
  minimal,
  zoom,
}: {
  marker: { lat: number; lng: number };
  minimal?: boolean;
  zoom: number;
}) {
  useEffect(() => {
    // @ts-expect-error Property 'google' does not exist on type 'Window & typeof globalThis'
    const blankMap = new window.google.maps.Map(
      document.getElementById('gmap'),
      {
        zoom,
        center: marker,
        draggable: minimal ? false : true,
        disableDefaultUI: minimal ? true : false,
      }
    );
    // @ts-expect-error Property 'google' does not exist on type 'Window & typeof globalThis'
    const mark = new window.google.maps.Marker({
      position: marker,
      map: blankMap,
    });
  }, [marker]);

  return <div id="gmap" className="w-full h-full" />;
}

export default function GoogleMap({
  marker,
  apiKey,
  minimal,
  zoom = 17,
}: {
  marker: { lat: number; lng: number };
  apiKey: string;
  minimal?: boolean;
  zoom?: number;
}) {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  return (
    <Wrapper apiKey={apiKey} render={render}>
      <Map marker={marker} minimal={minimal} zoom={zoom} />
    </Wrapper>
  );
}
