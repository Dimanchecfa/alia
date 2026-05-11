export interface CatalogueItem {
  filename: string;
  title: string;
  description: string;
}

export interface CatalogueCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  partners: string;
  partnersIcon: "zap" | "cog" | "factory" | "wheat" | "sun";
  itemsCount: number;
  bgItems: "white" | "gray-50";
  items: CatalogueItem[];
}

export const productionItems = [
  {
    filename: "farine-mais.jpg",
    title: "Farine de maïs",
    description:
      "Farine fine issue de maïs local sélectionné, idéale pour la consommation domestique et la transformation.",
    bullets: [
      "Conditionnement sachet",
      "Sans additifs",
      "Distribution nationale",
    ],
  },
  {
    filename: "semoule.jpg",
    title: "Semoule de maïs",
    description:
      "Semoule fine pour préparations culinaires variées, conditionnée à différents formats selon vos besoins.",
    bullets: [
      "Texture homogène",
      "Pour collectivités & particuliers",
      "Conditionnements multiples",
    ],
  },
];

export const distributionCategories: CatalogueCategory[] = [
  {
    id: "electrique",
    number: "01",
    title: "Composants électriques",
    description:
      "Tableau électrique, distribution, commande, automatisation et éclairage industriel — pour usines, ateliers et centrales.",
    partners: "Schneider · ABB · Delixi",
    partnersIcon: "zap",
    itemsCount: 9,
    bgItems: "gray-50",
    items: [
      { filename: "disjoncteurs.jpg", title: "Disjoncteurs & relais thermiques", description: "Protection contre surcharges et courts-circuits." },
      { filename: "boutons-commutateurs.jpg", title: "Boutons poussoirs & commutateurs", description: "Commande manuelle pour tableaux et armoires." },
      { filename: "capteurs.jpg", title: "Capteurs & systèmes de détection", description: "Mesure et contrôle de paramètres process." },
      { filename: "variateurs.jpg", title: "Variateurs & démarreurs", description: "Pilotage moteur électronique optimisé." },
      { filename: "automates-api.jpg", title: "Automates (API) & HMI", description: "Contrôle-commande et interface opérateur." },
      { filename: "moteurs-pompes.jpg", title: "Moteurs électriques & pompes", description: "Force motrice industrielle fiable." },
      { filename: "groupes-electrogenes.jpg", title: "Groupes électrogènes & câbles", description: "Énergie de secours et distribution." },
      { filename: "stabilisateurs.jpg", title: "Stabilisateurs de tension", description: "Protection contre fluctuations électriques." },
      { filename: "lampes-led.jpg", title: "Lampes & projecteurs LED", description: "Éclairage industriel haute performance." },
    ],
  },
  {
    id: "mecanique",
    number: "02",
    title: "Composants mécaniques",
    description:
      "Pièces de transmission et roulements certifiés pour la maintenance et la fabrication d'équipements industriels.",
    partners: "SKF · Sorotec",
    partnersIcon: "cog",
    itemsCount: 4,
    bgItems: "white",
    items: [
      { filename: "roulements.jpg", title: "Roulements & bagues", description: "Transmission rotative basse friction." },
      { filename: "courroies.jpg", title: "Courroies", description: "Transmission de puissance flexible." },
      { filename: "poulies-paliers.jpg", title: "Poulies & paliers", description: "Support et guidage d'arbres en rotation." },
      { filename: "chaines-pignons.jpg", title: "Chaînes & pignons", description: "Transmission mécanique haute charge." },
    ],
  },
  {
    id: "agroalimentaire",
    number: "03",
    title: "Équipements agroalimentaires",
    description:
      "Lignes complètes pour transformation, conditionnement et tri — adaptées aux unités de production locales.",
    partners: "YC Diesel",
    partnersIcon: "factory",
    itemsCount: 4,
    bgItems: "gray-50",
    items: [
      { filename: "transformation-conditionnement.jpg", title: "Transformation & conditionnement", description: "Lignes complètes de production agroalimentaire." },
      { filename: "nettoyage-tri.jpg", title: "Nettoyage, tri & conservation", description: "Tri optique, criblage et stockage adapté." },
      { filename: "convoyage-manutention.jpg", title: "Convoyage & manutention", description: "Bandes, élévateurs et systèmes de transfert." },
      { filename: "production-sur-mesure.jpg", title: "Production sur mesure", description: "Solutions dédiées à votre process unique." },
    ],
  },
  {
    id: "minoterie",
    number: "04",
    title: "Composants de minoterie",
    description:
      "Pièces critiques pour la maintenance et le retrofit de minoteries — savoir-faire ALIA appliqué à votre installation.",
    partners: "Pièces minoterie",
    partnersIcon: "wheat",
    itemsCount: 4,
    bgItems: "white",
    items: [
      { filename: "meules-cylindres.jpg", title: "Meules & cylindres", description: "Pièces de mouture critique pour minoterie." },
      { filename: "godets-sangles-tamis.jpg", title: "Godets, sangles & tamis", description: "Manutention verticale et tamisage." },
      { filename: "plansichters-bluteries.jpg", title: "Plansichters & bluteries", description: "Tri par granulométrie pour farines." },
      { filename: "manches-filtrantes.jpg", title: "Manches filtrantes", description: "Filtration des poussières fines de production." },
    ],
  },
  {
    id: "solaire",
    number: "05",
    title: "Matériel solaire",
    description:
      "Solutions complètes on-grid et off-grid — résidentiel, tertiaire, industriel — avec accompagnement maintenance.",
    partners: "Victron · Felicity Solar",
    partnersIcon: "sun",
    itemsCount: 5,
    bgItems: "gray-50",
    items: [
      { filename: "panneaux.jpg", title: "Panneaux solaires", description: "Photovoltaïque mono et polycristallin." },
      { filename: "batteries.jpg", title: "Batteries", description: "Lithium, gel ou AGM — stockage longue durée." },
      { filename: "onduleurs.jpg", title: "Onduleurs hybrides", description: "Conversion DC/AC on-grid et off-grid." },
      { filename: "regulateurs.jpg", title: "Régulateurs de charge", description: "Optimisation MPPT et PWM batterie." },
      { filename: "outils-consommables.jpg", title: "Outils & consommables", description: "Maintenance et installation solaire." },
    ],
  },
];
