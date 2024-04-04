/**
 * Default monster reactions.
 */
const DEFAULT_REACTIONS = [
  // Defender
  {
    id: 0,
    name: "J'ai ton dos",
    rarity: "common",
    description:
      "Si vous êtes adjacent à un allié qui est la cible d'une attaque qui ne vous inclut pas, vous pouvez rediriger l'attaque sur vous-même.",
    role: "defender",
  },
  {
    id: 1,
    name: "Je suis juste à côté de toi",
    rarity: "common",
    description:
      "Quand un allié à proximité est attaqué, vous pouvez vous déplacer jusqu'à la moitié de votre vitesse vers cet allié.",
    role: "defender",
  },
];

export default DEFAULT_REACTIONS;
