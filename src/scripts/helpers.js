import "./templates.js";

/**
 * Common helpers and handlebars functions.
 */
const Helpers = (function () {
  /**
   * Initialise the handlebars helpers.
   */
  function initialise() {
    // Set list of handlebars partials
    Handlebars.partials = Handlebars.templates;

    const savingThrowMap = {
      str: "For",
      dex: "Dex",
      con: "Con",
      int: "Int",
      wis: "Sag",
      cha: "Cha",
    };

    // Helpers used by the blueprint form

    Handlebars.registerHelper("ifCond", function (v1, v2, options) {
      if (v1 === v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    });

    Handlebars.registerHelper("divide", function (a, b) {
      return a / b;
    });

    Handlebars.registerHelper("setValue", function (value) {
      return value == undefined || value == null
        ? ""
        : 'value="' + value.toString().replace(/"/g, "'") + '"';
    });

    Handlebars.registerHelper("customToggle", function (state) {
      return state == undefined || state == null || state != "custom"
        ? "style='display: none'"
        : "";
    });

    Handlebars.registerHelper("selected", function (key, value) {
      return key == value ? "selected" : "";
    });

    Handlebars.registerHelper("selectedDefault", function (key, value) {
      return key == value || key == null ? "selected" : "";
    });

    Handlebars.registerHelper("checked", function (key, value) {
      return key == value ? "checked" : "";
    });

    Handlebars.registerHelper("fmtTextarea", function (value) {
      return value ? value.replace(/\r\n|\n/g, "&#10;") : null;
    });

    Handlebars.registerHelper("fmtModifier", function (value) {
      return (value >= 0 ? "+" : "−") + Math.abs(value);
    });

    Handlebars.registerHelper("fmtCapitalise", function (text) {
      return capitalise(text);
    });

    Handlebars.registerHelper("fmtFormatDamages", function (text) {
      let damageMap = {
        acid: "Acide",
        bludgeoning: "Contondant",
        cold: "Froid",
        fire: "Feu",
        force: "Force",
        lightning: "Foudre",
        necrotic: "Nécrotique",
        piercing: "Perforant",
        poison: "Poison",
        psychic: "Psychique",
        radiant: "Radieux",
        slashing: "Tranchant",
        thunder: "Tonnerre",
      };
      return damageMap[text];
    });

    Handlebars.registerHelper("fmtFormatConditions", function (text) {
      let conditionMap = {
        feeble: "Affaibli",
        starving: "Affamé",
        grappled: "Agrippé",
        deafened: "Assourdi",
        prone: "À terre",
        blinded: "Aveuglé",
        banished: "Banni",
        charmed: "Charmé",
        dazed: "Confus",
        custom: "Custom",
        decaying: "Décomposition",
        dehydrated: "Déshydraté",
        disoriented: "Désorienté",
        frightened: "Effrayé",
        poisoned: "Empoisonné",
        restrained: "Entravé",
        swarmed: "Essaimé",
        exhaustion: "Épuisement",
        stunned: "Étourdi",
        exposed: "Exposé",
        fatigued: "Fatigué",
        incapacitated: "Incapable d'agir",
        unconscious: "Inconscient",
        invisible: "Invisible",
        bound: "Lié",
        cursed: "Maudit",
        paralyzed: "Paralysé",
        stinking: "Puant",
        petrified: "Pétrifié",
        slowed: "Ralenti",
        silenced: "Réduit au silence",
        bleeding: "Saignement",
        transformed: "Transformé",
        vulnerable: "Vulnérable",
      };

      return conditionMap[text] ? conditionMap[text] : capitalise(text);
    });

    Handlebars.registerHelper("fmtFormatLanguage", function (text) {
      let languageMap = {
        abyssal: "Abyssal",
        celestial: "Céleste",
        common: "Commun",
        deepspeech: "Profond",
        draconic: "Draconique",
        dwarvish: "Nain",
        elvish: "Elfique",
        giant: "Géant",
        gnomish: "Gnome",
        goblin: "Gobelin",
        halfling: "Halfelin",
        infernal: "Infernal",
        orc: "Orque",
        primordial: "Primordial",
        sylvan: "Sylvestre",
        undercommon: "Commun des profondeurs",
        all: "Toutes les langues",
      };
      return languageMap[text];
    });

    Handlebars.registerHelper("fmtFormatRank", function (text) {
      let rankMap = {
        minion: "Sbire",
        standard: "Standard",
        elite: "Élite",
        solo: "Solo",
      };
      return rankMap[text];
    });

    Handlebars.registerHelper("fmtFormatRole", function (text) {
      let roleMap = {
        controller: "Contrôleur",
        defender: "Défenseur",
        lurker: "Rôdeur",
        scout: "Éclaireur",
        sniper: "Sniper",
        striker: "Assaillant",
        supporter: "Soutien",
      };
      return roleMap[text];
    });

    Handlebars.registerHelper("fmtFormatSkill", function (text) {
      let skillMap = {
        acrobatics: "Acrobaties",
        animalHandling: "Dressage",
        arcana: "Arcanes",
        athletics: "Athlétisme",
        deception: "Tromperie",
        history: "Histoire",
        insight: "Perspicacité",
        intimidation: "Intimidation",
        investigation: "Investigation",
        medicine: "Médecine",
        nature: "Nature",
        perception: "Perception",
        performance: "Performance",
        persuasion: "Persuasion",
        religion: "Religion",
        sleightOfHand: "Escamotage",
        stealth: "Discrétion",
        survival: "Survie",
      };
      return skillMap[text];
    });

    Handlebars.registerHelper("fmtLocaleString", function (value) {
      return Number(value).toLocaleString();
    });

    Handlebars.registerHelper(
      "fmtMonsterDescription",
      function (size, type, tags, alignment) {
        return formatMonsterDescription(size, type, tags, alignment);
      }
    );

    Handlebars.registerHelper("fmtVaultCell", function (value) {
      return value == "—" ? "<span style='opacity:0.25'>—</span>" : value;
    });

    Handlebars.registerHelper("fmtMonsterSpeeds", function (speeds) {
      let output = "";
      speeds.forEach(function (speed, index) {
        switch (speed.type) {
          case "normal":
          case "other":
            output += speed.value;
            break;
          case "fly":
            output += "Vol " + speed.value;
            break;
          case "swim":
            output += "Nage " + speed.value;
            break;
          case "climb":
            output += "Escalade " + speed.value;
            break;
          case "burrow":
            output += "Creusement " + speed.value;
            break;
          default:
            output += speed.type + " " + speed.value;
            break;
        }
        if (index < speeds.length - 1) {
          output += ", ";
        }
      });
      return output;
    });

    Handlebars.registerHelper("fmtMonsterSenses", function (senses) {
      let output = "";
      senses.forEach(function (sense, index) {
        switch (sense.type) {
          case "other":
            output += sense.value;
            break;
          case "blindsight":
            output += "Vision aveugle " + sense.value;
            break;
          case "darkvision":
            output += "Vision dans le noir " + sense.value;
            break;
          case "tremorsense":
            output += "Détection des vibrations " + sense.value;
            break;
          case "truesight":
            output += "Vraie vision " + sense.value;
            break;
          case "passive Perception":
            output += "Perception passive " + sense.value;
            break;
          default:
            output += sense.type + " " + sense.value;
            break;
        }
        if (index < senses.length - 1) {
          output += ", ";
        }
      });
      return output;
    });

    Handlebars.registerHelper(
      "fmtMonsterSavingThrows",
      function (savingThrows) {
        let output = "";
        let count = 0;
        ["str", "dex", "con", "int", "wis", "cha"].forEach(function (
          attribute
        ) {
          let save = savingThrows.find((x) => x.ability == attribute);
          if (save) {
            output +=
              savingThrowMap[save] +
              " " +
              (save.modifier >= 0 ? "+" : "−") +
              Math.abs(save.modifier);
            count++;
            if (count < savingThrows.length) {
              output += ", ";
            }
          }
        });
        return output;
      }
    );

    Handlebars.registerHelper(
      "fmtMonsterSavingThrowsQuickstart",
      function (savingThrows) {
        let output = "";
        let group = groupBy(savingThrows, (s) => s.modifier);
        let order = Object.keys(group)
          .map((x) => Number(x))
          .sort(function (a, b) {
            return b - a;
          });
        order.forEach(function (key, i) {
          group[key].forEach(function (save, j) {
            output += savingThrowMap[save.ability];
            if (j < group[key].length - 1) {
              output += "/";
            } else {
              output +=
                " " +
                (save.modifier >= 0 ? "+" + save.modifier : save.modifier);
            }
          });
          if (i < order.length - 1) {
            output += ", ";
          }
        });
        return output;
      }
    );

    Handlebars.registerHelper(
      "fmtMonsterSavingThrowsQuickstartActive",
      function (savingThrows) {
        let output = "<i>(";
        let group = groupBy(savingThrows, (s) => s.modifier);
        let order = Object.keys(group)
          .map((x) => Number(x))
          .sort(function (a, b) {
            return b - a;
          });
        order.forEach(function (key, i) {
          group[key].forEach(function (save, j) {
            output += savingThrowMap[save.ability];
            if (j < group[key].length - 1) {
              output += "/";
            } else {
              output += ")</i> DC " + save.modifier;
            }
          });
          if (i < order.length - 1) {
            output += ", <i>(";
          }
        });
        return output;
      }
    );

    Handlebars.registerHelper(
      "fmtMonsterSavingThrowsQuickstartActiveGMBinder",
      function (savingThrows) {
        let output = "_(";
        let group = groupBy(savingThrows, (s) => s.modifier);
        let order = Object.keys(group)
          .map((x) => Number(x))
          .sort(function (a, b) {
            return b - a;
          });
        order.forEach(function (key, i) {
          group[key].forEach(function (save, j) {
            output += savingThrowMap[save.ability];
            if (j < group[key].length - 1) {
              output += "/";
            } else {
              output += ")_ DC " + save.modifier;
            }
          });
          if (i < order.length - 1) {
            output += ", _(";
          }
        });
        return output;
      }
    );

    Handlebars.registerHelper("fmtGMBinderMarkdown", function (text) {
      let output = text;
      output = output.replace(/<\/?b>/g, "**");
      output = output.replace(/<\/?i>/g, "_");
      output = output.replace(
        /<span class="line-break">&nbsp;<\/span>/g,
        "\n> "
      );
      return output;
    });
  }

  /**
   * Capitalise a string.
   * @param {string} text - A string to capitalise.
   * @return {string} A capitalised string.
   */
  function capitalise(text) {
    return text && text.length > 0
      ? text.charAt(0).toUpperCase() + text.slice(1)
      : null;
  }

  function groupBy(xs, f) {
    return xs.reduce(
      (r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r),
      {}
    );
  }

  /**
   * Sanitise a string to a safe filename.
   * Original src: https://github.com/parshap/node-sanitize-filename/blob/master/index.js
   * @param {string} filename - The target filename.
   * @returns {string} - A sanitised string (max length 200).
   */
  function sanitiseFilename(filename) {
    let illegalRe = /[\/\?<>\\:\*\|":]/g;
    let controlRe = /[\x00-\x1f\x80-\x9f]/g;
    let reservedRe = /^\.+$/;
    let windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
    let windowsTrailingRe = /[\. ]+$/;
    let output = filename
      .replace(illegalRe, "")
      .replace(controlRe, "")
      .replace(reservedRe, "")
      .replace(windowsReservedRe, "")
      .replace(windowsTrailingRe, "");
    return output.substring(0, Math.min(200, output.length));
  }

  /**
   * Formats monster description details into a standarised string.
   * @param {string} size - The monster's size.
   * @param {string} type - The monster's type.
   * @param {string} tags - The monster's tags.
   * @param {string} alignment - The monster's alignmnet.
   * @returns {string} - The monster description.
   */
  function formatMonsterDescription(size, type, tags, alignment) {
    let output = "";
    let sizeMap = {
      tiny: " de taille TP",
      small: " de taille P",
      medium: " de taille M",
      large: " de taille G",
      huge: " de taille TG",
      gargantuan: " de taille Gig",
    };

    let typeMap = {
      aberration: "Aberration",
      beast: "Bête",
      celestial: "Céleste",
      construct: "Artificiel",
      dragon: "Dragon",
      elemental: "Élémentaire",
      fey: "Fée",
      fiend: "Fiélon",
      giant: "Géant",
      humanoid: "Humanoïde",
      monstrosity: "Monstruosité",
      ooze: "Vase",
      plant: "Plante",
      undead: "Mort-vivant",
    };

    // let alignmentMap = {
    //   "chaotic good": "Chaotique Bon",
    //   "chaotic neutral": "Chaotique Neutre",
    //   "chaotic evil": "Chaotique Mauvais",
    //   "neutral good": "Neutre Bon",
    //   neutral: "Neutre",
    //   "neutral evil": "Neutre Mauvais",
    //   "lawful good": "Loyal Bon",
    //   "lawful neutral": "Loyal Neutre",
    //   "lawful evil": "Loyal Mauvais",
    //   unaligned: "Non aligné",
    // };

    if (type != null) {
      if (output.length != 0) {
        output += " ";
      }
      output += typeMap[type];
    }
    if (size != null) {
      output += sizeMap[size];
    }
    if (tags != null && tags.length > 0) {
      if (output.length != 0) {
        output += " ";
      }
      output += "(";
      tags.forEach(function (tag, index) {
        output += tag;
        if (index < tags.length - 1) {
          output += ", ";
        }
      });
      output += ")";
    }
    // if (alignment != null) {
    //   if (output.length != 0) {
    //     output += ", ";
    //   }
    //   output += alignmentMap[alignment];
    // }
    return output;
  }

  /**
   * Dispatches a new custom event.
   * @param {string} name - The name of the new event.
   * @param {object} details - Data we wish to send with the event.
   */
  function dispatchEvent(name, details) {
    document.dispatchEvent(new CustomEvent(name, { detail: details }));
  }

  return {
    initialise: initialise,
    capitalise: capitalise,
    sanitiseFilename: sanitiseFilename,
    dispatchEvent: dispatchEvent,
    formatMonsterDescription: formatMonsterDescription,
  };
})();

export default Helpers;
