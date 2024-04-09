/**
 * Default monster traits.
 */
const DEFAULT_TRAITS = [
  {
    id: 0,
    role: "controller",
    name: "Recul",
    description:
      "Réduisez de moitié les dégâts de votre attaque pour faire reculer la cible jusqu'à 15 ft. (3 cases)",
  },
  {
    id: 1,
    role: "controller",
    name: "Distraction",
    description:
      "Réduisez de moitié les dégâts de votre attaque pour accorder l'avantage au prochain jet d'attaque effectué contre la cible.",
  },
  {
    id: 2,
    role: "controller",
    name: "Se mettre en position",
    description:
      "Réduisez de moitié les dégâts de votre attaque pour permettre à un allié de dépenser sa réaction et de se déplacer de la moitié de sa vitesse (sans provoquer d'attaque d'opportunité de la part de la cible initiale).",
  },
  {
    id: 3,
    role: "controller",
    name: "Pas de côté",
    description:
      "Réduisez de moitié les dégâts de votre attaque pour vous déplacer, vous et votre cible, de 5 ft. (1 case) dans n'importe quelle direction.",
  },
  {
    id: 4,
    role: "controller",
    name: "Frappe paralysante",
    description:
      "Réduisez de moitié les dégâts de votre attaque pour réduire la vitesse de votre cible à 0ft jusqu'au début de votre prochain tour",
  },
  {
    id: 5,
    role: "defender",
    name: "Défense lourde",
    description: "Votre défense est impénétrable. Gagnez +2 de défense.",
  },
  {
    id: 6,
    role: "defender",
    name: "J'assure vos arrières",
    description:
      "Lorsque vous êtes à côté d'un allié ou d'une cible attaquante, vous pouvez dépenser votre réaction pour rediriger l'attaque sur vous",
  },
  {
    id: 7,
    role: "defender",
    name: "Pas un pas de plus",
    description:
      "Les cibles provoquent toujours des attaques d'opportunité, même si elles entreprennent l'action 'Se désengager' avant de quitter votre zone d'allonge. De plus, lorsque vous touchez avec une attaque d'opportunité, la vitesse de la cible devient 0 pour le reste du tour",
  },
  {
    id: 8,
    role: "defender",
    name: "Derrière moi",
    description:
      "Les alliés situés à moins de 5 ft de vous comptent comme étant à couvert trois-quarts",
  },
  {
    id: 9,
    role: "defender",
    name: "Ne détournez pas le regard",
    description:
      "Lorsque vous attaquez une cible, vous pouvez la marquer. Une cible marquée a -2 à tous les jets d'attaque qui ne vous incluent pas. Vous ne pouvez avoir qu'une seule marque active à la fois, et les marques ne s'additionnent pas",
  },
  {
    id: 10,
    role: "lurker",
    name: "Se cacher à la vue de tous",
    description:
      "Vous pouvez tenter de vous cacher lorsque vous êtes à l'abris, même léger",
  },
  {
    id: 11,
    role: "lurker",
    name: "Coup en embuscade",
    description:
      "Si vous avez l'avantage sur votre attaque, ajoutez votre niveau en dégâts supplémentaires",
  },
  {
    id: 12,
    role: "lurker",
    name: "Fuite agile",
    description:
      "Vous pouvez foncer, vous désengager ou vous cacher en tant qu'action bonus",
  },
  {
    id: 13,
    role: "lurker",
    name: "Camouflage",
    description:
      "Lorsque vous êtes caché, les ennemis ne peuvent pas vous repérer avec leur perception passive et ils ont un désavantage lorsqu'ils font des tests actifs pour vous trouver",
  },
  {
    id: 14,
    role: "lurker",
    name: "Guerilla",
    description:
      "Lorsque vous effectuez une attaque alors que vous êtes caché, vous ne vous dévoilez pas et pouvez rester caché",
  },
  {
    id: 15,
    role: "striker",
    name: "Ne bougez pas",
    description:
      "Vous avez l'avantage sur les jets d'attaque lorsque votre cible s'est déplacée de moins de 15 ft lors de son dernier tour",
  },
  {
    id: 16,
    role: "striker",
    name: "Je te vois",
    description:
      "Vos attaques à distance ignorent la demi-couverture et la couverture aux trois quarts",
  },
  {
    id: 17,
    role: "striker",
    name: "La prochaine fois",
    description:
      "Si vous manquez une cible, vous avez l'avantage sur votre prochaine attaque contre cette même cible",
  },
  {
    id: 18,
    role: "striker",
    name: "Tir en rafale",
    description:
      "Lorsque vous réussissez une attaque, vous pouvez infliger des dégâts égaux à votre niveau à toute personne se trouvant à moins de 5 ft de votre cible (une fois par round)",
  },
  {
    id: 19,
    role: "striker",
    name: "Ricochet",
    description:
      "Si votre attaque rate, vous pouvez dépenser votre réaction pour effectuer une autre attaque contre une cible différente de votre choix dans un rayon de 15 ft de la cible initiale",
  },
  {
    id: 20,
    role: "striker",
    name: "Tourbillon",
    description:
      "Vous pouvez attaquer deux cibles adjacentes qui sont à portée, en leur infligeant à chacune des dégâts complets",
  },
  {
    id: 21,
    role: "striker",
    name: "Furie sanguinaire",
    description:
      "Lorsque vous êtes dans l'état 'Saignement', vous devenez enragé ; -2 de défense et +2 d'attaque",
  },
  {
    id: 22,
    role: "striker",
    name: "Assaut sauvage",
    description:
      "Une fois par tour, ajoutez votre niveau en dégâts supplémentaires à une attaque",
  },
  {
    id: 23,
    role: "striker",
    name: "Attaque soutenue",
    description:
      "Vous avez l'avantage sur les jets d'attaque contre les cibles dans l'état 'Saignement' (moins de 50% de points de vie)",
  },
  {
    id: 24,
    role: "striker",
    name: "Vengeance",
    description:
      "Inflige un bonus de dégâts égal à votre niveau à toute personne qui vous a blessé au cours du round précédent",
  },
  {
    id: 25,
    role: "skirmisher",
    name: "Vous ne pouvez pas vous cacher",
    description:
      "Vous avez un avantage lorsque vous essayez de détecter des ennemis cachés. Tout ennemi que vous pouvez voir est également visible par vos alliés",
  },
  {
    id: 26,
    role: "skirmisher",
    name: "Pieds légers",
    description:
      "Vous pouvez vous désengager ou foncer en tant qu'action bonus. Lorsqu'un ennemi se déplace à proximité de vous, vous pouvez dépenser votre réaction pour vous éloigner de la moitié de votre vitesse",
  },
  {
    id: 27,
    role: "skirmisher",
    name: "Explorateur",
    description:
      "Vous pouvez grimper et vous déplacer en terrain difficile sans pénalité de mouvement",
  },
  {
    id: 28,
    role: "skirmisher",
    name: "Opportuniste",
    description:
      "Lorsqu'un allié se déplace à proximité d'un ennemi, vous pouvez dépenser votre réaction pour vous déplacer de votre vitesse vers ce même ennemi",
  },
  {
    id: 29,
    role: "skirmisher",
    name: "Dur à frapper",
    description:
      "Lorsque vous êtes debout et non immobilisé, les attaques contre vous ont un désavantage sauf si vous êtes adjacent à deux ennemis ou plus",
  },
  {
    id: 30,
    role: "supporter",
    name: "Guidance",
    description:
      "Les alliés situés à moins de 10 ft de vous ont un avantage sur leurs jets d'attaque",
  },
  {
    id: 31,
    role: "supporter",
    name: "Protection",
    description:
      "Les alliés dans un rayon de 10 ft autour de vous gagnent +2 de défense.",
  },
  {
    id: 32,
    role: "supporter",
    name: "Ferocity",
    description:
      "Les alliés situés à moins de 10 ft. de vous bénéficient d'un bonus aux dégâts égal à votre niveau",
  },
  {
    id: 33,
    role: "supporter",
    name: "Cri de ralliement",
    description:
      "Réduisez de moitié vos dégâts d'attaque pour supprimer une condition d'un allié",
  },
  {
    id: 34,
    role: "supporter",
    name: "Commandant",
    description:
      "Au lieu de faire un jet d'attaque, vous pouvez ordonner à un allié de faire une attaque contre une cible de votre choix (une fois par round)",
  },
  {
    id: 35,
    role: null,
    name: "Adhésif",
    description:
      "Vous adhérez à tout ce que vous touchez. Toute créature Grande ou plus petite adhérant à vous est également agrippée, et les jets de sauvegardes effectués pour échapper à l'agrippement ont un désavantage",
  },
  {
    id: 36,
    role: null,
    name: "Agressif",
    description:
      "Comme action bonus, vous pouvez vous déplacer de votre vitesse vers un ennemi que vous pouvez voir",
  },
  {
    id: 37,
    role: null,
    name: "Alarme",
    description:
      "Lorsque vous subissez des dégâts, tous les autres monstres de la même race dans un rayon de 75m sont conscients de votre douleur",
  },
  {
    id: 38,
    role: null,
    name: "Esprit extraterrestre",
    description: "Vous avez l'avantage sur les jets de sauvegarde de Sagesse",
  },
  {
    id: 39,
    role: null,
    name: "Amorphe",
    description:
      "Vous pouvez vous déplacer dans un espace aussi étroit qu'un pouce de large sans problème",
  },
  {
    id: 40,
    role: null,
    name: "Protection arcanique",
    description: "Vous êtes résistant à tous les dégâts magiques",
  },
  {
    id: 41,
    role: null,
    name: "Aura : Anti-magie",
    description:
      "Toute créature située à moins de 15 ft de vous a un désavantage lorsqu'elle lance des sorts magiques",
  },
  {
    id: 42,
    role: null,
    name: "Aura : Dégats",
    description:
      "L'espace qui vous entoure est dangereux. Les créatures subissent des dégâts égaux à votre niveau ([level]) lorsqu'elles pénètrent dans votre aura ou commencent leur tour à l'intérieur de celle-ci.",
  },
  {
    id: 43,
    role: null,
    name: "Aura : Perturbatrice",
    description:
      "Tous les ennemis situés à moins de 10 ft de vous ont un désavantage sur les jets de sauvegarde",
  },
  {
    id: 44,
    role: null,
    name: "Aura : Enchevêtrement",
    description:
      "Le sol dans un rayon de 10 ft autour de vous est un terrain difficile. Chaque créature qui commence son tour dans cette zone doit réussir un jet de sauvegarde de Force [dc-primary] ou voir sa vitesse réduite à 0 jusqu'au début de son prochain tour.",
  },
  {
    id: 45,
    role: null,
    name: "Aura : odeur nauséabonde",
    description:
      "L'air est putride autour de vous. Les créatures situées à moins de 10 ft de vous ont un désavantage sur les jets d'attaque, à moins qu'elles n'aient également le don Odeur nauséabonde.",
  },
  {
    id: 46,
    role: null,
    name: "Peau barbelée",
    description:
      "Au début de votre tour, infligez des dégâts perforants égaux à votre niveau ([level]) à toute créature qui vous agrippe.",
  },
  {
    id: 47,
    role: null,
    name: "Frénésie sanguine",
    description:
      "Vous avez l'avantage sur les jets d'attaque en mêlée contre toute créature qui n'a pas tous ses points de vie",
  },
  {
    id: 48,
    role: null,
    name: "Charger",
    description:
      "Si vous vous êtes déplacé de plus de 20ft. en ligne droite vers votre cible, faites votre jet d'attaque de mêlée avec l'avantage. En cas de succès, vous mettez votre cible à plat ventre, en plus de tout autre effet",
  },
  {
    id: 49,
    role: null,
    name: "Constriction",
    description:
      "Au début de votre tour, infligez des dégâts contondants égaux à votre niveau à toute créature que vous agrippez",
  },
  {
    id: 50,
    role: null,
    name: "Corps corrosif",
    description:
      "Toute créature qui vous touche ou qui porte une attaque de mêlée contre vous subit des dégâts égaux à votre niveau. Toute arme qui vous touche subit une pénalité permanente et cumulative de -1 aux jets d'attaques - l'arme est détruite si la pénalité atteint -5.",
  },
  {
    id: 51,
    role: null,
    name: "Défense critique",
    description:
      "Les coups critiques portés contre vous comptent comme des coups normaux, sauf si vous êtes déjà dans l'était <i>Saignement</i>",
  },
  {
    id: 52,
    role: null,
    name: "Fureur critique",
    description: "Vos attaques obtiennent un coup critique sur un jet de 19-20",
  },
  {
    id: 53,
    role: null,
    name: "Absorption de dégâts",
    description:
      "Chaque fois que vous devriez subir des dégâts d'un type spécifique, vous regagnez à la place ce nombre de points de vie",
  },
  {
    id: 54,
    role: null,
    name: "Transfert de dégâts",
    description:
      "Lorsque vous subissez des dégâts d'une attaque, vous pouvez transférer la moitié de ces dégâts à une autre créature située à moins de 5ft. de vous",
  },
  {
    id: 55,
    role: null,
    name: "Corps dangereux",
    description:
      "Tout ennemi qui vous touche ou vous frappe avec une attaque de mêlée à moins de 5ft de vous subit des dégâts égaux à votre niveau ([level])",
  },
  {
    id: 56,
    role: null,
    name: "Désintégration",
    description:
      "Lorsque vous mourez, votre corps se désintègre en poussière. Vous laissez derrière vous vos armes et tout ce que vous portez",
  },
  {
    id: 57,
    role: null,
    name: "Souffle du dragon",
    description:
      "Vous pouvez cracher du feu de dragon en attaque, ou l'utiliser pour allumer de petits feux",
  },
  {
    id: 58,
    role: null,
    name: "Glissement sous terrain",
    description:
      "Vous pouvez creuser dans la terre et la pierre non magiques et non travaillées. Ce faisant, vous ne perturbez pas la matière que vous traversez",
  },
  {
    id: 59,
    role: null,
    name: "Evasion",
    description:
      "Lorsque vous devriez être réduit à 0 point de vie en dehors de votre repaire, vous vous échappez et fuyez vers votre repaire. Vous y restez, paralysé et au repos, jusqu'à ce que vous récupériez au moins 50% de vos points de vie",
  },
  {
    id: 60,
    role: null,
    name: "Explosif",
    description:
      "Lorsque vous tombez à 0 point de vie, votre corps explose et inflige des dégâts à tous ceux qui se trouvent à moins de 5 ft. Vous pouvez commencer la détonation à votre tour avec une action bonus ; vous explosez au début de votre prochain tour.",
  },
  {
    id: 61,
    role: null,
    name: "Fausse apparence",
    description:
      "Lorsque vous restez immobile, vous êtes indiscernable d'un morceau du paysage local",
  },
  {
    id: 62,
    role: null,
    name: "Esprit féérique",
    description:
      "Vous avez l'avantage aux jets de sauvegarde contre le charme, et la magie ne peut pas vous endormir",
  },
  {
    id: 63,
    role: null,
    name: "Vol",
    description:
      "Vous pouvez voler à votre vitesse. Lorsque vous volez, vous devez vous déplacer à toute vitesse ou atterrir, à moins que vous ne puissiez également planer. Le fait de se lancer en vol provoque des attaques d'opportunité, même si vous vous désengagez",
  },
  {
    id: 64,
    role: null,
    name: "Survol",
    description:
      "Vous ne provoquez pas d'attaque d'opportunité lorsque vous volez hors de portée d'un ennemi.",
  },
  {
    id: 65,
    role: null,
    name: "Liberté de mouvement",
    description:
      "Vous ignorez les terrains difficiles, et les effets magiques ne peuvent pas réduire votre vitesse ou vous contraindre. Vous pouvez dépenser 5 ft de mouvement pour échapper à des entraves non magiques ou un effet vous aggripant.",
  },
  {
    id: 66,
    role: null,
    name: "Aggrippeur",
    description:
      "Vous avez l'avantage aux jets d'attaque contre toute cible que vous avez agrippée. De plus, lorsque vous agrippez une cible, les dégâts que vous subissez lors d'une attaque sont partagés à 50/50 avec votre victime",
  },
  {
    id: 67,
    role: null,
    name: "Survol",
    description:
      "Vous pouvez rester en vol stationnaire pendant 6 secondes avant de devoir vous déplacer",
  },
  {
    id: 68,
    role: null,
    name: "Immortel",
    description:
      "Vous ne pouvez pas être tué à moins d'être réduit à 0 point de vie par un type d'attaque spécifique. Toute autre forme d'attaque vous réduira à 1 point de vie à la place",
  },
  {
    id: 69,
    role: null,
    name: "Inaltérable",
    description:
      "Vous êtes immunisé contre tout sort ou effet qui modifierait votre forme",
  },
  {
    id: 70,
    role: null,
    name: "Impénétrable",
    description: "Vous êtes résistant à tous les dégâts non magiques",
  },
  {
    id: 71,
    role: null,
    name: "Incorporel",
    description:
      "Vous pouvez traverser toute matière solide non magique et ne pouvez être touché par aucune arme ou attaque non magique",
  },
  {
    id: 72,
    role: null,
    name: "Indomptable",
    description:
      "Vous êtes immunisé contre tout effet qui altérerait votre esprit ou votre volonté",
  },
  {
    id: 73,
    role: null,
    name: "Insondable",
    description:
      "Vous êtes immunisé contre tout effet qui percevrait vos émotions ou lirait vos pensées, ainsi que contre tout sort de divination que vous refusez. Les tests de sagesse (perspicacité) visant à déterminer vos intentions ou votre sincérité sont désavantagés.",
  },
  {
    id: 74,
    role: null,
    name: "Invisible",
    description: "On ne peut pas vous voir",
  },
  {
    id: 75,
    role: null,
    name: "Mangeur de vie",
    description:
      "Lorsque vous infligez des dégâts qui réduisent une créature à 0 point de vie, cette créature ne peut être ranimée par aucun moyen autre qu'un sort de souhait",
  },
  {
    id: 76,
    role: null,
    name: "Résistance à la magie",
    description:
      "Vous avez l'avantage sur les jets de sauvegarde contre les sorts et autres effets magiques",
  },
  {
    id: 77,
    role: null,
    name: "Armes magiques",
    description: "Les attaques de vos armes sont magiques",
  },
  {
    id: 78,
    role: null,
    name: "Avantage martial",
    description:
      "Une fois par tour, vous pouvez infliger des dégâts supplémentaires égaux à votre niveau lorsque vous touchez une cible située à moins de 5ft. de vos alliés",
  },
  {
    id: 79,
    role: null,
    name: "Parade",
    description:
      "Vous pouvez dépenser votre réaction pour gagner +3 de défense contre une attaque de mêlée que vous pouvez voir",
  },
  {
    id: 80,
    role: null,
    name: "Carnage",
    description:
      "Lorsque vous réduisez une cible à 0 point de vie avec une attaque de mêlée à votre tour, vous pouvez dépenser une action bonus pour vous déplacer jusqu'à la moitié de votre vitesse et attaquer une cible différente",
  },
  {
    id: 81,
    role: null,
    name: "Imprudent",
    description:
      "Au début de votre tour, vous pouvez bénéficier d'un avantage sur toutes les attaques de mêlée que vous effectuez pendant ce tour. Cependant, toutes les attaques contre vous gagnent un avantage jusqu'au début de votre prochain tour",
  },
  {
    id: 82,
    role: null,
    name: "Redirection",
    description:
      "Lorsque vous êtes à moins de 5ft d'un allié, vous pouvez rediriger toute attaque unique faite contre vous vers votre allié à la place",
  },
  {
    id: 83,
    role: null,
    name: "Régénération",
    description:
      "Vous regagnez au début de votre tour un nombre de points de vie égal à 2 ou votre maximum de points de vie / 3 (le plus élevé). Cette régénération s'arrête pendant 1 tour si vous êtes touché par un type de dégât spécifique (feu/acide/foudre/etc) ou si vous êtes réduit à 0 point de vie",
  },
  {
    id: 84,
    role: null,
    name: "Implacable",
    description:
      "La première fois que vous tombez à 0 point de vie après un repos long, vous êtes à la place réduit à 1 point de vie",
  },
  {
    id: 85,
    role: null,
    name: "Monstre de siège",
    description:
      "Vous infligez des dégâts doublés aux objets et aux structures",
  },
  {
    id: 86,
    role: null,
    name: "Ombre furtive",
    description:
      "Dans la pénombre ou l'obscurité, vous pouvez entreprendre l'action Dissimuler via votre action bonus.",
  },
  {
    id: 87,
    role: null,
    name: "Rapide",
    description: "Vous pouvez <i>Foncer</i> via votre action bonus.",
  },
  {
    id: 88,
    role: null,
    name: "Glissant",
    description:
      "Vous avez l'avantage sur les jets de caractéristiques et les jets de sauvegarde effectués pour eviter de vous faires aggriper.",
  },
  {
    id: 89,
    role: null,
    name: "Pattes d'araignée",
    description:
      "Vous pouvez grimper sur des surfaces difficiles, y compris à l'envers sur les plafonds, sans avoir besoin de faire de jet.",
  },
  {
    id: 90,
    role: null,
    name: "Séparation",
    description:
      "Lorsque vous entrez dans l'état 'Saignement', vous vous séparez en deux copies plus petites. Chaque nouvelle copie a des points de vie égaux à la moitié de vos points de vie restants, et agit de manière indépendante.",
  },
  {
    id: 91,
    role: null,
    name: "Pieds stables",
    description:
      "Vous avez l'avantage sur les jets de sauvegarde de Force et de Dextérité effectués contre les effets qui vous mettraient à terre",
  },
  {
    id: 92,
    role: null,
    name: "Essaim",
    description:
      "Vous pouvez occuper l'espace d'une autre créature et vice versa. Vous gagnez l'avantage sur les attaques contre toute créature qui partage votre espace",
  },
  {
    id: 93,
    role: null,
    name: "Travail d'équipe",
    description:
      "Vous avez l'avantage sur les jets d'attaque lorsque votre cible se trouve à moins de 5ft (1 case) d'un allié non entravé",
  },
  {
    id: 94,
    role: null,
    name: "Sens du danger",
    description:
      "A moins d'être frappé d'incapacité, vous ne pouvez pas être surpris",
  },
  {
    id: 95,
    role: null,
    name: "Force d'âme inaltérable",
    description:
      "Si des dégâts vous réduisent à 0 point de vie, faites un jet de sauvegarde de Constitution avec un DC de 10 + les dégâts subis. En cas de succès, vous tombez à 1 point de vie à la place",
  },
  {
    id: 96,
    role: null,
    name: "Réveillé",
    description: "On ne vous surprend jamais à dormir",
  },
  {
    id: 97,
    role: null,
    name: "Mage de guerre",
    description:
      "Lorsque vous utilisez votre action pour lancer un sort, vous pouvez effectuer une attaque d'arme comme action bonus",
  },
  {
    id: 98,
    role: null,
    name: "(Aberration) Esprit Alien",
    description: "Vous avez l'avantage aux jets de sauvegarde d'Intelligence.",
  },
  {
    id: 99,
    role: null,
    name: "(Aberration) Catatonique",
    description:
      "Lorsque vous touchez critique une créature avec une attaque, elle doit réussir un jet de sauvegarde d'Intelligence ou être paralysée jusqu'à la fin de son prochain tour.",
  },
  {
    id: 100,
    role: null,
    name: "(Aberration) Détection de Sentience",
    description:
      "Vous pouvez ressentir la présence et la localisation de toute autre créature dans un rayon de 300ft. de vous qui a une Intelligence de 3 ou plus (indépendamment des barrières interposées), à moins que la créature ne soit protégée par un sort d'écran mental.",
  },
  {
    id: 101,
    role: null,
    name: "(Aberration) Aura Perturbante",
    description:
      "Toutes les créatures dans un rayon de 10ft. de vous ont un désavantage aux jets de sauvegarde de Concentration.",
  },
  {
    id: 102,
    role: null,
    name: "(Aberration) Vue Horrifiante",
    description:
      "Au début de votre tour, chaque créature dans un rayon de 30ft. de vous qui peut vous voir doit réussir un jet de sauvegarde d'Intelligence ou être entravée jusqu'à la fin de son prochain tour. Si le jet de sauvegarde réussit de 5 ou plus, la créature est immunisée contre votre vue jusqu'à ce qu'elle termine un repos long.",
  },
  {
    id: 103,
    role: null,
    name: "(Aberration) Son Horrifiant",
    description:
      "Au début de votre tour, chaque créature dans un rayon de 30ft. de vous qui peut vous entendre doit réussir un jet de sauvegarde d'Intelligence ou être entravée jusqu'à la fin de son prochain tour. Si le jet de sauvegarde réussit de 5 ou plus, la créature est immunisée contre votre son jusqu'à ce qu'elle termine un repos long.",
  },
  {
    id: 104,
    role: null,
    name: "(Aberration) Infliger la Folie",
    description:
      "Lorsque vous réduisez une créature à 0 points de vie, elle doit réussir un jet de sauvegarde d'Intelligence ou subir un effet de folie à long terme.",
  },
  {
    id: 105,
    role: null,
    name: "(Aberration) Impénétrable",
    description:
      "Vous êtes immunisé contre les sorts de divination et tout effet qui pourrait détecter vos émotions ou lire vos pensées.",
  },
  {
    id: 106,
    role: null,
    name: "(Aberration) Guérison Psychique",
    description:
      "Lorsque vous devriez subir des dégâts psychiques, vous récupérez plutôt autant de points de vie.",
  },
  {
    id: 107,
    role: null,
    name: "(Aberration) Cri Psychique",
    description:
      "Lorsque vous êtes réduit à 0 points de vie, chaque créature dans un rayon de 10ft. doit réussir un jet de sauvegarde d'Intelligence ou subir 75% de dégâts psychiques.",
  },
  {
    id: 108,
    role: null,
    name: "(Aberration) Lecture de Pensées",
    description:
      "Vous pouvez lire magiquement les pensées superficielles de toute créature dans un rayon de 60ft. de vous. L'effet est bloqué par 3ft. de bois ou de terre, 2ft. de pierre, 2 pouces de métal ou une mince feuille de plomb.",
  },
  {
    id: 109,
    role: null,
    name: "(Aberration) Transmission de Pensées",
    description:
      "Vous pouvez transmettre magiquement des pensées simples à toute créature dans un rayon de 120ft. de vous qui peut comprendre une langue.",
  },
  {
    id: 110,
    role: null,
    name: "(Aberration) Influence Sinistre",
    description:
      "Vous pouvez commander magiquement toute créature spécifiée dans un rayon de 120ft. de vous en utilisant une télépathie limitée.",
  },
  {
    id: 111,
    role: null,
    name: "(Aberration) Lien Télépathique",
    description:
      "Vous partagez un lien télépathique avec une ou plusieurs créatures dans un rayon de 120ft. de vous.",
  },
  {
    id: 112,
    role: null,
    name: "(Bête) Amphibien",
    description: "Vous pouvez respirer dans l'air et dans l'eau.",
  },
  {
    id: 113,
    role: null,
    name: "(Bête) Bioluminescence",
    description:
      "Vous émettez une lumière vive sur 15 pi et une lumière tamisée supplémentaire sur 15 pi.",
  },
  {
    id: 114,
    role: null,
    name: "(Bête) Fureur du Sang",
    description:
      "Vous avez l'avantage aux jets d'attaque au corps à corps contre toute créature qui est ensanglantée (c'est-à-dire qui a 50% de points de vie ou moins).",
  },
  {
    id: 115,
    role: null,
    name: "(Bête) Dextre",
    description: "Vous avez l'avantage aux jets de sauvegarde de Dextérité.",
  },
  {
    id: 116,
    role: null,
    name: "(Bête) Résistance à l'apnée",
    description:
      "Vous pouvez retenir votre respiration pendant une période prolongée.",
  },
  {
    id: 117,
    role: null,
    name: "(Bête) Ouïe fine",
    description:
      "Vous avez l'avantage aux tests de Sagesse (Perception) qui reposent sur l'ouïe.",
  },
  {
    id: 118,
    role: null,
    name: "(Bête) Sens aiguisés",
    description: "Vous avez l'avantage aux tests de Sagesse (Perception).",
  },
  {
    id: 119,
    role: null,
    name: "(Bête) Vue perçante",
    description:
      "Vous avez l'avantage aux tests de Sagesse (Perception) qui reposent sur la vue.",
  },
  {
    id: 120,
    role: null,
    name: "(Bête) Odorat fin",
    description:
      "Vous avez l'avantage aux tests de Sagesse (Perception) qui reposent sur l'odorat.",
  },
  {
    id: 121,
    role: null,
    name: "(Bête) Riposte",
    description:
      "Lorsque vous êtes réduit à 0 points de vie, vous pouvez dépenser votre réaction pour effectuer une attaque au corps à corps de base contre une créature à portée.",
  },
  {
    id: 122,
    role: null,
    name: "(Bête) Mimétisme",
    description:
      "Vous pouvez imiter des sons simples que vous avez entendus (comme une personne chuchotant, un bébé pleurant ou un animal jacassant). Une créature qui entend les sons peut dire qu'il s'agit d'imitations avec un test de Sagesse (Perspicacité) réussi.",
  },
  {
    id: 123,
    role: null,
    name: "(Bête) Agile",
    description:
      "Le terrain difficile ne vous coûte pas de mouvement supplémentaire.",
  },
  {
    id: 124,
    role: null,
    name: "(Bête) Bond",
    description:
      "Lorsque vous touchez critique une créature avec une attaque, elle doit réussir un jet de sauvegarde de Force ou être renversée.",
  },
  {
    id: 125,
    role: null,
    name: "(Bête) Grimper comme une araignée",
    description:
      "Vous pouvez grimper sur des surfaces difficiles, y compris à l'envers sur les plafonds, sans avoir besoin de faire un test de compétence.",
  },
  {
    id: 126,
    role: null,
    name: "(Bête) Saut sur pied",
    description:
      "Votre saut en longueur peut aller jusqu'à 20 pi, et votre saut en hauteur peut aller jusqu'à 10 pi, avec ou sans élan.",
  },
  {
    id: 127,
    role: null,
    name: "(Bête) Sûr-pied",
    description:
      "Vous avez l'avantage aux jets de sauvegarde de Force et de Dextérité effectués contre les effets qui vous renverseraient.",
  },
  {
    id: 128,
    role: null,
    name: "(Bête) Déchirement",
    description:
      "Lorsque vous réduisez une créature à 0 points de vie, elle doit réussir un jet de sauvegarde de Constitution ou perdre un dé de vie non dépensé.",
  },
  {
    id: 129,
    role: null,
    name: "(Bête) Respiration aquatique",
    description: "Vous pouvez respirer uniquement sous l'eau.",
  },
  {
    id: 130,
    role: null,
    name: "(Bête) Sens de la toile",
    description:
      "Si vous êtes en contact avec une toile, vous connaissez l'emplacement exact de toute autre créature en contact avec la même toile.",
  },
  {
    id: 131,
    role: null,
    name: "(Céleste) Aura de Jugement",
    description:
      "Toute créature maléfique qui commence son tour dans un rayon de 10 pi de vous subit des dégâts radiants égaux à votre niveau de combat.",
  },
  {
    id: 132,
    role: null,
    name: "(Céleste) Attaque Aveuglante",
    description:
      "Lorsque vous touchez de manière critique une créature avec une attaque, celle-ci doit réussir un jet de sauvegarde de Constitution ou être aveuglée jusqu'à la fin de son prochain tour.",
  },
  {
    id: 133,
    role: null,
    name: "(Céleste) Courageux",
    description: "Vous avez l'avantage aux jets de sauvegarde contre la peur.",
  },
  {
    id: 134,
    role: null,
    name: "(Céleste) Vie Revendiquée",
    description:
      "Lorsque vous réduisez une créature à 0 points de vie, vous regagnez des points de vie égaux à deux fois votre niveau de combat. Si la créature est maléfique, cela augmente à quatre fois votre niveau de combat.",
  },
  {
    id: 135,
    role: null,
    name: "(Céleste) Guérison des Blessures",
    description:
      "Au début de votre tour, si vous avez au moins 1 point de vie, vous regagnez 10% de vos points de vie maximum.",
  },
  {
    id: 136,
    role: null,
    name: "(Céleste) Détection de l'Alignement",
    description:
      "Vous connaissez l'alignement de toute créature dans un rayon de 10 pi de vous.",
  },
  {
    id: 137,
    role: null,
    name: "(Céleste) Aura Divine",
    description:
      "Toute créature dans un rayon de 10 pi de vous ayant un alignement bon a l'avantage aux jets de sauvegarde.",
  },
  {
    id: 138,
    role: null,
    name: "(Céleste) Lueur Divine",
    description:
      "Vous émettez une lumière vive sur 30 pi et une lumière faible supplémentaire sur 30 pi.",
  },
  {
    id: 139,
    role: null,
    name: "(Céleste) Forme Divine",
    description:
      "Vous êtes immunisé contre tout sort ou effet de sort qui altérerait votre forme.",
  },
  {
    id: 140,
    role: null,
    name: "(Céleste) Armes Divines",
    description: "Vos attaques d'arme sont magiques.",
  },
  {
    id: 141,
    role: null,
    name: "(Céleste) Dernière Radiance",
    description:
      "Lorsque vous êtes réduit à 0 points de vie, chaque créature dans un rayon de 10 pi de vous doit réussir un jet de sauvegarde de Dextérité ou subir des dégâts radiants égaux à 75%.",
  },
  {
    id: 142,
    role: null,
    name: "(Céleste) Lecteur de Coeur",
    description: "Vous avez l'avantage aux jets de Sagesse (Perception).",
  },
  {
    id: 143,
    role: null,
    name: "(Céleste) Perceptif",
    description: "Vous avez l'avantage aux jets de sauvegarde de Sagesse.",
  },
  {
    id: 144,
    role: null,
    name: "(Céleste) Protection contre le Mal",
    description:
      "Vous avez l'avantage aux jets de sauvegarde contre les sorts et autres effets magiques lancés par une créature maléfique.",
  },
  {
    id: 145,
    role: null,
    name: "(Céleste) Pureté",
    description: "Vous êtes immunisé contre les maladies.",
  },
  {
    id: 146,
    role: null,
    name: "(Céleste) Esprit de Rassemblement",
    description:
      "Les créatures alliées dans un rayon de 30 pi de vous ne peuvent pas être effrayées.",
  },
  {
    id: 147,
    role: null,
    name: "(Céleste) Châtiment",
    description:
      "Lorsque vous touchez une créature maléfique avec une attaque, vous infligez des dégâts radiants supplémentaires égaux à votre niveau de combat.",
  },
  {
    id: 148,
    role: null,
    name: "(Céleste) Chercheur de Vérité",
    description: "Vous savez si vous entendez un mensonge.",
  },
  {
    id: 149,
    role: null,
    name: "(Céleste) Repoussement des Morts-Vivants",
    description:
      "Toute créature mort-vivante qui commence son tour dans un rayon de 30 pi de vous doit réussir un jet de sauvegarde de Sagesse ou être repoussée jusqu'au début de son prochain tour.",
  },
  {
    id: 150,
    role: null,
    name: "(Créature Artificielle) Absorber les Dommages",
    description:
      "Lorsque vous devriez subir des dégâts variés, vous récupérez plutôt autant de points de vie.",
  },
  {
    id: 151,
    role: null,
    name: "(Créature Artificielle) Antimagie",
    description:
      "Vous êtes incapacité lorsque vous êtes dans la zone d'un champ d'antimagie. Si vous êtes la cible d'un effet de \"dissipation magique\", vous devez réussir un jet de sauvegarde de Constitution contre le DD de sauvegarde de sort du lanceur ou tomber inconscient pendant 1 minute.",
  },
  {
    id: 152,
    role: null,
    name: "(Créature Artificielle) Aura de Loi",
    description:
      "Toute créature loyale dans un rayon de 10ft. de vous a l'avantage aux jets de sauvegarde.",
  },
  {
    id: 153,
    role: null,
    name: "(Créature Artificielle) Corps Axiomatique",
    description:
      "Vous êtes immunisé contre tout sort ou effet magique qui modifierait votre forme.",
  },
  {
    id: 154,
    role: null,
    name: "(Créature Artificielle) Esprit Axiomatique",
    description:
      "On ne peut pas vous contraindre à agir d'une manière contraire à votre nature ou à vos instructions.",
  },
  {
    id: 155,
    role: null,
    name: "(Créature Artificielle) Contrecoup",
    description:
      "Lorsque vous êtes réduit à 0 points de vie, chaque créature dans un rayon de 10ft. doit réussir un jet de sauvegarde de Dextérité ou subir 75% de dégâts de force.",
  },
  {
    id: 156,
    role: null,
    name: "(Créature Artificielle) Bande Passante",
    description:
      "Divisez équitablement tout dommage que vous devriez subir entre tous les construits du même type dans un rayon de 30ft.",
  },
  {
    id: 157,
    role: null,
    name: "(Créature Artificielle) Endurant",
    description:
      "Une fois par long repos, lorsque vous devriez être réduit à 0 points de vie, vous êtes plutôt réduit à 1 point de vie.",
  },
  {
    id: 158,
    role: null,
    name: "(Créature Artificielle) Corps Renforcé",
    description: "Vos attaques avec des armes sont magiques.",
  },
  {
    id: 159,
    role: null,
    name: "(Créature Artificielle) Apparence Fausse",
    description:
      "Tant que vous restez immobile, vous êtes indiscernable d'un objet inanimé normal.",
  },
  {
    id: 160,
    role: null,
    name: "(Créature Artificielle) Attaquant Loyal",
    description:
      "Lorsque vous touchez une créature chaotique avec une attaque, vous infligez des dégâts de force supplémentaires égaux à votre niveau de combat.",
  },
  {
    id: 161,
    role: null,
    name: "(Créature Artificielle) Créature Vivante",
    description:
      "Vous êtes immunisé contre les maladies. Vous n'avez pas besoin de manger, boire ou respirer. Vous n'avez pas besoin de dormir ou de subir les effets de l'épuisement en raison du manque de repos. Les effets magiques ne peuvent pas vous endormir.",
  },
  {
    id: 162,
    role: null,
    name: "(Créature Artificielle) Perte de Contrôle",
    description:
      "Vous êtes contrôlé par une autre créature. Si la créature est tuée ou autrement rendue incapable d'agir, vous perdez le contrôle et devez soit a) attaquer la créature la plus proche que vous pouvez voir, soit b) si aucune créature n'est suffisamment proche pour se déplacer et attaquer, attaquer un objet (avec une préférence pour un objet plus petit que vous).",
  },
  {
    id: 163,
    role: null,
    name: "(Créature Artificielle) Réseau",
    description:
      "Si vous êtes adjacent à un autre construit du même type, vous avez l'avantage sur les jets d'attaque.",
  },
  {
    id: 164,
    role: null,
    name: "(Créature Artificielle) Surcharge",
    description:
      "Lorsque vous infligez un coup critique à une créature avec une attaque, elle doit réussir un jet de sauvegarde de Constitution ou subir des dégâts de force égaux à votre niveau de combat.",
  },
  {
    id: 165,
    role: null,
    name: "(Créature Artificielle) Protection contre le Chaos",
    description:
      "Vous avez l'avantage sur les jets de sauvegarde contre les sorts et autres effets magiques lancés par une créature chaotique.",
  },
  {
    id: 166,
    role: null,
    name: "(Créature Artificielle) Recharge",
    description:
      "Lorsque vous devriez subir des dégâts variés, vous rechargez plutôt une capacité non commune épuisée.",
  },
  {
    id: 167,
    role: null,
    name: "(Dragon) Arrogant",
    description:
      "Quand vous lancez pour les dégâts, vous pouvez relancer tout dé qui est un 1 ou un 2. Vous devez utiliser le deuxième résultat.",
  },
  {
    id: 168,
    role: null,
    name: "(Dragon) Confiant",
    description: "Vous avez l'avantage sur les jets de sauvegarde de Charisme.",
  },
  {
    id: 169,
    role: null,
    name: "(Dragon) Attaque Plongeante",
    description:
      "Si vous volez au moins 20ft. vers une cible et la frappez avec une attaque d'arme de mêlée, vous infligez des dégâts supplémentaires égaux à votre niveau de combat.",
  },
  {
    id: 170,
    role: null,
    name: "(Dragon) Souffle de Dragon",
    description:
      "Quand vous êtes ensanglanté ou enragé, vous pouvez immédiatement recharger une attaque de souffle et dépenser votre réaction pour l'utiliser immédiatement.",
  },
  {
    id: 171,
    role: null,
    name: "(Dragon) Souffle Renforcé",
    description:
      "Si vous réduisez une créature à 0 points de vie avec une attaque de souffle, elle est désintégrée.",
  },
  {
    id: 172,
    role: null,
    name: "(Dragon) Évasion",
    description:
      "Vous ne provoquez pas d'opportunité d'attaque lorsque vous vous élevez hors de la portée d'un ennemi.",
  },
  {
    id: 173,
    role: null,
    name: "(Dragon) Peur de Moi Seul",
    description:
      "Les alliés dans un rayon de 30ft. de vous sont immunisés contre la peur provenant d'autres sources que vous.",
  },
  {
    id: 174,
    role: null,
    name: "(Dragon) Aura Terrifiante",
    description:
      "Les ennemis dans un rayon de 30ft. de vous ont désavantage sur les jets de sauvegarde contre la peur.",
  },
  {
    id: 175,
    role: null,
    name: "(Dragon) Atterrissage Lourd",
    description:
      "Quand vous atterrissez sur le sol depuis une hauteur de 20ft. ou plus, chaque créature dans un rayon de 20ft. de vous doit réussir un jet de sauvegarde de Force ou tomber à terre.",
  },
  {
    id: 176,
    role: null,
    name: "(Dragon) Infliger la Peur",
    description:
      "Quand vous frappez critique une créature avec une attaque, elle doit réussir un jet de sauvegarde de Charisme ou être effrayée de vous jusqu'à la fin de son prochain tour.",
  },
  {
    id: 177,
    role: null,
    name: "(Dragon) Présence Intimidante",
    description:
      "Au début de votre tour, chaque ennemi dans un rayon de 30ft. de vous qui peut vous entendre ou vous voir doit réussir un jet de sauvegarde de Charisme ou être effrayé de vous jusqu'à la fin de son prochain tour. Si le jet de sauvegarde réussit de 5 points ou plus, la créature est immunisée contre votre présence intimidante jusqu'à ce qu'elle termine un repos long.",
  },
  {
    id: 178,
    role: null,
    name: "(Dragon) Fier",
    description:
      "Vous avez l'avantage sur les jets de sauvegarde contre les effets qui charment, effraient ou dominent.",
  },
  {
    id: 179,
    role: null,
    name: "(Dragon) Rétribution",
    description:
      "Quand vous êtes réduit à 0 points de vie, vous pouvez dépenser votre réaction pour effectuer une attaque de souffle sur une ou plusieurs créatures à portée.",
  },
  {
    id: 180,
    role: null,
    name: "(Dragon) Choc Systémique",
    description:
      "Quand vous réduisez une créature à 0 points de vie, elle doit réussir un jet de sauvegarde de Charisme ou être effrayée de vous jusqu'à ce qu'elle termine un repos long.",
  },
  {
    id: 181,
    role: null,
    name: "(Dragon) Décollage",
    description:
      "Quand vous quittez le sol pour voler, chaque créature dans un rayon de 20ft. de vous doit réussir un jet de sauvegarde de Force ou être repoussée jusqu'à 10ft.",
  },
  {
    id: 182,
    role: null,
    name: "(Dragon) Terroriser",
    description: "Vous avez l'avantage sur les jets de Charisme (Intimider).",
  },
  {
    id: 183,
    role: null,
    name: "(Dragon) Écailles Épaisses",
    description:
      "Les coups critiques portés contre vous comptent comme des coups normaux à moins que vous ne soyez déjà ensanglanté.",
  },
  {
    id: 184,
    role: null,
    name: "(Dragon) Colérique",
    description:
      "Quand vous êtes attaqué par une créature ou êtes la cible d'un sort, augmentez votre portée de coup critique contre la source de +1 jusqu'à la fin de votre prochain tour.",
  },
  {
    id: 185,
    role: null,
    name: "(Élémentaire) Absorber l'Élément",
    description:
      "Quand vous subiriez des dégâts variables, vous regagnez plutôt autant de points de vie.",
  },
  {
    id: 186,
    role: null,
    name: "(Élémentaire) Camouflage",
    description:
      "Vous êtes invisible lorsque complètement immergé dans votre élément (air, terre, feu ou eau).",
  },
  {
    id: 187,
    role: null,
    name: "(Élémentaire) Contact Chaotique",
    description:
      "Lorsque vous frappez une créature loyale avec une attaque, vous infligez des dégâts variables supplémentaires égaux à votre niveau de combat.",
  },
  {
    id: 188,
    role: null,
    name: "(Élémentaire) Explosion Mortelle",
    description:
      "Lorsque vous mourrez, chaque créature dans un rayon de 10ft. de vous doit réussir un jet de sauvegarde de Dextérité ou subir 75% de dégâts variables.",
  },
  {
    id: 189,
    role: null,
    name: "(Élémentaire) Glissement Terrestre",
    description:
      "Vous pouvez vous enfouir à travers de la terre et de la pierre non magiques et non travaillées. En le faisant, vous ne perturbez pas le matériau que vous traversez.",
  },
  {
    id: 190,
    role: null,
    name: "(Élémentaire) Aura Élémentaire",
    description:
      "Chaque créature dans un rayon de 10ft. de vous est vulnérable aux dégâts variables (ou, s'ils sont immunisés, ceux-ci sont réduits en résistance).",
  },
  {
    id: 191,
    role: null,
    name: "(Élémentaire) Corps Élémentaire",
    description:
      "Toute créature qui vous touche ou vous frappe avec une attaque au corps à corps alors qu'elle est à votre portée subit des dégâts variables égaux à votre niveau de combat.",
  },
  {
    id: 192,
    role: null,
    name: "(Élémentaire) Pouls Élémentaire",
    description:
      "Au début de votre tour, chaque créature dans un rayon de 10ft. de vous subit des dégâts variables égaux à votre niveau de combat.",
  },
  {
    id: 193,
    role: null,
    name: "(Élémentaire) Explosion",
    description:
      "Lorsque vous mourrez, chaque créature dans un rayon de 10ft. de vous doit effectuer un jet de sauvegarde de Dextérité. Si la créature échoue, elle subit 50% de dégâts variables. Si elle réussit, elle subit la moitié des dégâts.",
  },
  {
    id: 194,
    role: null,
    name: "(Élémentaire) Exposition",
    description:
      "Lorsque vous frappez critique une créature, elle doit réussir un jet de sauvegarde de Constitution ou être vulnérable aux dégâts variables jusqu'à la fin de votre prochain tour.",
  },
  {
    id: 195,
    role: null,
    name: "(Élémentaire) Protection contre la Loi",
    description:
      "Vous avez l'avantage aux jets de sauvegarde contre les sorts et autres effets magiques lancés par une créature loyale.",
  },
  {
    id: 196,
    role: null,
    name: "(Élémentaire) Dommages Tissulaires",
    description:
      "Lorsque vous réduisez une créature à 0 points de vie, elle doit réussir un jet de sauvegarde de Constitution ou être vulnérable aux dégâts variables jusqu'à ce qu'elle termine un repos long.",
  },
  {
    id: 197,
    role: null,
    name: "(Élémentaire) Susceptibilité à l'Eau",
    description:
      "Pour chaque 5ft. que vous vous déplacez dans l'eau, ou pour chaque gallon d'eau projeté sur vous, vous subissez 1 dégât de froid.",
  },
  {
    id: 198,
    role: null,
    name: "(Élémentaire) Tourbillon",
    description:
      "Au début de votre tour, vous pouvez déplacer chaque créature dans votre portée jusqu'à 10ft.",
  },
  {
    id: 199,
    role: null,
    name: "(Élémentaire) Marcheur du Vent",
    description:
      "Vous pouvez vous déplacer à travers les créatures comme si elles étaient un terrain difficile.",
  },
  {
    id: 200,
    role: null,
    name: "(Fée) Blink",
    description: "Vous pouvez téléporter jusqu'à votre vitesse de base.",
  },
  {
    id: 201,
    role: null,
    name: "(Fée) Image Floue",
    description:
      "Vous projetez une illusion magique qui crée une image floue de vous-même, causant des désavantages aux jets d'attaque contre vous. Si vous êtes touché par une attaque, cette image disparaît jusqu'au début de votre prochain tour.",
  },
  {
    id: 202,
    role: null,
    name: "(Fée) Captiver",
    description:
      "Lorsque vous infligez un coup critique à une créature avec une attaque, elle doit réussir un jet de sauvegarde de Sagesse ou être charmée par vous jusqu'à la fin de son prochain tour.",
  },
  {
    id: 203,
    role: null,
    name: "(Fée) Vue Captivante",
    description:
      "Au début de votre tour, chaque créature dans un rayon de 30ft. de vous qui peut vous voir doit réussir un jet de sauvegarde de Sagesse ou être charmée jusqu'à la fin de son prochain tour. Si le jet de sauvegarde réussit avec un écart de 5 ou plus, la créature est immunisée contre votre vue jusqu'à ce qu'elle finisse un repos long.",
  },
  {
    id: 204,
    role: null,
    name: "(Fée) Son Captivant",
    description:
      "Au début de votre tour, chaque créature dans un rayon de 30ft. de vous qui peut vous entendre doit réussir un jet de sauvegarde de Sagesse ou être charmée jusqu'à la fin de son prochain tour. Si le jet de sauvegarde réussit avec un écart de 5 ou plus, la créature est immunisée contre votre son jusqu'à ce qu'elle finisse un repos long.",
  },
  {
    id: 205,
    role: null,
    name: "(Fée) Aura Charmante",
    description:
      "Les créatures dans un rayon de 10ft. de vous ont un désavantage sur les jets de sauvegarde contre les effets de charme.",
  },
  {
    id: 206,
    role: null,
    name: "(Fée) Arme Déguisée",
    description:
      "Vous pouvez déguiser une arme que vous tenez comme un autre objet inanimé de taille équivalente. L'illusion prend fin si vous lâchez l'arme.",
  },
  {
    id: 207,
    role: null,
    name: "(Fée) Fausse Apparence",
    description:
      "Lorsque vous restez immobile, vous êtes indiscernable d'un morceau du paysage local.",
  },
  {
    id: 208,
    role: null,
    name: "(Fée) Ascendance Féerique",
    description:
      "Vous avez l'avantage sur les jets de sauvegarde contre les effets de charme, et la magie ne peut pas vous endormir.",
  },
  {
    id: 209,
    role: null,
    name: "(Fée) Invisibilité",
    description:
      "Vous êtes invisible. Si vous subissez des dégâts, vous perdez cette invisibilité jusqu'à",
  },
  {
    id: 210,
    role: null,
    name: "(Fée) Charmeur Naturel",
    description: "Vous avez l'avantage sur les jets de Charisme (Persuasion).",
  },
  {
    id: 211,
    role: null,
    name: "(Fée) Échappée Agile",
    description:
      "Vous avez l'avantage sur les jets de compétence et les jets de sauvegarde effectués pour échapper à une lutte.",
  },
  {
    id: 212,
    role: null,
    name: "(Fée) Redirection d'Attaque",
    description:
      "Quand un ennemi que vous pouvez voir vous cible avec une attaque, vous pouvez dépenser votre réaction pour choisir une créature alliée à moins de 5ft. de vous et échanger de place. La créature alliée subit les dégâts à votre place.",
  },
  {
    id: 213,
    role: null,
    name: "(Fée) Voyant",
    description:
      "Vous pouvez voir à travers les illusions et percevoir la forme originale d'un changeforme ou d'une créature transformée par la magie.",
  },
  {
    id: 214,
    role: null,
    name: "(Fée) Changeforme",
    description:
      "Vous pouvez utiliser votre action pour vous polymorpher en un humanoïde spécifié, ou en un hybride humanoïde-sujet, ou revenir à votre forme véritable. Mis à part votre taille, vos statistiques sont les mêmes dans chaque forme. Tout équipement que vous portez ou transportez n'est pas transformé. Vous revenez à votre forme véritable si vous mourez.",
  },
  {
    id: 215,
    role: null,
    name: "(Fée) Furtif",
    description: "Vous avez l'avantage sur les jets de Dextérité (Discrétion).",
  },
  {
    id: 216,
    role: null,
    name: "(Fiélon) Aura de la Haine",
    description:
      "Tout être bon qui commence son tour à moins de 10ft. de vous subit des dégâts de feu égaux à votre niveau de combat.",
  },
  {
    id: 217,
    role: null,
    name: "(Fiélon) Sang Brûlant",
    description:
      "Lorsque vous subissez des dégâts de feu, vous récupérez plutôt autant de points de vie.",
  },
  {
    id: 218,
    role: null,
    name: "(Fiélon) Marché de la Mort",
    description:
      "Lorsque vous réduisez une créature à 0 point de vie, vous pouvez lui proposer un contrat démoniaque. Si la créature accepte votre contrat, elle est plutôt réduite à 1 point de vie. Si la créature enfreint les termes de votre contrat, elle meurt immédiatement (sauf négociation contraire).",
  },
  {
    id: 219,
    role: null,
    name: "(Fiélon) Vue du Diable",
    description:
      "L'obscurité magique n'entrave pas votre vision dans l'obscurité.",
  },
  {
    id: 220,
    role: null,
    name: "(Fiélon) Envoûtement",
    description:
      "Les créatures à moins de 10ft. de vous ont désavantage aux jets de sauvegarde contre charmé.",
  },
  {
    id: 221,
    role: null,
    name: "(Fiélon) Renouveau Infernal",
    description:
      "Lorsque vous réduisez une créature à 0 point de vie, vous récupérez des points de vie égaux à deux fois votre niveau de combat. Si la créature est bonne, cela augmente à quatre fois votre niveau de combat.",
  },
  {
    id: 222,
    role: null,
    name: "(Fiélon) Soutien Infernal",
    description:
      "Toute créature à moins de 10ft. de vous qui a un alignement mauvais a l'avantage aux jets de sauvegarde.",
  },
  {
    id: 223,
    role: null,
    name: "(Fiélon) Arme Infernale",
    description: "Vos attaques d'arme sont magiques.",
  },
  {
    id: 224,
    role: null,
    name: "(Fiélon) Enfant de l'Enfer",
    description:
      "Si vous êtes détruit en dehors de votre plan d'origine, votre âme y retourne. En 1d10 jours, vous pouvez vous reconstituer avec un nouveau corps entièrement guéri.",
  },
  {
    id: 225,
    role: null,
    name: "(Fiélon) Feu de l'Enfer",
    description:
      "Lorsque vous êtes réduit à 0 point de vie, chaque créature à moins de 10ft. de vous doit réussir un jet de sauvegarde de Dextérité ou subir 75 % de dégâts de feu.",
  },
  {
    id: 226,
    role: null,
    name: "(Fiélon) Menteur Naturel",
    description:
      "Vous avez l'avantage à tous les jets de Charisme (Tromperie) et à tout jet de Sagesse (Perception) effectué pour repérer la tromperie.",
  },
  {
    id: 227,
    role: null,
    name: "(Fiélon) Pacte de Sang",
    description:
      "Lorsque vous subissez des dégâts, vous pouvez infliger ces dégâts plutôt à une créature à moins de 60ft. de vous actuellement charmée par vous.",
  },
  {
    id: 228,
    role: null,
    name: "(Fiélon) Protection contre le Bien",
    description:
      "Vous avez l'avantage aux jets de sauvegarde contre les sorts et autres effets magiques lancés par une créature bonne.",
  },
  {
    id: 229,
    role: null,
    name: "(Fiélon) Punir la Vertu",
    description:
      "Lorsque vous frappez une créature bonne avec une attaque, vous infligez des dégâts de feu supplémentaires égaux à votre niveau de combat.",
  },
  {
    id: 230,
    role: null,
    name: "(Fiélon) Rupture des Liens",
    description:
      "Si vous n'êtes pas hors jeu, vous pouvez retourner sur votre plan d'origine.",
  },
  {
    id: 231,
    role: null,
    name: "(Fiélon) Désintégration Totale",
    description:
      "Votre corps se désintègre en poussière lorsque vous mourez, y compris tout ce que vous portiez ou portiez qui avait une origine démoniaque.",
  },
  {
    id: 232,
    role: null,
    name: "(Géant) Bouteur",
    description:
      "Vous infligez le double de dégâts aux objets et aux structures.",
  },
  {
    id: 233,
    role: null,
    name: "(Géant) Effondrement",
    description:
      "Lorsque vous êtes réduit à 0 points de vie, chaque créature dans un rayon de 20ft. doit réussir un jet de sauvegarde de Force ou tomber à terre.",
  },
  {
    id: 234,
    role: null,
    name: "(Géant) Force Écrasante",
    description:
      "Toute créature agrippée par vous subit des dégâts contondants égaux à votre niveau de combat au début de son tour.",
  },
  {
    id: 235,
    role: null,
    name: "(Géant) Appétit Gigantesque",
    description:
      "Vous devez consommer deux fois plus de nourriture et d'eau que la normale pour votre catégorie de taille.",
  },
  {
    id: 236,
    role: null,
    name: "(Géant) Étreinte Inévitable",
    description:
      "Les créatures ont désavantage aux jets de compétence et aux jets de sauvegarde pour échapper à vos prises.",
  },
  {
    id: 237,
    role: null,
    name: "(Géant) Repoussement",
    description:
      "Lorsque vous touchez une créature avec une attaque d'arme de mêlée, la créature doit réussir un jet de sauvegarde de Force ou être repoussée jusqu'à 10ft.",
  },
  {
    id: 238,
    role: null,
    name: "(Géant) Tremblement",
    description:
      "Lorsque vous atterrissez au sol d'une hauteur de 20ft. ou plus, chaque créature dans un rayon de 20ft. de vous doit réussir un jet de sauvegarde de Force ou tomber à terre.",
  },
  {
    id: 239,
    role: null,
    name: "(Géant) Téméraire",
    description:
      "Au début de votre tour, vous pouvez obtenir l'avantage sur tous les jets d'attaque d'arme de mêlée que vous faites jusqu'à la fin de votre tour. Les jets d'attaque contre vous ont ensuite l'avantage jusqu'au début de votre prochain tour.",
  },
  {
    id: 240,
    role: null,
    name: "(Géant) Fracassement de Crâne",
    description:
      "Lorsque vous réduisez une créature à 0 points de vie, la créature doit réussir un jet de sauvegarde de Constitution ou avoir désavantage aux jets de sauvegarde de Constitution jusqu'à ce qu'elle termine un repos long.",
  },
  {
    id: 241,
    role: null,
    name: "(Géant) Compression",
    description:
      "Au début de votre tour, chaque créature agrippée par vous perd un dé de vie non dépensé.",
  },
  {
    id: 242,
    role: null,
    name: "(Géant) Piétinement",
    description:
      "Lorsque vous traversez l'espace d'une créature plus petite, la créature doit réussir un jet de sauvegarde de Dextérité ou subir des dégâts contondants égaux à votre niveau de combat.",
  },
  {
    id: 243,
    role: null,
    name: "(Géant) Fort",
    description: "Vous avez l'avantage aux jets de sauvegarde de Force.",
  },
  {
    id: 244,
    role: null,
    name: "(Géant) Frappe Étourdissante",
    description:
      "Lorsque vous touchez de façon critique une créature avec une attaque d'arme de mêlée, la créature doit réussir un jet de sauvegarde de Constitution ou être étourdie jusqu'à la fin de son prochain tour.",
  },
  {
    id: 245,
    role: null,
    name: "(Géant) Solide",
    description:
      "Vous avez l'avantage aux jets de sauvegarde contre le fait d'être renversé.",
  },
  {
    id: 246,
    role: null,
    name: "(Géant) Peau Épaisse",
    description:
      "Lorsque vous êtes touché de façon critique par une attaque, lancez un d6. Sur un résultat de 5 ou 6, l'attaque est réduite à un coup normal.",
  },
  {
    id: 247,
    role: null,
    name: "(Géant) Crâne Épais",
    description:
      "Vous avez l'avantage aux jets de sauvegarde contre l'étourdissement.",
  },
  {
    id: 248,
    role: null,
    name: "(Géant) Piétinement",
    description:
      "Lorsque vous traversez l'espace d'une créature plus petite, la créature doit réussir un jet de sauvegarde de Force ou tomber à terre.",
  },
  {
    id: 249,
    role: null,
    name: "(Géant) Très Lourd",
    description:
      "Vous comptez comme une catégorie de taille plus grande lorsqu'une créature tente de vous tirer, pousser ou traîner.",
  },
  {
    id: 250,
    role: null,
    name: "(Humanoïde) Armure Ancestrale",
    description:
      "Vous avez l'avantage aux jets de sauvegarde contre les sorts et autres effets magiques.",
  },
  {
    id: 251,
    role: null,
    name: "(Humanoïde) Armes Ancestrales",
    description: "Vos attaques d'arme sont magiques.",
  },
  {
    id: 252,
    role: null,
    name: "(Humanoïde) Armé",
    description:
      "Vous ne pouvez pas être désarmé contre votre volonté à moins d'être incapacité.",
  },
  {
    id: 253,
    role: null,
    name: "(Humanoïde) Diplomate",
    description:
      "Vous avez l'avantage aux jets de Charisme (Persuasion) et de Sagesse (Perspicacité).",
  },
  {
    id: 254,
    role: null,
    name: "(Humanoïde) Résilience Naine",
    description:
      "Vous avez l'avantage aux jets de sauvegarde contre le poison.",
  },
  {
    id: 255,
    role: null,
    name: "(Humanoïde) Portée Étendue",
    description:
      "Pendant votre tour, vous pouvez étendre la portée naturelle de vos armes de 5ft.",
  },
  {
    id: 256,
    role: null,
    name: "(Humanoïde) Guérison Rapide",
    description:
      "Au début de votre tour, si vous avez au moins 1 point de vie, vous regagnez 10% de vos points de vie maximum.",
  },
  {
    id: 257,
    role: null,
    name: "(Humanoïde) Astuce des Gnomes",
    description:
      "Vous avez l'avantage aux jets de sauvegarde d'Intelligence, de Sagesse et de Charisme contre la magie.",
  },
  {
    id: 258,
    role: null,
    name: "(Humanoïde) Agilité des Halfelins",
    description:
      "Vous pouvez traverser l'espace de toute créature de taille plus grande que la vôtre.",
  },
  {
    id: 259,
    role: null,
    name: "(Humanoïde) Solide",
    description:
      "Vous avez l'avantage aux jets de sauvegarde de Force, de Dextérité et de Constitution contre la magie.",
  },
  {
    id: 260,
    role: null,
    name: "(Humanoïde) Chanceux",
    description:
      "Lorsque vous faites un 1 sur le d20 pour un jet d'attaque, un test d'aptitude ou un jet de sauvegarde, vous pouvez relancer le dé. Vous devez utiliser le nouveau résultat.",
  },
  {
    id: 261,
    role: null,
    name: "(Humanoïde) Menaçant",
    description:
      "Vous avez l'avantage aux jets de Charisme (Intimidation) et aux jets de sauvegarde contre la peur.",
  },
  {
    id: 262,
    role: null,
    name: "(Humanoïde) Combattant Naturel",
    description:
      "Vous pouvez bien vous battre avec n'importe quelle arme, y compris les armes improvisées.",
  },
  {
    id: 263,
    role: null,
    name: "(Humanoïde) Tactiques de Groupe",
    description:
      "Pendant votre tour, vous avez l'avantage sur les jets d'attaque contre toute autre créature adjacente à au moins un allié qui n'est pas incapacité.",
  },
  {
    id: 264,
    role: null,
    name: "(Humanoïde) Implacable",
    description:
      "Une fois par repos long, lorsque vous seriez réduit à 0 points de vie, vous êtes plutôt réduit à 1 point de vie.",
  },
  {
    id: 265,
    role: null,
    name: "(Humanoïde) Parler aux Animaux",
    description:
      "Vous pouvez communiquer avec les bêtes comme si vous partagiez une langue.",
  },
  {
    id: 266,
    role: null,
    name: "(Humanoïde) Parler aux Plantes",
    description:
      "Vous pouvez communiquer avec les plantes comme si vous partagiez une langue.",
  },
  {
    id: 267,
    role: null,
    name: "(Humanoïde) Trance",
    description:
      "Vous n'avez pas besoin de dormir. Au lieu de cela, vous méditez profondément, restant semi-conscient, pendant 4 heures par jour. Après vous être reposé de cette manière, vous bénéficiez des mêmes avantages que si vous aviez dormi 8 heures.",
  },
  {
    id: 268,
    role: null,
    name: "(Humanoïde) Vicieux",
    description:
      "Lorsque vous frappez de façon critique une cible avec une attaque d'arme de mêlée, vous infligez des dégâts supplémentaires variant égaux à votre niveau de combat.",
  },
  {
    id: 269,
    role: null,
    name: "(Créature Monstrueuse) Épine Barbée",
    description:
      "Au début de votre tour, vous infligez des dégâts variables égaux à votre niveau de combat à toute créature vous agrippant.",
  },
  {
    id: 270,
    role: null,
    name: "(Créature Monstrueuse) Dévoreur",
    description:
      "Lorsque vous réduisez à 0 points de vie une créature adjacente, vous pouvez dépenser votre réaction pour l'avaler. Votre vitesse est réduite à 0 jusqu'à ce que la créature soit morte, et au début de chacun de vos tours, la créature subit un échec dans un jet de sauvegarde contre la mort. Si vous subissez des dégâts, vous devez réussir un jet de sauvegarde de Constitution avec un DD de 5 + les dégâts subis ou régurgiter la créature dans un espace adjacent libre. Si vous mourez, vous régurgitez automatiquement la créature.",
  },
  {
    id: 271,
    role: null,
    name: "(Créature Monstrueuse) Inévitable",
    description:
      "Vous ignorez les terrains difficiles et les effets magiques ne peuvent pas réduire votre vitesse ou vous contraindre. Vous pouvez dépenser 5ft. de déplacement pour vous échapper de contraintes non magiques ou être agrippé.",
  },
  {
    id: 272,
    role: null,
    name: "(Créature Monstrueuse) Sensibilité à la Lumière",
    description:
      "En plein jour, vous avez désavantage sur tous les jets d'attaque et sur tout jet de Sagesse (Perception) qui repose sur la vue.",
  },
  {
    id: 273,
    role: null,
    name: "(Créature Monstrueuse) Carapace Réfléchissante",
    description:
      "Chaque fois que vous êtes ciblé par un sort de projectile magique, un sort en ligne, ou un sort nécessitant un jet d'attaque à distance, lancez un d6. Sur un résultat de 1 à 5, vous n'êtes pas affecté. Sur un 6, vous n'êtes pas affecté et l'effet est renvoyé au lanceur comme s'il venait de vous, transformant le lanceur en cible.",
  },
  {
    id: 274,
    role: null,
    name: "(Créature Monstrueuse) Régénération",
    description:
      "Au début de votre tour, vous récupérez 10% de vos points de vie maximum. Si vous subissez des dégâts variables, ce trait ne fonctionne pas au début de votre prochain tour. Vous mourez uniquement si vous commencez votre tour avec 0 points de vie et que vous ne pouvez pas vous régénérer.",
  },
  {
    id: 275,
    role: null,
    name: "(Créature Monstrueuse) Choc Magique",
    description:
      "Lorsque vous frappez critique une créature, elle doit réussir un jet de sauvegarde de Constitution ou perdre son plus bas emplacement de sort non dépensé.",
  },
  {
    id: 276,
    role: null,
    name: "(Créature Monstrueuse) Sensibilité à la Lumière du Soleil",
    description:
      "En plein soleil, vous avez désavantage sur les jets d'attaque et les jets de Sagesse (Perception) qui reposent sur la vue.",
  },
  {
    id: 277,
    role: null,
    name: "(Créature Monstrueuse) Tunnelier",
    description:
      "Vous pouvez creuser à travers la roche solide à la moitié de votre vitesse de creusement, créant un tunnel de la moitié de votre taille.",
  },
  {
    id: 278,
    role: null,
    name: "(Créature Monstrueuse) Deux Têtes",
    description:
      "La créature a l'avantage sur les jets de Sagesse (Perception) et sur les jets de sauvegarde contre l'aveuglement, la fascination, la surdité, la peur, l'étourdissement, et l'inconscience.",
  },
  {
    id: 279,
    role: null,
    name: "(Créature Monstrueuse) Armure Contre-Nature",
    description:
      "Vous avez l'avantage sur les jets de sauvegarde contre les sorts et autres effets magiques.",
  },
  {
    id: 280,
    role: null,
    name: "(Créature Monstrueuse) Armes Contre-Nature",
    description: "Vos attaques avec des armes sont magiques.",
  },
  {
    id: 281,
    role: null,
    name: "(Vase) Adhésif",
    description:
      "Si une créature ou un objet de taille égale ou plus petite vous touche, il est agrippé par vous.",
  },
  {
    id: 282,
    role: null,
    name: "(Vase) Amorphe",
    description:
      "Vous pouvez vous déplacer à travers un espace aussi étroit qu'un pouce sans être à l'étroit.",
  },
  {
    id: 283,
    role: null,
    name: "(Vase) Explosif",
    description:
      "Lorsque vous êtes réduit à 0 points de vie, chaque créature dans un rayon de 10ft. doit réussir un jet de sauvegarde de Dextérité ou subir 75% de dégâts d'acide.",
  },
  {
    id: 284,
    role: null,
    name: "(Vase) Camouflage",
    description:
      "Vous êtes invisible lorsque vous êtes complètement immergé dans l'eau.",
  },
  {
    id: 285,
    role: null,
    name: "(Vase) Corrosif",
    description:
      "Toute arme non magique en métal ou en bois qui vous touche est corrodée. Après avoir infligé des dégâts, l'arme subit un malus permanent et cumulatif de -1 aux jets de dégâts. Si le malus tombe à -5, l'arme est détruite. Toute munition non magique en métal ou en bois qui vous touche est détruite après avoir infligé des dégâts. Vous pouvez ronger un bois ou un métal non magique de 2 pouces d'épaisseur en 1 round.",
  },
  {
    id: 286,
    role: null,
    name: "(Vase) Cubique",
    description: "Vous occupez tout votre espace.",
  },
  {
    id: 287,
    role: null,
    name: "(Vase) Dissolvant",
    description:
      "Au début de votre tour, vous infligez des dégâts d'acide égaux à votre niveau de combat à toute créature ou objet que vous agrippez.",
  },
  {
    id: 288,
    role: null,
    name: "(Vase) Engloutissant",
    description:
      "Lorsqu'une créature entre dans votre espace (ou vous entrez dans l'espace d'une créature), elle doit réussir un jet de sauvegarde de Dextérité ou être engloutie. Lorsqu'elle est engloutie, la créature ne peut pas respirer, est entravée et subit 100% de dégâts d'acide au début de chacun de vos tours. La créature peut essayer de s'échapper à son tour en faisant un test de Force.",
  },
  {
    id: 289,
    role: null,
    name: "(Vase) Aspect Liquide",
    description:
      "Tant que vous restez immobile, vous êtes indiscernable d'une mare d'eau.",
  },
  {
    id: 290,
    role: null,
    name: "(Vase) Résistant aux Chocs",
    description: "Vous avez l'avantage aux jets de sauvegarde de Constitution.",
  },
  {
    id: 291,
    role: null,
    name: "(Vase) Glissant",
    description:
      "Vous avez l'avantage aux jets de compétence et aux jets de sauvegarde pour vous échapper d'une prise.",
  },
  {
    id: 292,
    role: null,
    name: "(Vase) Division",
    description:
      "Lorsque vous êtes blessé, vous vous divisez en deux limons distincts. Chaque limon a 50% de vos points de vie actuels et est une catégorie de taille plus petite.",
  },
  {
    id: 293,
    role: null,
    name: "(Vase) Collant",
    description:
      "Les créatures ont un désavantage aux jets de compétence et aux jets de sauvegarde pour échapper à vos prises.",
  },
  {
    id: 294,
    role: null,
    name: "(Vase) Transparent",
    description:
      "Une créature doit réussir un test de Sagesse (Perception) pour vous repérer, même si vous êtes à découvert, tant que vous n'avez ni bougé ni attaqué. Une créature qui tente d'entrer dans votre espace tout en ignorant votre présence est surprise.",
  },
  {
    id: 295,
    role: null,
    name: "(Vase) Sous lesft.",
    description:
      "Vous pouvez entrer dans l'espace de n'importe quelle créature de votre taille ou plus grande. Tant que vous êtes dans l'espace d'une créature, elle ne peut pas prendre l'action de désengagement.",
  },
  {
    id: 296,
    role: null,
    name: "(Plante) Creeper",
    description:
      "Terrain difficile ne vous coûte pas de mouvement supplémentaire.",
  },
  {
    id: 297,
    role: null,
    name: "(Plante) Spores de Détresse",
    description:
      "Lorsque vous subissez des dégâts, toutes les autres créatures du même type dans un rayon de 240ft. peuvent ressentir votre douleur.",
  },
  {
    id: 298,
    role: null,
    name: "(Plante) Racines Enchevêtrantes",
    description:
      "Les ennemis se tenant sur le sol dans un rayon de 10ft. de vous ont un désavantage aux jets de sauvegarde de Dextérité.",
  },
  {
    id: 299,
    role: null,
    name: "(Plante) Apparence Fausse",
    description:
      "Tant que vous restez immobile, vous êtes indiscernable de la végétation environnante.",
  },
  {
    id: 300,
    role: null,
    name: "(Plante) Sol Fertile",
    description:
      "Lorsque vous réduisez une créature à 0 points de vie, vous pouvez dépenser votre réaction pour la semer. Pendant qu'elle est semée, la créature perd un jet de sauvegarde contre la mort au début de chacun de ses tours. Une créature peut passer une action pour enlever les graines.",
  },
  {
    id: 301,
    role: null,
    name: "(Plante) Sol Vivant",
    description:
      "Le sol dans un rayon de 10ft. autour de vous est un terrain difficile. Chaque créature qui commence son tour dans cette zone doit réussir un jet de sauvegarde de Force ou voir sa vitesse réduite à 0 jusqu'au début de son prochain tour.",
  },
  {
    id: 302,
    role: null,
    name: "(Plante) Passer sans laisser de Trace",
    description:
      "Dans votre environnement naturel, vous ne pouvez pas être suivi sauf par des moyens magiques. Vous ne laissez derrière vous aucune trace de votre passage.",
  },
  {
    id: 303,
    role: null,
    name: "(Plante) Épine Empoisonnée",
    description:
      "Lorsque vous infligez un coup critique à une créature avec une attaque, la créature doit réussir un jet de sauvegarde de Constitution ou être empoisonnée jusqu'à la fin de son prochain tour.",
  },
  {
    id: 304,
    role: null,
    name: "(Plante) Réseau Racinaire",
    description:
      "Vous avez un vaste réseau de racines et vous connaissez l'emplacement exact de toute créature en contact avec ces racines.",
  },
  {
    id: 305,
    role: null,
    name: "(Plante) Parfum Apaisant",
    description:
      "Au début de votre tour, chaque créature dans un rayon de 30ft. de vous doit réussir un jet de sauvegarde de Constitution ou tomber inconsciente. Cet effet prend fin après 1 minute ou si la créature subit des dégâts. Si le jet de sauvegarde réussit de 5 ou plus, la créature est immunisée à votre parfum jusqu'à ce qu'elle termine un repos long.",
  },
  {
    id: 306,
    role: null,
    name: "(Plante) Pollen Toxique",
    description:
      "Toute créature qui respire dans un rayon de 30ft. de vous doit faire un jet de sauvegarde de Constitution ou subir des dégâts de poison égaux à votre niveau de combat.",
  },
  {
    id: 307,
    role: null,
    name: "(Plante) Marcheur des Arbres",
    description:
      "Une fois par tour, vous pouvez dépenser 10ft. de votre mouvement pour entrer magiquement dans un arbre vivant à portée et émerger d'un deuxième arbre vivant à 60ft. du premier arbre. Vous apparaîtrez dans un espace inoccupé à 5ft. du deuxième arbre. Les deux arbres doivent être d'au moins une catégorie de taille plus grande que vous.",
  },
  {
    id: 308,
    role: null,
    name: "(Mort-Vivant) Appel de la tombe",
    description:
      "Les créatures dans un rayon de 30ft. autour de vous ont un désavantage sur les jets de sauvegarde contre la mort.",
  },
  {
    id: 309,
    role: null,
    name: "(Mort-Vivant) Contact Décomposant",
    description:
      "Lorsque vous touchez une créature avec une attaque d'arme, vous infligez des dégâts nécrotiques supplémentaires égaux à votre niveau de combat.",
  },
  {
    id: 310,
    role: null,
    name: "(Mort-Vivant) Drain de Vie",
    description:
      "Lorsque vous frappez de façon critique une créature avec une attaque d'arme, la créature doit réussir un jet de sauvegarde de Constitution ou perdre un dé de vie non dépensé.",
  },
  {
    id: 311,
    role: null,
    name: "(Mort-Vivant) Incorporel",
    description:
      "Vous pouvez traverser d'autres créatures et objets comme s'ils étaient un terrain difficile. Vous subissez des dégâts de force égaux à votre niveau de combat si vous terminez votre tour à l'intérieur d'un objet.",
  },
  {
    id: 312,
    role: null,
    name: "(Mort-Vivant) Guérison des Chairs",
    description:
      "Lorsque vous subiriez des dégâts nécrotiques, vous regagnez plutôt autant de points de vie.",
  },
  {
    id: 313,
    role: null,
    name: "(Mort-Vivant) Phylactère",
    description:
      "Si vous êtes détruit, vous réapparaissez à moins de 5ft. de votre phylactère dans 1d10 jours avec un nouveau corps entièrement guéri.",
  },
  {
    id: 314,
    role: null,
    name: "(Mort-Vivant) Possession",
    description:
      "Une humanoïde à laquelle vous êtes adjacent doit réussir un jet de sauvegarde de Charisme ou être possédée par vous. Vous prenez le contrôle complet du corps de la cible jusqu'à ce que a) vous mettiez fin à l'effet, b) la cible meure, ou c) vous soyez expulsé par un sort ou un effet. Si la cible subit des dégâts, vous devez réussir un jet de sauvegarde de Charisme avec un DD de 5 + les dégâts infligés pour conserver la possession, sinon vous êtes expulsé dans un espace inoccupé à moins de 5ft.",
  },
  {
    id: 315,
    role: null,
    name: "(Mort-Vivant) Faucheur d'Âmes",
    description:
      "Lorsque vous réduisez une créature à 0 points de vie, cette créature doit réussir un jet de sauvegarde de Charisme ou avoir son âme fauchée. Une créature fauchée ne peut pas être ramenée à la vie par quelque moyen que ce soit, sauf par un sort de Souhait.",
  },
  {
    id: 316,
    role: null,
    name: "(Mort-Vivant) Maladie de l'Âme",
    description:
      "Lorsqu'une créature vous touche ou vous frappe avec une attaque au corps à corps, elle doit réussir un jet de sauvegarde de Charisme ou être vulnérable aux dégâts nécrotiques jusqu'à la fin de son prochain tour.",
  },
  {
    id: 317,
    role: null,
    name: "(Mort-Vivant) Maladie du Soleil",
    description:
      "En plein soleil, vous avez un désavantage sur les tests d'aptitude, les jets d'attaque et les jets de sauvegarde. Vous mourez si vous passez plus d'une heure en plein soleil direct.",
  },
  {
    id: 318,
    role: null,
    name: "(Mort-Vivant) Immunité au Retournement",
    description:
      "Vous êtes immunisé contre les effets qui retournent les morts-vivants.",
  },
  {
    id: 319,
    role: null,
    name: "(Mort-Vivant) Résistance au Retournement",
    description:
      "Vous avez un avantage sur les jets de sauvegarde contre tout effet qui retourne les morts-vivants.",
  },
  {
    id: 320,
    role: null,
    name: "(Mort-Vivant) Fortitude Indomptable",
    description:
      "Si des dégâts devaient vous réduire à 0 points de vie, effectuez un jet de sauvegarde de Constitution avec un DD de 5 + les dégâts subis (sauf s'il s'agit de dégâts radiants ou d'un coup critique). En cas de réussite, vous tombez à 1 point de vie au lieu de tomber à 0.",
  },
];

export default DEFAULT_TRAITS;
