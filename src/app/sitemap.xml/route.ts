// src/app/sitemap.xml/route.ts
import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

export async function GET() {
 const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/promo', changefreq: 'daily', priority: 0.8 },
];

  const stream = new SitemapStream({ hostname: 'https://www.kebabknights.com.au' })
  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(data => data.toString())

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
