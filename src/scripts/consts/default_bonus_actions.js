/**
 * Default monster bonus actions.
 */
const DEFAULT_BONUS_ACTIONS = [
  // Controller
  {
    id: 0,
    name: "Zone de Ténèbres",
    rarity: "rare",
    description:
      "Choisir une zone. Effet : La zone est remplie de ténèbres magiques.",
    role: "controller",
  },
  // Defender
  {
    id: 1,
    name: "Élever le bouclier",
    rarity: "uncommon",
    description:
      "Vous gagnez +2 CA et l'avantage sur un jet de sauvegarde de votre choix jusqu'à la fin de votre prochain tour.",
    role: "defender",
  },
  {
    id: 2,
    name: "Immunité",
    rarity: "uncommon",
    description:
      "Vous êtes immunisé contre un type de dégât ou une condition de votre choix jusqu'à la fin de votre prochain tour.",
    role: "defender",
  },
  {
    id: 3,
    name: "Détermination",
    rarity: "uncommon",
    description:
      "Requiert : vous avez moins de 25% de points de vie. Effet : Vous gagnez des points de vie temporaires égaux à deux fois votre niveau de combat ([level * 2]).",
    role: "defender",
  },
  {
    id: 4,
    name: "Résistant aux chocs",
    rarity: "common",
    description:
      "Requiert : Vous avez au moins 25% de points de vie. Effet : Jusqu'à la fin de votre prochain tour, tout coup critique porté contre vous compte comme un coup normal.",
    role: "defender",
  },
  {
    id: 5,
    name: "Derrière moi",
    rarity: "uncommon",
    description:
      "Jusqu'à la fin de l'effet, les alliés adjacents sont considérés comme ayant trois quarts de couverture.",
    role: "defender",
  },
  {
    id: 6,
    name: "Mur de boucliers",
    rarity: "common",
    description:
      "Vous accordez à une cible adjacente une couverture totale jusqu'au début de votre prochain tour. Vous devez rester adjacent à la cible pour maintenir cette couverture.",
    role: "defender",
  },
  {
    id: 7,
    name: "Vigilant",
    rarity: "common",
    description:
      "Jusqu'à la fin de votre prochain tour, les créatures provoquent toujours des attaques d'opportunité de votre part (même si elles se désengagent avant de quitter votre portée).",
    role: "defender",
  },
  {
    id: 8,
    name: "Zone dangereuse",
    rarity: "uncommon",
    description:
      "Tout ennemi qui commence son tour à l'intérieur ou qui se déplace dans votre portée subit des dégâts égaux à votre niveau de combat (une fois par tour).",
    role: "defender",
  },
];

export default DEFAULT_BONUS_ACTIONS;
