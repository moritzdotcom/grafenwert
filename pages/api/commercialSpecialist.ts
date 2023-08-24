import type { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

function toString(value?: string | string[]) {
  if (!value) return '-';
  return Array.isArray(value) ? value[0] : value;
}

function headerRow(label: string) {
  return `<tr><td colspan="2" style="text-align: center; padding: 1rem 0 0.5rem 0; font-weight: 600;">${label}</td></tr>`;
}

function itemRow(label: string, value?: string | number) {
  return `<tr><td style="padding: 0.4rem 0; border-bottom: 1px #d7d7d7 solid;">${label}</td><td style="color: #602C23; text-align: right; border-bottom: 1px #d7d7d7 solid;">${
    value || '-'
  }</td></tr>`;
}

const searchTypeLookup: { [key: string]: string } = {
  office: 'Büros',
  medical: 'Praxen',
  production: 'Industrie und Logistik',
  restaurant: 'Gastronomie und Hotelerie',
  shop: 'Einzelhandel',
  other: 'Sonstiges',
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    companyName,
    name,
    address,
    email,
    phone,
    searchType,
    priceFrom,
    priceTo,
    sizeFrom,
    sizeTo,
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
          ${itemRow('Firma', toString(companyName))}
          ${itemRow('Ansprechpartner', toString(name))}
          ${itemRow('Anschrift der Firma', toString(address))}
          ${itemRow('Email', toString(email))}
          ${itemRow('Telefonnummer', toString(phone))}
          ${headerRow('Suche')}
          ${itemRow('Typ', toString(searchTypeLookup[searchType]))}
          ${itemRow('Mindestpreis', toString(priceFrom))}
          ${itemRow('Maximalpreis', toString(priceTo))}
          ${itemRow('Mindest-m^2', toString(sizeFrom))}
          ${itemRow('Maximal-m^2', toString(sizeTo))}
        </tbody>
      </table>
    </body>
  </html>`;

  try {
    await sendgrid.send({
      to: 'info@grafenwert.de',
      from: 'Website Gewerbeimmobilien-Kampagne <website@grafenwert.de>',
      replyTo: toString(email),
      subject: `Suchanfrage einer Gewerbeimmobilie von ${toString(name)}`,
      html,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Email could not be sent' });
  }

  return res.status(200).json({});
}
