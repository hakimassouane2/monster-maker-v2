/**
 * Default monster actions.
 */
const DEFAULT_ACTIONS = [
  // Controller
  {
    id: 0,
    name: "Attaque Aveuglante",
    rarity: "uncommon",
    description:
      "Attaquer une cible [attack] [attack]. **Réussite** : La cible est **aveuglée**. À la fin de chacun de ses tours, la cible peut faire un autre JDS **[dc-primary]**. Si elle réussit, le sort prend fin.",
    role: "controller",
  },
  {
    id: 1,
    name: "Commotion",
    rarity: "rare",
    description:
      "Attaquer une cible [attack]. Réussite : La cible est étourdie. À la fin de chacun de ses tours, la cible peut faire un autre JDS **[dc-primary]**. Si elle réussit, le sort prend fin.",
    role: "controller",
  },
  {
    id: 2,
    name: "Effrayer",
    rarity: "uncommon",
    description:
      "Attaquer une cible [attack]. Réussite : La cible a peur de vous. À la fin de chacun de ses tours, la cible peut faire un autre JDS **[dc-primary]**. Si elle réussit, le sort prend fin.",
    role: "controller",
  },
  {
    id: 3,
    name: "Renverser",
    rarity: "common",
    description:
      "Attaquer une cible [attack]. Réussite : La cible tombe à terre.",
    role: "controller",
  },
  {
    id: 4,
    name: "Attaque Empoisonnée",
    rarity: "common",
    description:
      "Attaquer une cible [attack]. Réussite : La cible est empoisonnée jusqu'à la fin de son prochain tour.",
    role: "controller",
  },
  {
    id: 5,
    name: "Sol Collant",
    rarity: "common",
    description:
      "Choisir une zone. Effet : La zone est un terrain difficile jusqu'à la fin de votre prochain tour.",
    role: "controller",
  },
  {
    id: 6,
    name: "Barrière (Concentration)",
    rarity: "rare",
    description:
      "Choisir une zone. Effet : La zone est infranchissable et offre un abri totale.",
    role: "controller",
  },
  {
    id: 7,
    name: "Zone de Douleur (Concentration)",
    rarity: "uncommon",
    description:
      "Choisir une zone. Effet : La zone est dangereuse et instable.",
    role: "controller",
  },
  {
    id: 8,
    name: "Bruit Distrayant",
    rarity: "common",
    description: "Choisir une zone. Effet : La zone est inconfortable.",
    role: "controller",
  },
  {
    id: 9,
    name: "Force Explosive",
    rarity: "uncommon",
    description:
      "Attaquer une zone. Réussite : La cible est repoussée de 20ft. à partir du centre.",
    role: "controller",
  },
  {
    id: 10,
    name: "Viens Ici",
    rarity: "common",
    description:
      "Attaquer une cible [attack]. Réussite : La cible est attirée jusqu'à 10ft. vers vous.",
    role: "controller",
  },
  {
    id: 11,
    name: "Attaque d'Épinglage",
    rarity: "uncommon",
    description:
      "Attaquer une cible [attack]. Réussite : La cible est entravée. À la fin de chacun de ses tours, la cible peut faire un autre JDS **[dc-primary]**. Si elle réussit, le sort prend fin.",
    role: "controller",
  },
  {
    id: 12,
    name: "Repousser",
    rarity: "common",
    description:
      "Attaquer une cible [attack]. Réussite : La cible est repoussée jusqu'à 10ft.",
    role: "controller",
  },
  {
    id: 13,
    name: "Réorganiser",
    rarity: "common",
    description:
      "Attaquer une cible [attack]. Réussite : Vous déplacez à la fois vous-même et la cible de 5 pieds dans n'importe quelle direction. Ce déplacement ne déclenche pas d'attaques d'opportunité.",
    role: "controller",
  },
  // Defenders
  {
    id: 14,
    name: "Frappe-moi (Concentration)",
    rarity: "common",
    description:
      "Attaquez une cible. Effet : La créature est marquée. Une créature marquée a un désavantage sur tout jet d'attaque qui ne vous inclut pas.",
    role: "defender",
  },
  {
    id: 15,
    name: "Reste là",
    rarity: "common",
    description: "Attaquez une cible. Touche : La cible est agrippée par vous.",
    role: "defender",
  },
  // Lurkers
  {
    id: 16,
    name: "L'appel de la Tombe",
    rarity: "uncommon",
    description:
      "Attaquez une cible. Réussite : la cible perd un dé de vie non dépensé (en cours).",
    role: "lurker",
  },
  {
    id: 19,
    name: "Reste à terre",
    rarity: "common",
    description:
      "Attaquez une cible. Nécessite : la cible est à terre. Réussite : la cible est entravé jusqu'à la fin de votre prochain tour.",
    role: "lurker",
  },
  {
    id: 19,
    name: "Saut d'effroi",
    rarity: "common",
    description:
      "Attaquez une cible. Nécessite : la cible est aveuglé ou éffrayé. Réussite : la cible est étourdie jusqu'à la fin de votre prochain tour.",
    role: "lurker",
  },
  {
    id: 17,
    name: "Point de Pression",
    rarity: "uncommon",
    description:
      "Attaquez une cible. Conditions : la cible est entravé. Réussite : la cible est paralysée jusqu'à la fin de votre prochain tour.",
    role: "lurker",
  },
  {
    id: 18,
    name: "Disparition (Concentration)",
    rarity: "rare",
    description:
      "Vous devenez invisible. Faire une attaque ou lancer un sort met fin à cet effet.",
    role: "lurker",
  },
  {
    id: 18,
    name: "Camouflage",
    rarity: "uncommon",
    description:
      "Vous vous fondez dans votre environnement et devenez complètement indiscernable de celui-ci. Se déplacer, porter une attaque ou lancer un sort met fin à cet effet.",
    role: "lurker",
  },
  {
    id: 18,
    name: "Bombe Éclair",
    rarity: "uncommon",
    description:
      "Attaquez une zone. Réussite : la cible est aveuglée jusqu'à la fin de son prochain tour.",
    role: "lurker",
  },
  // Skrimishers
  // Strikers
  {
    id: 1,
    name: "Attaque Brutale",
    rarity: "rare",
    description:
      "Attaque une cible. Touché : La cible subit 200% de dégâts ([damage * 2]).",
    role: "striker",
  },
  {
    id: 2,
    name: "Déchirement",
    rarity: "uncommon",
    description:
      "Attaque une cible. Touché : La cible subit 125% ([damage * 1.25]) de dégâts continus .",
    role: "striker",
  },
  {
    id: 3,
    name: "Malédiction (Concentration)",
    rarity: "uncommon",
    description: "Attaque une cible. Touché : La cible subit 125% de dégâts.",
    role: "striker",
  },
  {
    id: 4,
    name: "Saignement",
    rarity: "uncommon",
    description:
      "Attaque une cible. Touché : La cible perd un dé de vie (continu).",
    role: "striker",
  },
  {
    id: 5,
    name: "Explosion",
    rarity: "uncommon",
    description:
      "Attaque une zone. Touché : La cible subit 100% ([damage]) de dégâts. Raté : La cible subit 50% ([damage / 2]) de dégâts.",
    role: "striker",
  },
  {
    id: 5,
    name: "Oblivion",
    rarity: "rare",
    description:
      "Attaque une zone. Touché : La cible subit 175% ([damage * 1.75]) de dégâts.",
    role: "striker",
  },
  {
    id: 6,
    name: "Magie du Vide",
    rarity: "uncommon",
    description:
      "Attaque une zone. Touché : La cible perd son plus bas niveau de sort non utilisé.",
    role: "striker",
  },
  {
    id: 7,
    name: "Destruction (Concentration)",
    rarity: "uncommon",
    description:
      "Attaque une zone. Touché : La cible subit 100% ([damage]) de dégâts.",
    role: "striker",
  },
  {
    id: 8,
    name: "Drain de Vie",
    rarity: "rare",
    description:
      "Attaque une zone. Touché : La cible gagne un niveau d'épuisement.",
    role: "striker",
  },
  // Supporters
];

export default DEFAULT_ACTIONS;
