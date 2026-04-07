export const clients = [
  {
    id: "ve-artz",
    name: "VE Artz",
    description: "VE Arts project client",
    slug: "ve-artz",
    image: ["/projects/Ve/1.m4v", "/projects/Ve/2.m4v", "/projects/Ve/3.m4v"],
    projectIds: ["ve-artz"],
    featured: true,
    title: "My projects",
  },
  {
    id: "ms-reem",
    name: "Ms Reem",
    description: "العقل الباطن project client",
    slug: "ms-reem",
    image: [
      "/projects/Reem/1.m4v",
      "/projects/Reem/2.m4v",
      "/projects/Reem/3.m4v",
      "/projects/Reem/4.m4v",
      "/projects/Reem/5.m4v",
    ],
    projectIds: ["ms-reem"],
    featuredProjects: true,
    featured: true,
  },
  // {
  //   id: "oshot",
  //   name: "Oshot",
  //   description: "Oshot F V1 project client",
  //   slug: "oshot",
  //   image: ["/projects/oshot/1.mp4"],
  //   projectIds: ["oshot"],
  //   featuredProjects: true,
  //   featured: true,
  //   tagLeft: "0:52",
  // },
  {
    id: "editly",
    name: "Editly",
    description: "Editly project client",
    slug: "editly",
    image: ["/projects/Editly/1.m4v", "/projects/Editly/2.m4v"],
    projectIds: ["editly"],
    featured: true,
  },
  {
    id: "toothy",
    name: "Toothy",
    description: "Toothy project client",
    slug: "toothy",
    image: [
      "/projects/Toothy/1.m4v",
      "/projects/Toothy/2.m4v",
      "/projects/Toothy/3.m4v",
      "/projects/Toothy/4.m4v",
    ],
    featured: true,
  },
  {
    id: "expro",
    name: "Expro",
    description: "Expro project client",
    slug: "expro",
    image: ["/projects/Expro/1.m4v"],
    featured: true,
  },
  {
    id: "dr-zinab",
    name: "Dr Zinab",
    slug: "Dr-Zinab",
    image: ["/projects/Dr.Zinab/1.m4v"],
    featured: true,
  },
];

export const getClients = () => clients;

export const getGroupedClients = () => {
  // Group or process clients as needed, e.g., by category or featured
  return clients
    .filter((c) => c.featured)
};

export const getClientById = (id) => clients.find((c) => c.id === id);

export const getClientBySlug = (slug) => clients.find((c) => c.slug === slug);
