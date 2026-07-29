import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const baseURL = site ?? new URL('https://crissacm.dev');

  return new Response(
    [
      'User-agent: *',
      'Allow: /',
      '',
      `Sitemap: ${new URL('/sitemap.xml', baseURL).href}`,
      '',
    ].join('\n'),
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
};
