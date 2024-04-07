/**
 * Default monster reactions.
 */
const DEFAULT_REACTIONS = [
  // Defender
  {
    id: 0,
    name: "Je te couvre",
    rarity: "common",
    description:
      "Si vous êtes adjacent à un allié qui est la cible d'une attaque qui ne vous inclut pas, vous pouvez rediriger l'attaque sur vous-même.",
    role: "defender",
  },
  {
    id: 1,
    name: "Je suis à tes côtés",
    rarity: "common",
    description:
      "Quand un allié à proximité est attaqué, vous pouvez vous déplacer jusqu'à la moitié de votre vitesse vers cet allié.",
    role: "defender",
  },
  // Striker
  {
    id: 2,
    name: "Essaye Encore",
    rarity: "common",
    description:
      "Nécessite : Vous ratez une attaque de 1, 2 ou 3. Effet : Relancer le dé d'attaque, vous devez utiliser le nouveau résultat.",
    role: "striker",
  },
  // Supporter
  {
    id: 2,
    name: "Pas comme ça",
    rarity: "uncommon",
    description:
      "Quand un allié rate une attaque, il peut relancer le jet d'attaque avec avantage.",
    role: "supporter",
  },
];

export default DEFAULT_REACTIONS;
