// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await sendgrid.send({
      to: 'contact@grafenwert.de',
      from: 'moritz.loechner@gmail.com',
      replyTo: req.body.email,
      subject: `Anliegen von ${req.body.name} über Grafenwert Kontaktformular`,
      html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
        <head>
          <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        </head>
        <body>
          <p>Message:</p>
          <p>${req.body.message}</p>
          <p>Reply to: ${req.body.email}</p>
        </body>
      </html>`,
    });
  } catch (error) {
    return res.status(500).json({ error: 'Email could not be sent' });
  }

  return res.status(200).json({});
}
