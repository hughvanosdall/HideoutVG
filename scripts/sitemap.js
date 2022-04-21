const { Readable } = require('stream');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createClient } = require('contentful');
// const globby = require('globby');
const path = require('path');
const fs = require('fs');

// Initialize Contentful SDK
const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

const getAllPosts = async () =>
  client.getEntries({ content_type: 'Article' }).then((posts) => posts.items)

;(async function () {
    const globby = await import('globby')
  /*
    baseStaticPages string[] ['about.js', 'contact.js']

    Include all JS files in pages/ root directory.
    Exlcude index.js, underscored files, dynamic page templates, API folder.
  */
  const baseStaticPages = await globby(
    ['**.js', '!_*.js', '!404.js', '!index.js', '!articles/[slug].js', '!api'],
    { cwd: path.resolve(__dirname, '../pages') },
  )

  // staticPages string[] ['about', 'contact']
  const staticPages = baseStaticPages.map((page) => page.split('.')[0])

  const posts = await getAllPosts()
  const postSlugs = posts.map((post) => `articles/${article.fields.slug}`)

  const sitemapStream = new SitemapStream({
    hostname: process.env.URL,
  })

  const links = [...postSlugs, ...staticPages, '/']
  const linksStream = Readable.from(links).pipe(sitemapStream)

  const xml = await streamToPromise(linksStream)

  const publicFolderPath = path.resolve(__dirname, '../public/sitemap.xml')

  fs.writeFileSync(publicFolderPath, xml)

  console.log('Generated and saved sitemap: /public/sitemap.xml')
})()

  