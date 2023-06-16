import type { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';
import formidable from 'formidable';
import fs from 'fs';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export const config = {
  api: {
    bodyParser: false,
  },
};

async function parseForm(
  req: NextApiRequest
): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
  return new Promise((resolve, reject) => {
    const form = formidable({});
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
}

function toString(value?: string | string[]) {
  if (!value) return '-';
  return Array.isArray(value) ? value[0] : value;
}

function formatAttachments(
  attachments?: formidable.File | formidable.File[]
): sendgrid.MailDataRequired['attachments'] | undefined {
  if (!attachments) return undefined;
  return (Array.isArray(attachments) ? attachments : [attachments]).map(
    (attachment) => {
      const content = fs.readFileSync(attachment.filepath).toString('base64');
      return {
        content,
        filename: attachment.originalFilename || 'attachment.pdf',
        type: attachment.mimetype || 'application/pdf',
        disposition: 'attachment',
      };
    }
  );
}

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
  const { files, fields } = await parseForm(req);

  const {
    clientCompanyName,
    clientName,
    clientAddress,
    clientEmail,
    clientPhone,
    landLordCompanyName,
    landLordName,
    landLordAddress,
    landLordEmail,
    landLordPhone,
    rent,
    size,
    rentFrom,
    rentUntil,
    rentIndexed,
  } = fields;

  const attachments = formatAttachments(files['attachment']);

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
          ${itemRow('Firma', toString(clientCompanyName))}
          ${itemRow('Ansprechpartner', toString(clientName))}
          ${itemRow('Anschrift der Firma', toString(clientAddress))}
          ${itemRow('Email', toString(clientEmail))}
          ${itemRow('Telefonnummer', toString(clientPhone))}
          ${headerRow('Kontaktinformationen des Vermieters')}
          ${itemRow('Firma', toString(landLordCompanyName))}
          ${itemRow('Ansprechpartner', toString(landLordName))}
          ${itemRow('Anschrift der Firma', toString(landLordAddress))}
          ${itemRow('Email', toString(landLordEmail))}
          ${itemRow('Telefonnummer', toString(landLordPhone))}
          ${headerRow('Vertragsdaten')}
          ${itemRow('Netto-Kaltmiete', toString(rent))}
          ${itemRow('m^2-Zahl', toString(size))}
          ${itemRow('Miete Seit', toString(rentFrom))}
          ${itemRow('Miete Bis', toString(rentUntil))}
          ${itemRow(
            'Ist Ihre Miete indexiert?',
            toString(rentIndexed) == 'true' ? 'Ja' : 'Nein'
          )}
        </tbody>
      </table>
    </body>
  </html>`;

  try {
    await sendgrid.send({
      to: 'info@grafenwert.de',
      from: 'Website Optimierungskampagne <website@grafenwert.de>',
      replyTo: toString(clientEmail),
      subject: `Anfrage zur Optimierung eines Mietvertrages von ${toString(
        clientCompanyName
      )}`,
      html,
      attachments,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Email could not be sent' });
  }

  return res.status(200).json({});
}
