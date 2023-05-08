import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import mime from 'mime-types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const path = req.query.path;
  if (!path) return res.status(404).json({ error: 'Image not found' });
  const fullPath = `./assets/images/${
    typeof path == 'string' ? path : path.join('/')
  }`;
  if (!fs.existsSync(fullPath))
    return res.status(404).json({ error: 'Image not found' });

  const mimeType = mime.lookup(fullPath);
  const image = fs.readFileSync(fullPath);
  typeof mimeType == 'string' && res.setHeader('Content-Type', mimeType);
  return res.send(image);
}
