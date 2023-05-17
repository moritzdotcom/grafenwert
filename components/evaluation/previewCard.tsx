import { ImmoLocation } from './locationStep';
import { ImmoRooms } from './roomsStep';
import { ImmoSize } from './sizeStep';
import { BaseImmoType, ImmoType } from './typeStep';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MdLocationPin } from 'react-icons/md';
import Image, { ImageProps } from 'next/image';

import BadezimmerIcon from '@/assets/icons/Badezimmer.svg';
import BalkonIcon from '@/assets/icons/Balkon.svg';
import BaujahrIcon from '@/assets/icons/Baujahr.svg';
import EtagenIcon from '@/assets/icons/Etagen.svg';
import GarageIcon from '@/assets/icons/Garage.svg';
import GesamteWohnflaecheIcon from '@/assets/icons/Gesamte Wohnflaeche.svg';
import GrundstuecksflaecheIcon from '@/assets/icons/Grundstuecksflaeche.svg';
import ModernisierungIcon from '@/assets/icons/Modernisierung.svg';
import NetRentIcon from '@/assets/icons/NetRent.svg';
import TypIcon from '@/assets/icons/Typ.svg';
import ZimmerIcon from '@/assets/icons/Zimmer.svg';

function MapboxMap({
  apiKey,
  initialLat,
  initialLng,
  lat,
  lng,
}: {
  apiKey: string;
  initialLat: number;
  initialLng: number;
  lat?: number;
  lng?: number;
}) {
  return (
    <Map
      mapboxAccessToken={apiKey}
      initialViewState={{
        latitude: initialLat,
        longitude: initialLng,
        zoom: lat && lng ? 10 : 4,
      }}
      latitude={lat || initialLat}
      longitude={lng || initialLng}
      zoom={lat && lng ? 12 : 4}
      mapStyle="mapbox://styles/moritzgrafenwert/clhp2b92x01tl01qy0v7q2ftu"
    >
      {lat && lng && <Marker longitude={lng} latitude={lat} />}
    </Map>
  );
}

function Item({
  icon,
  title,
  content,
}: {
  icon: ImageProps['src'];
  title: string;
  content?: string | number;
}) {
  return (
    <div className="grid grid-cols-[28px_1fr] items-center gap-3">
      <div className="w-7 h-7 relative">
        <Image src={icon} alt={title} fill />
      </div>
      <div className="truncate">
        <p className="text-accent truncate">{content || '-'}</p>
        <p className="text-gray-500 truncate">{title}</p>
      </div>
    </div>
  );
}

export default function EvaluationPreviewCard({
  baseType,
  subType,
  location,
  size,
  rooms,
  mapBoxApiKey,
}: {
  baseType?: BaseImmoType;
  subType?: ImmoType;
  location?: ImmoLocation;
  size?: ImmoSize;
  rooms?: ImmoRooms;
  mapBoxApiKey: string;
}) {
  return (
    <div>
      <div className="bg-accent text-white w-full py-2">
        <h3 className="text-center">
          Vorschau zu Ihrer digitalen Marktpreiseinschätzung.
        </h3>
      </div>
      <div className="w-full h-44">
        <MapboxMap
          apiKey={mapBoxApiKey}
          initialLat={50.9574815}
          initialLng={10.9820268}
          lat={location?.geolocation?.lat}
          lng={location?.geolocation?.lng}
        />
      </div>
      <div className="bg-gray-100 p-1 flex items-center gap-3">
        <MdLocationPin className="text-3xl text-accent" />
        <div>
          <p className="text-xs font-light text-accent">Adresse</p>
          <p className="text-gray-700">{location?.formattedAddress || '-'}</p>
        </div>
      </div>
      {baseType && (
        <div className="p-2">
          <h5 className="text-lg font-semibold text-accent">
            Eckdaten zu Ihrer Immobilie
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 mt-4">
            <Item icon={TypIcon} title="Typ" content={subType} />
            <Item
              icon={BaujahrIcon}
              title="Baujahr"
              content={location?.constructionYear}
            />
            <Item
              icon={ModernisierungIcon}
              title="Modernisierung"
              content={location?.rennovationYear}
            />
            <Item
              icon={GesamteWohnflaecheIcon}
              title="Wohnfläche"
              content={size?.livingSpace ? `${size.livingSpace} m²` : '-'}
            />
            {baseType == 'Haus' ? (
              <>
                <Item
                  icon={GrundstuecksflaecheIcon}
                  title="Grundstücksfläche"
                  content={size?.totalArea ? `${size.totalArea} m²` : '-'}
                />
                <Item
                  icon={EtagenIcon}
                  title="Anzahl Etagen"
                  content={size?.floorCount}
                />
                <Item
                  icon={ZimmerIcon}
                  title="Zimmer"
                  content={rooms?.totalRooms}
                />
                <Item
                  icon={BadezimmerIcon}
                  title="Badezimmer"
                  content={rooms?.bathrooms}
                />
                <Item
                  icon={BalkonIcon}
                  title="Balkon / Terrasse"
                  content={
                    rooms?.outdoorSpace ? `${rooms.outdoorSpace} m²` : '-'
                  }
                />
                <Item
                  icon={GarageIcon}
                  title="Garagenstellplätze"
                  content={rooms?.parkingPlaces}
                />
              </>
            ) : baseType == 'Mehrfamilienhaus' ? (
              <>
                <Item
                  icon={GrundstuecksflaecheIcon}
                  title="Grundstücksfläche"
                  content={size?.totalArea ? `${size.totalArea} m²` : '-'}
                />
                <Item
                  icon={ZimmerIcon}
                  title="Anzahl Wohneinheiten"
                  content={size?.apartmentCount}
                />
                <Item
                  icon={NetRentIcon}
                  title="Jährliche Nettomieteinnahmen"
                  content={size?.annualNetRent}
                />
              </>
            ) : baseType == 'Wohnung' ? (
              <>
                <Item icon={EtagenIcon} title="Etage" content={size?.floor} />
                <Item
                  icon={ZimmerIcon}
                  title="Zimmer"
                  content={rooms?.totalRooms}
                />
                <Item
                  icon={BadezimmerIcon}
                  title="Badezimmer"
                  content={rooms?.bathrooms}
                />
                <Item
                  icon={BalkonIcon}
                  title="Balkon / Terrasse"
                  content={
                    rooms?.outdoorSpace ? `${rooms.outdoorSpace} m²` : '-'
                  }
                />
                <Item
                  icon={GarageIcon}
                  title="Garagenstellplätze"
                  content={rooms?.parkingPlaces}
                />
              </>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
