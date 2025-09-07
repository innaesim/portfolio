import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream } from 'fs'

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 }
]

const stream = new SitemapStream({ hostname: 'https://portfolio.innaesim.com' })

;(async () => {
  try {
    // Write all links to the stream
    for (const link of links) {
      stream.write(link)
    }
    // Close the stream so it can flush
    stream.end()

    // Wait for the XML buffer and write it to disk
    const data = await streamToPromise(stream)
    createWriteStream('./public/sitemap.xml').write(data.toString())
    createWriteStream("./dist/sitemap.xml").write(data.toString());
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()
