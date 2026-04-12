export default function sitemap() {
  return [
    {
      url: "https://ve-artz-omar-salah.vercel.app/en",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://ve-artz-omar-salah.vercel.app/ar",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://ve-artz-omar-salah.vercel.app/en/clients",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ve-artz-omar-salah.vercel.app/ar/clients",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
