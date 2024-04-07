/**
 * Default monster bonus actions.
 */
const DEFAULT_BONUS_ACTIONS = [
  // Controller
  {
    id: 0,
    name: "Zone de Ténèbres (Concentration)",
    rarity: "rare",
    description:
      "Choisir une zone. Effet : La zone est remplie de ténèbres magiques.",
    role: "controller",
  },
  // Defender
  {
    id: 1,
    name: "Lever de bouclier",
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
    name: "Derrière moi (Concentration)",
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
    name: "Espace abrupt (Concentration)",
    rarity: "common",
    description:
      "L'espace à votre porté est un terrain difficile pour les ennemis.",
    role: "defender",
  },
  {
    id: 9,
    name: "Zone dangereuse (Concentration)",
    rarity: "uncommon",
    description:
      "Tout ennemi qui commence son tour à l'intérieur ou qui se déplace dans votre portée subit des dégâts égaux à votre niveau de combat (une fois par tour).",
    role: "defender",
  },
  // Skirmisher
  {
    id: 10,
    name: "Toujours De Service (Concentration)",
    rarity: "uncommon",
    description:
      "Vous ne pouvez pas être surpris et les créatures cachées ne bénéficient pas d'un avantage aux jets d'attaque contre vous.",
    role: "skirmisher",
  },
  {
    id: 11,
    name: "Vue Au-Delà de la Vue",
    rarity: "uncommon",
    description:
      "Vous obtenez une vision aveugle de 60ft. jusqu'à la fin de votre prochain tour.",
    role: "skirmisher",
  },
  {
    id: 12,
    name: "Vibrations Subtiles",
    rarity: "uncommon",
    description: "Vous obtenez une sensibilité aux vibrations de 30ft.",
    role: "skirmisher",
  },
  {
    id: 13,
    name: "Délocalisation (Concentration)",
    rarity: "rare",
    description:
      "Vous êtes banni. Lorsque l'effet prend fin, vous réapparaissez dans un espace inoccupé dans un rayon de 30ft. ",
    role: "skirmisher",
  },
  {
    id: 14,
    name: "Invisible",
    rarity: "rare",
    description:
      "Jusqu'à la fin de votre prochain tour, vous êtes invisible. Cet effet prend fin si vous attaquez ou lancez un sort.",
    role: "skirmisher",
  },
  {
    id: 15,
    name: "Fonceur",
    rarity: "uncommon",
    description: "Vous effectuez l'action 'Foncer'.",
    role: "skirmisher",
  },
  {
    id: 16,
    name: "Liberté",
    rarity: "common",
    description:
      "Vous ne subissez aucune pénalité de déplacement lorsque vous vous faufilez dans un espace étroit.",
    role: "skirmisher",
  },
  {
    id: 17,
    name: "Grimpette d'Araignée (Concentration)",
    rarity: "uncommon",
    description:
      "Vous pouvez grimper sur des surfaces difficiles, y compris à l'envers sur les plafonds, sans avoir besoin de faire de jet de compétence.",
    role: "skirmisher",
  },
  {
    id: 18,
    name: "Serpent Liquide (Concentration)",
    rarity: "common",
    description:
      "Vous pouvez rester debout sur n'importe quelle surface liquide comme s'il s'agissait d'un sol solide inoffensif.",
    role: "skirmisher",
  },
  {
    id: 19,
    name: "Volant (Concentration)",
    rarity: "uncommon",
    description:
      "Vous obtenez une vitesse de vol égale à la moitié de votre vitesse de déplacement standard.",
    role: "skirmisher",
  },
  // Lurker
  {
    id: 20,
    name: "Plaies Perforantes",
    rarity: "uncommon",
    description:
      "Choisissez un type de dégât. Jusqu'à la fin de votre prochain tour, les attaques que vous portez avec ce type ignore la résistance a ce type, et traite l'immunité comme une résistance.",
    role: "lurker",
  },
  {
    id: 21,
    name: "Guerilla",
    rarity: "common",
    description:
      "Jusqu'à la fin de votre prochain tour, vous ne revelez pas votre position ou vous même lorsque vous attaquez ou lancez un sort.",
    role: "lurker",
  },
  {
    id: 22,
    name: "Écran de fumée",
    rarity: "uncommon",
    description:
      "Choisissez une zone. Effet : La zone est fortement obscurcis jusqu'à la fin de votre prochain tour.",
    role: "lurker",
  },
  // Striker
  {
    id: 23,
    name: "Aggression",
    rarity: "uncommon",
    description:
      "Jusq'à la fin de votre prochain tour votre zone de critique augmente de +1. De plus vous effectuez votre prochain jet d'attaque avec avantage.",
    role: "striker",
  },
  {
    id: 24,
    name: "Visée précise",
    rarity: "common",
    description:
      "Nécessite : Vous ne pouvez pas vous déplacer pendant ce tour. Effet : Vous gagnez l'avantage sur votre prochain jet d'attaque.",
    role: "striker",
  },
  {
    id: 25,
    name: "Extra Chanceux (Concentration)",
    rarity: "uncommon",
    description:
      "Si le résultat de votre jet d'attaque est de 1 ou 2, vous pouvez relancer le dé. Vous devez utiliser le nouveau résultat.",
    role: "striker",
  },
  {
    id: 26,
    name: "Recharge rapide",
    rarity: "uncommon",
    description:
      "Choissisez une capacité qui nécessite un temps de recharge et a) réduisez le temps de recharge de 1 b) faites un jet de recharge c) regagnez une charge.",
    role: "striker",
  },
  // Supporter
  {
    id: 27,
    name: "Enchanter (Concentration)",
    rarity: "uncommon",
    description:
      "Choissisez des alliés parmis une zone. Effet : Les alliés choisis peuvent changer leur type de dégats vers celui que vous décider.",
    role: "supporter",
  },
  {
    id: 28,
    name: "Hâte (Concentration)",
    rarity: "uncommon",
    description:
      "Choissisez un allié. Effet : L'allié choisi gagne 10ft. de mouvement",
    role: "supporter",
  },
  {
    id: 29,
    name: "Rechargeur",
    rarity: "rare",
    description:
      "Choissisez un allié. Effet : L'allié choisi recharge immédiatement l'une de ses capacités peu communes épuisées.",
    role: "supporter",
  },
];

export default DEFAULT_BONUS_ACTIONS;
