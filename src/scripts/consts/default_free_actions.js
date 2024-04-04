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
    name: "Faire trébucher",
    rarity: "common",
    description:
      "Requiert : Vous avez touché une cible avec une attaque d'opportunité. Effet : La cible tombe à terre.",
    role: "defender",
  },
];

export default DEFAULT_FREE_ACTIONS;
