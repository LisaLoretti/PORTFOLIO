export type MissionGroup = {
  /** Thème du groupe de missions (facultatif). */
  title?: string;
  items: string[];
};

export type ParcoursLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ParcoursStep = {
  /** Identifiant utilisé pour les ancres de la page Parcours (/parcours#slug). */
  slug: string;
  title: string;
  kind: "Formation" | "Alternance" | "Stage" | "Job étudiant" | "International" | "Freelance";
  /** Entreprise ou établissement. */
  organisation?: string;
  place?: string;
  period?: string;
  /** Résumé court, affiché sur la frise de l'accueil. */
  detail?: string;
  /** Détail des missions ou du programme, affiché sur la page Parcours. */
  missions?: MissionGroup[];
  /** Logos ou visuels affichés sur la fiche (public/images/parcours). */
  logos?: ParcoursLogo[];
};

/** Parcours, du plus ancien au plus récent. */
export const parcours: ParcoursStep[] = [
  {
    slug: "etam",
    title: "Hôtesse de vente",
    kind: "Job étudiant",
    organisation: "Etam",
    logos: [{ src: "/images/parcours/etam.webp", alt: "Logo Etam", width: 243, height: 102 }],
    place: "Rambouillet et Maurepas",
    period: "2019 – 2022",
    detail: "Accueil et conseil client, encaissement, merchandising, gestion des stocks, ouverture et fermeture de la boutique.",
    missions: [
      {
        items: [
          "Ouverture et fermeture de la boutique.",
          "Accueil et conseil client.",
          "Encaissement.",
          "Mise en place du merchandising.",
          "Gestion des stocks et des marchandises.",
        ],
      },
    ],
  },
  {
    slug: "baccalaureat",
    title: "Baccalauréat ES — spécialité Mathématiques",
    kind: "Formation",
    period: "2020",
  },
  {
    slug: "partenaires-fc",
    title: "Assistante commerciale",
    kind: "Job étudiant",
    organisation: "Partenaires FC",
    logos: [{ src: "/images/parcours/partenaires-fc.webp", alt: "Logo Partenaires FC", width: 255, height: 255 }],
    place: "Saint-Arnoult-en-Yvelines",
    period: "Juillet – août 2020",
    detail: "Préparation des commandes et kits personnalisés, gestion des stocks, suivi des fournisseurs, accueil téléphonique et mise à jour du site internet.",
    missions: [
      {
        items: [
          "Préparation des commandes clients et création de kits personnalisés, incluant le flocage de vêtements.",
          "Gestion des stocks et réalisation des inventaires.",
          "Suivi des fournisseurs et relance des commandes en cours.",
          "Accueil téléphonique, renseignement des clients et orientation vers les interlocuteurs adaptés.",
          "Mise à jour du site internet : ajout et actualisation des produits et informations associées.",
        ],
      },
    ],
  },
  {
    slug: "bachelor-idrac",
    title: "Bachelor Marketing & Business Performance Management",
    kind: "Formation",
    organisation: "IDRAC Business School & SKALE",
    logos: [
      { src: "/images/parcours/idrac.webp", alt: "Logo IDRAC Business School", width: 360, height: 213 },
      { src: "/images/parcours/skale.webp", alt: "Logo SKALE Collaborative Business School", width: 360, height: 122 },
    ],
    period: "2020 – 2023",
    detail: "Communication, gestion d’entreprise, gestion budgétaire, analyse de la performance et prise de décision stratégique. Dont un an d’études en Irlande et en Espagne.",
    missions: [
      {
        title: "Programme",
        items: [
          "Communication et gestion d’entreprise.",
          "Gestion budgétaire, analyse de la performance et prise de décision stratégique.",
        ],
      },
      {
        title: "Expérience internationale",
        items: ["Un an d’études en Irlande et en Espagne."],
      },
    ],
  },
  {
    slug: "impact-sales-marketing",
    title: "Assistante gestion de projets",
    kind: "Stage",
    organisation: "Impact Sales & Marketing",
    logos: [{ src: "/images/parcours/impact-sales-marketing.webp", alt: "Logo Impact Sales & Marketing", width: 240, height: 239 }],
    place: "Levallois-Perret",
    period: "Avril – août 2022",
    detail: "Gestion des comptes Instagram et LinkedIn à destination des jeunes publics, partenariats avec des écoles et entretiens avec des candidats.",
    missions: [
      {
        title: "Gestion de projet & communication digitale",
        items: [
          "Gestion des comptes Instagram et LinkedIn à destination des jeunes publics : création de contenus et production de formats vidéo (interviews, Reels, contenus internes).",
          "Contribution à des projets internes, dont le développement d’une application de mise en relation entre candidats et opportunités professionnelles.",
        ],
      },
      {
        title: "Relations écoles & accompagnement des candidats",
        items: [
          "Développement de partenariats avec des universités et des écoles de commerce, et participation à des salons étudiants pour présenter l’entreprise et ses opportunités.",
          "Entretiens avec des candidats pour identifier leurs attentes et les orienter vers des missions, alternances et opportunités adaptées.",
        ],
      },
    ],
  },
  {
    slug: "ebp-informatique",
    title: "Assistante événementiel & communication interne",
    kind: "Alternance",
    organisation: "EBP Informatique",
    logos: [{ src: "/images/parcours/ebp.webp", alt: "Logo EBP", width: 360, height: 148 }],
    place: "Rambouillet",
    period: "2022 – 2023",
    detail: "Événements internes de 60 à 300 participants, animations mensuelles, plan de communication marque employeur et optimisation de l’intranet.",
    missions: [
      {
        title: "Événementiel & engagement des collaborateurs",
        items: [
          "Organisation d’événements internes de 60 à 300 participants : journées d’intégration, formations managers, séminaires et plénières.",
          "Coordination des prestataires : lieux, traiteur, animations et logistique.",
          "Conception et organisation d’animations mensuelles pour les collaborateurs : Halloween, Noël, Octobre rose.",
        ],
      },
      {
        title: "Communication interne & expérience collaborateur",
        items: [
          "Élaboration et mise en œuvre du plan de communication marque employeur : planning éditorial, reconnaissance des collaborateurs et initiatives RH.",
          "Création de supports pour améliorer l’expérience des collaborateurs et des managers : guide du manager, livret d’accueil, charte de télétravail, newsletters et procédures RH simplifiées (notes de frais…).",
          "Analyse et optimisation de l’intranet : mise à jour des contenus, architecture de l’information et design.",
        ],
      },
    ],
  },
  {
    slug: "australie",
    title: "Un an en Australie",
    kind: "International",
    logos: [{ src: "/images/parcours/australie.webp", alt: "Drapeau de l’Australie", width: 320, height: 160 }],
    period: "2023 – 2024",
    detail: "Fille au pair, serveuse et femme de chambre, et voyage pour découvrir le pays.",
    missions: [
      {
        items: ["Fille au pair.", "Serveuse et femme de chambre.", "Voyage pour découvrir le pays."],
      },
    ],
  },
  {
    slug: "master-excelia",
    title: "Master Management du Tourisme et de l’Événementiel",
    kind: "Formation",
    organisation: "Excelia — Paris",
    logos: [{ src: "/images/parcours/excelia.webp", alt: "Logo Excelia", width: 360, height: 77 }],
    period: "2024 – 2026",
    detail: "Projets de conception d’événements : benchmark, programmation, communication 360°, budget et recherche de financements, sponsoring, suivi des KPI et RSE.",
    missions: [
      {
        title: "Projets académiques",
        items: [
          "Conception de projets événementiels et benchmark.",
          "Programmation et communication 360°.",
          "Budget prévisionnel, recherche de financements et sponsoring.",
          "Suivi des KPI et démarche RSE.",
        ],
      },
    ],
  },
  {
    slug: "office-sejours-linguistiques",
    title: "Chargée d’événementiel & de communication",
    kind: "Alternance",
    organisation: "L’Office national de garantie des séjours linguistiques et éducatifs",
    logos: [{ src: "/images/parcours/office.webp", alt: "Logo de L’Office, la garantie des séjours linguistiques et éducatifs", width: 420, height: 117 }],
    place: "Paris",
    period: "2024 – 2026",
    detail: "Stratégie et plans de communication, contenus pour les réseaux sociaux, refonte du site web, et organisation d’événements de A à Z : assemblées générales, Village des séjours linguistiques, tournée « Meet Our Members », webinaires.",
    missions: [
      {
        title: "Communication, relations partenaires & visibilité",
        items: [
          "Élaboration des plans de communication et des parcours participants : campagnes d’e-mailing, invitations, programmes, signalétique, contenus écran et supports print et digitaux.",
          "Mise en œuvre de la stratégie de communication : campagnes, calendriers éditoriaux, création de contenus et de formats vidéo à destination du grand public et des professionnels.",
          "Gestion de projets éditoriaux nationaux : guides, newsletters, communiqués de presse et contenus web.",
          "Création et gestion de contenus pour LinkedIn, Instagram, Facebook, TikTok et YouTube.",
          "Représentation de L’Office sur des salons, forums et rencontres institutionnelles, dont des rendez-vous avec des ambassades.",
          "Accompagnement des membres et contribution à la communication interne.",
          "Pilotage de projets variés : refonte et lancement du nouveau site web (prévu en octobre 2026), campagne de rentrée et planning éditorial des réseaux sociaux jusqu’en décembre 2026.",
        ],
      },
      {
        title: "Événementiel & gestion de projet",
        items: [
          "Gestion d’événements de A à Z, de la conception et du budget à la logistique et à la coordination sur place.",
          "Organisation d’événements variés : assemblées générales, Village des séjours linguistiques en partenariat avec le salon du Figaro Étudiant, tournée nationale « Meet Our Members », webinaires et formations.",
          "Coordination de multiples parties prenantes avant et pendant les événements, anticipation des besoins et gestion des imprévus sur place.",
          "Conception de l’expérience des participants avant, pendant et après les événements.",
          "Bilans qualitatifs et quantitatifs, analyse des retours des participants et identification de pistes d’amélioration.",
        ],
      },
    ],
  },
  {
    slug: "freelance",
    title: "Gestion de projets événementiel & communication",
    kind: "Freelance",
    period: "Depuis septembre 2026",
  },
];

