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
  // Skirmisher
  {
    id: 2,
    name: "Attention",
    rarity: "uncommon",
    description:
      "Quand une créature que vous pouvez voir est sur le point d'être touchée par une attaque, vous accordez à cet allié un bonus de +5 à la CA contre l'attaque. Vous devez être capable de voir la source de l'attaque, et la créature doit pouvoir vous entendre.",
    role: "skirmisher",
  },
  {
    id: 3,
    name: "Fuite Rusée",
    rarity: "uncommon",
    description:
      "Lorsqu'une créature se déplace à côté de vous ou vous frappe avec une attaque, vous vous éloignez jusqu'à la moitié de votre vitesse. Ce mouvement ne provoque pas d'opportunités d'attaque.",
    role: "skirmisher",
  },
  {
    id: 4,
    name: "Esquive",
    rarity: "uncommon",
    description:
      "Lorsque vous êtes touché par une attaque, vous divisez par deux les dégâts que vous subiriez.",
    role: "skirmisher",
  },
  {
    id: 5,
    name: "Artiste de l'Évasion",
    rarity: "common",
    description:
      "Lorsque vous êtes agrippé ou placé dans des entraves non magiques, vous pouvez immédiatement vous échapper ou mettre fin à l'effet.",
    role: "skirmisher",
  },
  // Striker
  {
    id: 6,
    name: "Essaye Encore",
    rarity: "common",
    description:
      "Nécessite : Vous ratez une attaque de 1, 2 ou 3. Effet : Relancer le dé d'attaque, vous devez utiliser le nouveau résultat.",
    role: "striker",
  },
  // Supporter
  {
    id: 7,
    name: "Pas comme ça",
    rarity: "uncommon",
    description:
      "Quand un allié rate une attaque, il peut relancer le jet d'attaque avec avantage.",
    role: "supporter",
  },
  {
    id: 8,
    name: "Pas sur ma guarde",
    rarity: "rare",
    description:
      "Quand un allié serait réduit à 0 points de vie, vous le réduisez à 1 point de vie à la place.",
    role: "supporter",
  },
];

export default DEFAULT_REACTIONS;
