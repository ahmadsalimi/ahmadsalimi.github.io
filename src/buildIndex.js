var fs = require('fs');
var crypto = require('crypto');
const { type } = require('os');

var resumeData = JSON.parse(fs.readFileSync('public/resumeData.json', 'utf8')).main;

root_address = 'https://geomvi.github.io';

indices = [];

// about
indices.push({
  authors: 'admin',
  categories: null,
  content: resumeData.about,
  kind: 'term',
  lang: 'en',
  objecID: crypto.createHash('md5').update(resumeData.about).digest('hex'),
  permalink: `${root_address}/#about`,
  relpermalink: '/#about',
  section: 'about',
  summary: resumeData.about,
  tags: null,
  title: 'About',
  type: 'about',
});

// news
resumeData.news.forEach((news_item, index) => {
  indices.push({
    authors: 'admin',
    categories: null,
    content: news_item.title,
    kind: 'term',
    lang: 'en',
    objecID: crypto.createHash('md5').update(news_item.title).digest('hex'),
    permalink: `${root_address}/#news`,
    relpermalink: '/#news',
    section: 'news',
    summary: news_item.title,
    tags: null,
    title: news_item.title,
    type: 'news',
  });
});

// publications
resumeData.publications.forEach((publication) => {
  indices.push({
    authors: publication.authors.map(author => author.name).join(', '),
    categories: [],
    content: publication.abstract,
    kind: 'term',
    lang: 'en',
    objecID: crypto.createHash('md5').update(publication.title).digest('hex'),
    permalink: `${root_address}/#publications`,
    relpermalink: '/#publications',
    section: 'publications',
    summary: publication.abstract,
    tags: null,
    title: publication.title,
    type: 'publication',
  });
});

fs.writeFileSync('public/index.json', JSON.stringify(indices, null, 2));
