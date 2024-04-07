import Blueprint from "../classes/blueprint.js";
import Component from "./Component.js";

/**
 * A component for a blueprint viewer/editor.
 */
class BlueprintForm extends Component {
  /**
   * Render the blueprint.
   */
  renderComponent() {
    $(this.el).html(Handlebars.templates["BlueprintForm"](this.data));
    $(this.el + " .repeatable-section").each(
      function (index, repeatableSection) {
        this.updateRepeatableFieldNames(repeatableSection);
      }.bind(this)
    );
  }

  /**
   * Attach the blueprint listeners.
   */
  attachListeners() {
    // Update the laboratory blueprint when the form is changed.
    $(this.el).on(
      "change",
      "form",
      function (e) {
        let data = $(e.currentTarget).serializeToJSON({
          associativeArrays: false,
        });
        $(this.el + " form").attr("data-method", data.method);
        $(this.el + " form").attr("data-rank", data.description.rank);
        this.data.blueprint = new Blueprint(data);
        $(this.el).trigger("blueprint:changed");
      }.bind(this)
    );

    // Add a repeatable item.
    $(this.el).on(
      "click",
      ".repeatable-section .card-footer .btn-add",
      function (e) {
        this.addRepeatableItem(
          $(e.currentTarget).closest(".repeatable-section")
        );
      }.bind(this)
    );

    // Delete a repeatable item.
    $(this.el).on(
      "click",
      ".repeatable-item .btn-delete",
      function (e) {
        this.deleteRepeatableItem(
          $(e.currentTarget).closest(".repeatable-item")
        );
      }.bind(this)
    );

    // Move a repeatable item up.
    $(this.el).on(
      "click",
      ".repeatable-item .btn-move-up",
      function (e) {
        this.moveRepeatableItemUp(
          $(e.currentTarget).closest(".repeatable-item")
        );
      }.bind(this)
    );

    // Move a repeatable item down.
    $(this.el).on(
      "click",
      ".repeatable-item .btn-move-down",
      function (e) {
        this.moveRepeatableItemDown(
          $(e.currentTarget).closest(".repeatable-item")
        );
      }.bind(this)
    );

    // Show/hide custom fields based on a select toggle.
    $(this.el).on(
      "change",
      "select.custom-toggle",
      function (e) {
        let element = $(e.currentTarget);
        let section = element.closest(".form-group").parent();
        let items = $(section).find(".custom");
        if (element.val() == "custom") {
          $(items).show();
        } else {
          $(items).hide();
        }
      }.bind(this)
    );

    $(this.el + " select.custom-toggle").each(function (i, element) {
      let section = $(element).closest(".form-group").parent();
      let items = $(section).find(".custom");
      if ($(element).val() == "custom") {
        $(items).show();
      } else {
        $(items).hide();
      }
    });

    // On accordion show/hide, dispatch event.
    $(this.el).on(
      "hide.bs.collapse show.bs.collapse",
      ".accordion .collapse",
      function (e) {
        let id = e.currentTarget.id;
        this.data.display[id] = e.type == "show";
        $(this.el).trigger("display:changed");
      }.bind(this)
    );

    // Swap ability rankings when select value changes
    $(this.el).on(
      "change",
      ".quickstart-only.unique-values select",
      function (e) {
        let oldValue = $(this).attr("ability");
        let newValue = $(this).val();
        let elements = $(this)
          .closest(".quickstart-only")
          .find("select[ability='" + newValue + "']");
        elements.attr("ability", oldValue);
        elements.val(oldValue);
        $(this).attr("ability", newValue);
      }
    );

    // Change the trait filter
    $(this.el).on("change", "#modal-blueprint-traits select", function () {
      $(this).closest(".modal-body").attr("filter", $(this).val());
    });

    $(this.el).on("hidden.bs.modal", "#modal-blueprint-traits", function (e) {
      $("#modal-blueprint-traits select").val("any");
      $("#modal-blueprint-traits select").trigger("change");
      $("#modal-blueprint-traits .form-check-input:checked").prop(
        "checked",
        false
      );
    });

    // Add selected traits to laboratory blueprint
    $(this.el).on(
      "click",
      "#modal-blueprint-traits .btn-confirm",
      function (e) {
        $("#modal-blueprint-traits .form-check-input:checked").each(
          function (index, checkbox) {
            let trait = this.data.traits.find((x) => x.id == $(checkbox).val());
            $("#blueprint-trait .card-body").append(
              Handlebars.templates["BlueprintFormTraitAction"]({
                // name: trait.role
                //   ? "(" + Helpers.capitalise(trait.role) + ") " + trait.name
                //   : trait.name,
                name: trait.name,
                rarity: trait.rarity,
                type: trait.type,
                detail: trait.description,
              })
            );
          }.bind(this)
        );
        this.updateRepeatableFieldNames(
          $("#blueprint-trait").closest(".repeatable-section")
        );
        $(this.el + " form").change();
        $("#modal-blueprint-traits .close").click();
      }.bind(this)
    );

    // Change the free action filter
    $(this.el).on(
      "change",
      "#modal-blueprint-free-actions select",
      function () {
        $(this).closest(".modal-body").attr("filter", $(this).val());
      }
    );

    $(this.el).on(
      "hidden.bs.modal",
      "#modal-blueprint-free-actions",
      function (e) {
        $("#modal-blueprint-free-actions select").val("any");
        $("#modal-blueprint-free-actions select").trigger("change");
        $("#modal-blueprint-free-actions .form-check-input:checked").prop(
          "checked",
          false
        );
      }
    );

    // Add selected free actions to laboratory blueprint
    $(this.el).on(
      "click",
      "#modal-blueprint-free-actions .btn-confirm",
      function (e) {
        $("#modal-blueprint-free-actions .form-check-input:checked").each(
          function (index, checkbox) {
            let freeAction = this.data.freeActions.find(
              (x) => x.id == $(checkbox).val()
            );
            $("#blueprint-free-action .card-body").append(
              Handlebars.templates["BlueprintFormTraitAction"]({
                name: freeAction.name,
                rarity: freeAction.rarity,
                type: freeAction.type,
                detail: freeAction.description,
              })
            );
          }.bind(this)
        );
        this.updateRepeatableFieldNames(
          $("#blueprint-free-action").closest(".repeatable-section")
        );
        $(this.el + " form").change();
        $("#modal-blueprint-free-actions .close").click();
      }.bind(this)
    );

    // Change the bonus action filter
    $(this.el).on(
      "change",
      "#modal-blueprint-bonus-actions select",
      function () {
        $(this).closest(".modal-body").attr("filter", $(this).val());
      }
    );

    $(this.el).on(
      "hidden.bs.modal",
      "#modal-blueprint-bonus-actions",
      function (e) {
        $("#modal-blueprint-bonus-actions select").val("any");
        $("#modal-blueprint-bonus-actions select").trigger("change");
        $("#modal-blueprint-bonus-actions .form-check-input:checked").prop(
          "checked",
          false
        );
      }
    );

    // Add selected bonus actions to laboratory blueprint
    $(this.el).on(
      "click",
      "#modal-blueprint-bonus-actions .btn-confirm",
      function (e) {
        $("#modal-blueprint-bonus-actions .form-check-input:checked").each(
          function (index, checkbox) {
            let bonusAction = this.data.bonusActions.find(
              (x) => x.id == $(checkbox).val()
            );
            $("#blueprint-bonus-action .card-body").append(
              Handlebars.templates["BlueprintFormTraitAction"]({
                name: bonusAction.name,
                rarity: bonusAction.rarity,
                type: bonusAction.type,
                detail: bonusAction.description,
              })
            );
          }.bind(this)
        );
        this.updateRepeatableFieldNames(
          $("#blueprint-bonus-action").closest(".repeatable-section")
        );
        $(this.el + " form").change();
        $("#modal-blueprint-bonus-actions .close").click();
      }.bind(this)
    );

    // Change the action filter
    $(this.el).on("change", "#modal-blueprint-actions select", function () {
      $(this).closest(".modal-body").attr("filter", $(this).val());
    });

    $(this.el).on("hidden.bs.modal", "#modal-blueprint-actions", function (e) {
      $("#modal-blueprint-actions select").val("any");
      $("#modal-blueprint-actions select").trigger("change");
      $("#modal-blueprint-actions .form-check-input:checked").prop(
        "checked",
        false
      );
    });

    // Add selected actions to laboratory blueprint
    $(this.el).on(
      "click",
      "#modal-blueprint-actions .btn-confirm",
      function (e) {
        $("#modal-blueprint-actions .form-check-input:checked").each(
          function (index, checkbox) {
            let action = this.data.actions.find(
              (x) => x.id == $(checkbox).val()
            );
            $("#blueprint-action .card-body").append(
              Handlebars.templates["BlueprintFormTraitAction"]({
                name: action.name,
                rarity: action.rarity,
                type: action.type,
                detail: action.description,
              })
            );
          }.bind(this)
        );
        this.updateRepeatableFieldNames(
          $("#blueprint-action").closest(".repeatable-section")
        );
        $(this.el + " form").change();
        $("#modal-blueprint-actions .close").click();
      }.bind(this)
    );

    // Change the reaction filter
    $(this.el).on("change", "#modal-blueprint-reactions select", function () {
      $(this).closest(".modal-body").attr("filter", $(this).val());
    });

    $(this.el).on(
      "hidden.bs.modal",
      "#modal-blueprint-reactions",
      function (e) {
        $("#modal-blueprint-reactions select").val("any");
        $("#modal-blueprint-reactions select").trigger("change");
        $("#modal-blueprint-reactions .form-check-input:checked").prop(
          "checked",
          false
        );
      }
    );

    // Add selected reactions to laboratory blueprint
    $(this.el).on(
      "click",
      "#modal-blueprint-reactions .btn-confirm",
      function (e) {
        $("#modal-blueprint-reactions .form-check-input:checked").each(
          function (index, checkbox) {
            let reaction = this.data.reactions.find(
              (x) => x.id == $(checkbox).val()
            );
            $("#blueprint-reaction .card-body").append(
              Handlebars.templates["BlueprintFormTraitAction"]({
                name: reaction.name,
                rarity: reaction.rarity,
                type: reaction.type,
                detail: reaction.description,
              })
            );
          }.bind(this)
        );
        this.updateRepeatableFieldNames(
          $("#blueprint-reaction").closest(".repeatable-section")
        );
        $(this.el + " form").change();
        $("#modal-blueprint-reactions .close").click();
      }.bind(this)
    );
  }

  /**
   * Adds a new item to a repeatable section.
   * @param {object} repeatableSection - A repeatable section with a data-template attribute.
   */
  addRepeatableItem(repeatableSection) {
    let template = repeatableSection.data("template");
    repeatableSection
      .find(".card-body")
      .append(Handlebars.templates[template]());
    let element = repeatableSection.find(".card-body > :last-child");
    $(element).find(".dropdown-toggle").attr("disabled", true);
    $(element)
      .hide()
      .slideDown("fast", function () {
        $(element).find(".dropdown-toggle").attr("disabled", false);
      });
    this.updateRepeatableFieldNames(repeatableSection);
    $(this.el + " form").change();
  }

  /**
   * Deletes an item from a repeatable section.
   * @param {object} repeatableItem - The item to delete.
   */
  deleteRepeatableItem(repeatableItem) {
    let repeatableSection = repeatableItem.closest(".repeatable-section");
    repeatableItem.addClass("deleting");
    repeatableItem.find(".dropdown-toggle").attr("disabled", true);
    repeatableItem.slideUp(
      "fast",
      function () {
        repeatableItem.remove();
        this.updateRepeatableFieldNames(repeatableSection);
        $(this.el + " form").change();
      }.bind(this)
    );
  }

  /**
   * Moves a repeatable item up one rank in the list.
   * @param {object} repeatableItem - The item to move.
   */
  moveRepeatableItemUp(repeatableItem) {
    let repeatableSection = repeatableItem.closest(".repeatable-section");
    repeatableItem.prev().insertAfter(repeatableItem);
    this.updateRepeatableFieldNames(repeatableSection);
    $(this.el + " form").change();
  }

  /**
   * Moves a repeatable item down one rank in the list.
   * @param {object} repeatableItem - The item to move.
   */
  moveRepeatableItemDown(repeatableItem) {
    let repeatableSection = repeatableItem.closest(".repeatable-section");
    repeatableItem.next().insertBefore(repeatableItem);
    this.updateRepeatableFieldNames(repeatableSection);
    $(this.el + " form").change();
  }

  /**
   * Updates all form inputs in a repeatable section to have the correct name/ids for json parsing.
   * @param {object} repeatableSection - The section to update.
   */
  updateRepeatableFieldNames(repeatableSection) {
    let path = $(repeatableSection).data("path");
    let repeatableItems = $(repeatableSection).find(
      ".repeatable-item:not(.deleting)"
    );
    $(repeatableItems).each(function (i, repeatableItem) {
      $(repeatableItem)
        .find("select, input, textarea")
        .each(function (j, element) {
          let name = $(element).data("name");
          if (name != undefined) {
            $(element).attr("name", path + "[" + i + "]." + name);
          }
        });
    });
    $(repeatableSection)
      .find(".card-header .badge")
      .html(repeatableItems ? repeatableItems.length : 0);
  }

  /**
   * Sets the blueprint/display details and re-renders the component.
   * @param {object} blueprint - A blueprint entity.
   * @param {object} display - The form display settings.
   */
  setBlueprintAndDisplay(blueprint, display) {
    this.data.blueprint = blueprint;
    this.data.display = display;
    this.render();
  }
}

export default BlueprintForm;
