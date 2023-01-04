import _ from "underscore";

import { View } from "backbone";

const config = {
  events: {
    "click [data-action='add']": "onClickAdd",
    "keypress [data-content='input']": "onInput",
  },
};

export class AddTodo extends View {
  initialize() {
    this.model.on("add");
  }

  onInput({ key }) {
    if (key !== "Enter") return;
    this.onClickAdd();
  }

  onClickAdd() {
    const $input = this.$("input");

    const title = $input.val();
    if (!title.trim()) return;

    this.model.addTodo(title);

    $input.val("").focus();
  }

  render() {
    const content = this.tpl.addTodo.render();

    this.$el.append(content);

    return this;
  }
}

_.extend(AddTodo.prototype, config);
