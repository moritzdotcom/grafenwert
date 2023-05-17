import type { NextApiRequest, NextApiResponse } from 'next';
import { ImmoCondition } from '@/components/evaluation/conditionStep';
import { ImmoContact } from '@/components/evaluation/contactStep';
import { ImmoEquipment } from '@/components/evaluation/equipmentStep';
import { ImmoLocation } from '@/components/evaluation/locationStep';
import { ImmoReasoning } from '@/components/evaluation/reasoningStep';
import { ImmoRooms } from '@/components/evaluation/roomsStep';
import { ImmoSize } from '@/components/evaluation/sizeStep';
import { BaseImmoType, ImmoType } from '@/components/evaluation/typeStep';

import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

function headerRow(label: string) {
  return `<tr><td colspan="2" style="text-align: center; padding: 1rem 0 0.5rem 0; font-weight: 600;">${label}</td></tr>`;
}

function itemRow(label: string, value?: string | number) {
  return `<tr><td style="padding: 0.4rem 0; border-bottom: 1px #d7d7d7 solid;">${label}</td><td style="color: #602C23; text-align: right; border-bottom: 1px #d7d7d7 solid;">${
    value || '-'
  }</td></tr>`;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    baseType,
    subType,
    location,
    size,
    rooms,
    equipment,
    condition,
    reasoning,
    contact,
  }: {
    baseType: BaseImmoType;
    subType: ImmoType;
    location: ImmoLocation;
    size: ImmoSize;
    rooms: ImmoRooms;
    equipment: ImmoEquipment;
    condition: ImmoCondition;
    reasoning: ImmoReasoning;
    contact: ImmoContact;
  } = req.body;

  const html = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en">
    <head>
      <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    </head>
    <body style="font-family: sans-serif; color: #374151">
      <table style="border-spacing: 0; margin: 0 auto">
        <tbody>
          ${headerRow('Kontaktinformationen')}
          ${itemRow('Name', `${contact.firstName} ${contact.lastName}`)}
          ${itemRow('E-Mail', contact.email)}
          ${itemRow('Telefon', contact.phone)}
          ${itemRow(
            'Grund',
            reasoning.reason == 'Anderer Grund'
              ? reasoning.otherReason
              : reasoning.reason
          )}
          ${
            reasoning.horizon
              ? itemRow('Zeitlicher Horizont', reasoning.horizon)
              : ''
          }
          ${headerRow('Immobilientyp')}
          ${itemRow('Immobilientyp', subType)}
          ${headerRow('Adresse')}
          ${itemRow('Straße & Hausnr.', location.address)}
          ${itemRow('Stadt', location.city)}
          ${headerRow('Details')}
          ${itemRow('Baujahr', location.constructionYear)}
          ${itemRow('Rennovierungsjahr', location.rennovationYear)}
          ${itemRow('Wohnraum', `${size.livingSpace} m²`)}
          ${
            size.totalArea
              ? itemRow('Grundstücksfläche', `${size.totalArea} m²`)
              : ''
          }
          ${
            size.floor
              ? itemRow('Etage', `${size.floor} von ${size.floorCount}`)
              : size.floorCount
              ? itemRow('Etagen', size.floorCount)
              : ''
          }
          ${
            size.apartmentCount
              ? itemRow('Anzahl Wohneinheiten', size.apartmentCount)
              : ''
          }
          ${
            size.annualNetRent
              ? itemRow(
                  'Jährliche Nettomieteinnahmen',
                  `${size.annualNetRent} €`
                )
              : ''
          }
          ${itemRow('Energieeffizienz', size.energyEfficiency)}
          ${headerRow('Räumlichkeiten')}
          ${itemRow('Zimmer', rooms.totalRooms)}
          ${itemRow('Badezimmer', rooms.bathrooms)}
          ${itemRow('Balkon / Terrasse', `${rooms.outdoorSpace} m²`)}
          ${itemRow('Garagenstellplätze', rooms.parkingPlaces)}
          ${itemRow('Außenstellplätze', rooms.outdoorParkingPlaces)}
          ${
            baseType == 'Haus'
              ? itemRow(
                  'Neubau (Erstbezug)',
                  rooms.features.neubau ? 'Ja' : 'Nein'
                )
              : ''
          }
          ${
            baseType == 'Haus'
              ? itemRow('Schwimmbad', rooms.features.pool ? 'Ja' : 'Nein')
              : ''
          }
          ${
            baseType == 'Haus'
              ? itemRow('Sauna', rooms.features.sauna ? 'Ja' : 'Nein')
              : ''
          }
          ${headerRow('Ausstattung & Zustand')}
          ${itemRow('Ausstattung', equipment)}
          ${itemRow('Zustand', condition)}
        </tbody>
      </table>
    </body>
  </html>`;

  try {
    await sendgrid.send({
      to: 'info@grafenwert.de',
      from: 'Website Immobilienbewertung <website@grafenwert.de>',
      replyTo: contact.email,
      subject: `Anfrage zur Bewertung einer Immobilie von ${contact.firstName} ${contact.lastName}`,
      html,
    });
  } catch (error) {
    return res.status(500).json({ error: 'Email could not be sent' });
  }

  return res.status(200).json({});
}
