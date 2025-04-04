// pages/api/sitemap.xml.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/xml');
  res.write(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://zuterion-corp.onrender.com/</loc></url>
  <url><loc>https://zuterion-corp.onrender.com/about</loc></url>
  <url><loc>https://zuterion-corp.onrender.com/services</loc></url>
  <url><loc>https://zuterion-corp.onrender.com/contact</loc></url>
</urlset>`);
  res.end();
}
