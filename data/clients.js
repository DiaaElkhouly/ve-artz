export const clients = [
  {
    id: "ms-reem",
    name: "Ms Reem",
    description: "العقل الباطن project client",
    slug: "ms-reem",
    image: [
      "/projects/ms-reem/1.mp4",
      "/projects/ms-reem/2.mp4",
      "/projects/ms-reem/3.mp4",
      "/projects/ms-reem/4.mp4",
    ],
    projectIds: ["ms-reem"],
    featuredProjects: true,
    featured: true,
    tagLeft: "0:32",
    title: "Brand Content",
  },
  {
    id: "oshot",
    name: "Oshot",
    description: "Oshot F V1 project client",
    slug: "oshot",
    image: ["/projects/oshot/1.mp4"],
    projectIds: ["oshot"],
    featuredProjects: true,
    featured: true,
    tagLeft: "0:52",
  },
  {
    id: "editly",
    name: "Editly",
    description: "Editly project client",
    slug: "editly",
    image: ["/projects/editly/1.mp4", "/projects/editly/2.mp4"],
    projectIds: ["editly"],
    featured: true,
    tagLeft: "0:40",
  },
  {
    id: "ve-artz",
    name: "VE Artz",
    description: "VE Arts project client",
    slug: "ve-artz",
    image: [
      "/projects/ve-artz/1.mp4",
      "/projects/ve-artz/2.mp4",
      "/projects/ve-artz/3.mp4",
    ],
    projectIds: ["ve-artz"],
    featured: true,
    tagLeft: "0:18",
    title: "My projects",
  },
  {
    id: "toothy",
    name: "Toothy",
    description: "Toothy project client",
    slug: "toothy",
    image: ["/projects/toothy/1.mp4"],
    featured: true,
    tagLeft: "0:43",
  },
  {
    id: "expro",
    name: "Expro",
    description: "Expro project client",
    slug: "expro",
    image: ["/projects/expro/1.mp4"],
    featured: true,
    tagLeft: "0:40",
  },
];

export const getClients = () => clients;

export const getGroupedClients = () => {
  // Group or process clients as needed, e.g., by category or featured
  return clients
    .filter((c) => c.featured)
    .sort((a, b) => a.id.localeCompare(b.id));
};

export const getClientById = (id) => clients.find((c) => c.id === id);

export const getClientBySlug = (slug) => clients.find((c) => c.slug === slug);
