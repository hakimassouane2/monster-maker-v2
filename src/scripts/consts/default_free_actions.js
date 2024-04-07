/**
 * Default monster free actions.
 */
const DEFAULT_FREE_ACTIONS = [
  // Defender
  {
    id: 0,
    name: "Implacable",
    rarity: "rare",
    description:
      "Lorsque vous êtes réduit à 0 points de vie, vous êtes plutôt réduit à 1 point de vie.",
    role: "defender",
  },
  {
    id: 1,
    name: "Croche-patte",
    rarity: "common",
    description:
      "Requiert : Vous touchez une cible avec une attaque d'opportunité. Effet : La cible tombe à terre.",
    role: "defender",
  },
  // Lurker
  {
    id: 2,
    name: "Touché de la mort",
    rarity: "uncommon",
    description:
      "Requiert : Vous infligez un coup critique avec une attaque. Effet : La créature obtient immédiatement un échec au JDS contre la mort.",
    role: "lurker",
  },
  {
    id: 3,
    name: "Marqué par la mort (Concentration)",
    rarity: "uncommon",
    description:
      "Requiert : Vous toucher une créature se situant a moins de 30ft. de vous et qui a 50% de pv ou plus avec une attaque. Effet : La créature est marquée par la mort. Si la créature est réduite à 0 pv en étant marqué, elle meurt instantanément.",
    role: "lurker",
  },
  {
    id: 4,
    name: "Choc systèmique",
    rarity: "uncommon",
    description:
      "Requiert : Vous réduisez une cible à 0pv. Effet : La créature gagne un niveau d'épuisement.",
    role: "lurker",
  },
  {
    id: 5,
    name: "Reste Tranquille",
    rarity: "common",
    description:
      "Nécessite : vous avez touché une cible qui s'est déplacée sur une distance de 10ft. ou moins lors de son dernier tour. Effet : La cible tombe à terre.",
    role: "lurker",
  },
  {
    id: 6,
    name: "Attaque Sournoise",
    rarity: "common",
    description:
      "Nécessite : vous avez touché une cible avec un jet d'attaque ayant un avantage. Effet : vous infligez des dégâts supplémentaires égaux à votre niveau de combat ([level]).",
    role: "lurker",
  },
  // Striker
  {
    id: 7,
    name: "Attaquant fiable",
    rarity: "uncommon",
    description:
      "Quand vous faites un jet d'attaquem vous pouvez traiter le résultat comme un 11. Vous pouvez décider de le faire après avoir vu le résultat du jet.",
    role: "striker",
  },
];

export default DEFAULT_FREE_ACTIONS;
