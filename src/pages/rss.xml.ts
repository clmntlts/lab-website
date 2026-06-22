import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../lib/config';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const news = await getCollection('news');
  const sorted = news.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site!,
    items: sorted.map(item => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.summary,
      link: `/news/${item.slug}/`,
    })),
    customData: `<language>en-GB</language>`,
  });
}
