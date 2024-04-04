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
    name: "Barrière",
    rarity: "rare",
    description:
      "Choisir une zone. Effet : La zone est infranchissable et offre une couverture totale.",
    role: "controller",
  },
  {
    id: 7,
    name: "Zone de Douleur",
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
      "Attaquer une zone. Réussite : La cible est repoussée de 20 pieds à partir du centre.",
    role: "controller",
  },
  {
    id: 10,
    name: "Viens Ici",
    rarity: "common",
    description:
      "Attaquer une cible [attack]. Réussite : La cible est attirée jusqu'à 10 pieds vers vous.",
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
      "Attaquer une cible [attack]. Réussite : La cible est repoussée jusqu'à 10 pieds.",
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
  // Skrimishers
  // Strikers
  // Supporters
];

export default DEFAULT_ACTIONS;
