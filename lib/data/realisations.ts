export type RealisationCategory = "solaire" | "agro" | "maintenance";

export interface Realisation {
  id: string;
  category: RealisationCategory;
  categoryLabel: string;
  title: string;
  location: string;
  metric: { value: string; unit: string } | null;
  year: string;
  image: string;
  featured: boolean;
}

// Note : les chemins images sont remappés sur /images/realisations/...
export const realisations: Realisation[] = [
  {
    id: "grand-bassam-45kwc",
    category: "solaire",
    categoryLabel: "Énergie solaire",
    title: "Centrale solaire industrielle",
    location: "Grand Bassam, Côte d'Ivoire",
    metric: { value: "45", unit: "KWc" },
    year: "2023",
    image: "/images/realisations/grand-bassam.jpg",
    featured: true,
  },
  {
    id: "yamoussoukro-25kwc",
    category: "solaire",
    categoryLabel: "Énergie solaire",
    title: "Système solaire résidentiel",
    location: "Yamoussoukro, Côte d'Ivoire",
    metric: { value: "24,78", unit: "KWc" },
    year: "2022",
    image: "/images/realisations/yamoussoukro.jpg",
    featured: false,
  },
  {
    id: "abidjan-16kwc",
    category: "solaire",
    categoryLabel: "Énergie solaire",
    title: "Système solaire commercial",
    location: "Abidjan, Côte d'Ivoire",
    metric: { value: "16", unit: "KWc" },
    year: "2022",
    image: "/images/realisations/abidjan.jpg",
    featured: false,
  },
  {
    id: "2ie-abidjan-9kwc",
    category: "solaire",
    categoryLabel: "Énergie solaire",
    title: "Université 2iE — système académique",
    location: "Abidjan, Côte d'Ivoire",
    metric: { value: "9,2", unit: "KWc" },
    year: "2021",
    image: "/images/realisations/2ie-abidjan.jpg",
    featured: false,
  },
  {
    id: "batiment-alia",
    category: "solaire",
    categoryLabel: "Énergie solaire",
    title: "Autoconsommation siège ALIA",
    location: "Kossodo, Ouagadougou",
    metric: null,
    year: "2021",
    image: "/images/realisations/batiment-alia.png",
    featured: false,
  },
  {
    id: "centrale-solaire",
    category: "solaire",
    categoryLabel: "Énergie solaire",
    title: "Centrale solaire entreprise",
    location: "Burkina Faso",
    metric: null,
    year: "2020",
    image: "/images/realisations/centrale-solaire.png",
    featured: false,
  },
  {
    id: "residentiel-particulier",
    category: "solaire",
    categoryLabel: "Énergie solaire",
    title: "Système résidentiel autonome",
    location: "Particulier, Burkina Faso",
    metric: null,
    year: "2020",
    image: "/images/realisations/residentiel.jpg",
    featured: false,
  },
  {
    id: "minoterie-farine-mais",
    category: "agro",
    categoryLabel: "Agroalimentaire",
    title: "Minoterie — Farine de maïs ALIA",
    location: "Kossodo, Ouagadougou",
    metric: null,
    year: "2018",
    image: "/images/realisations/farine-mais.jpg",
    featured: false,
  },
  {
    id: "maintenance-techniciens",
    category: "maintenance",
    categoryLabel: "Maintenance industrielle",
    title: "Intervention sur unité de transformation",
    location: "Burkina Faso",
    metric: null,
    year: "2023",
    image: "/images/realisations/maintenance-techniciens.jpg",
    featured: false,
  },
];
