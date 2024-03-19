/**
 * Default monster bonus actions.
 */
const DEFAULT_BONUS_ACTIONS = [
  {
    id: 0,
    role: "controller",
    name: "Zone d'Ombre (Concentration)",
    rarity: "rare",
    description:
      "Choisissez une zone. Effet: La région est remplie de ténèbres magiques",
  },
  {
    id: 1,
    role: "defender",
    name: "Lever de Bouclier",
    rarity: "uncommon",
    description:
      "Vous gagnez +2 AC et un avantage sur un jet de sauvegarde de votre choix jusqu'à la fin de votre prochain tour.",
  },
  {
    id: 2,
    role: "defender",
    name: "Immunité",
    rarity: "uncommon",
    description:
      "Vous êtes immunisé contre un type de dégâts ou une condition de votre choix jusqu'à la fin de votre prochain tour.",
  },
  {
    id: 2,
    role: "defender",
    name: "Détermination",
    rarity: "uncommon",
    description:
      "Nécessite : vous avez moins de 25% de points de vie ([hp * 0.25]). Effet : vous gagnez temporairement un nombre de points de vie égal à deux fois votre niveau de combat ([level * 2]).",
  },
];

export default DEFAULT_BONUS_ACTIONS;
