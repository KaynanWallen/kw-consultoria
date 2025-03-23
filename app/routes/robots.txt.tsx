export const loader = async () => {
  return new Response(
    `User-agent: *
     Allow: /
     Sitemap: https://kwconsultoria.tech/sitemap.xml`,
    { headers: { "Content-Type": "text/plain" } }
  );
};
