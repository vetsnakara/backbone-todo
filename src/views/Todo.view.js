import _ from "underscore";

import { View } from "backbone";

const config = {
  tagName: "li",
  events: {
    "click [data-content='toggle']": "onClickToggle",
    "click [data-action='remove']": "onClickRemove",
  },
};

export class TodoView extends View {
  initialize() {
    this.model.on("remove", this.remove, this);
    this.model.on("change", this.render, this);
  }

  onClickRemove() {
    this.model.destroy();
  }

  onClickToggle() {
    this.model.toggle();
  }

  render() {
    const data = this.model.toJSON();
    const { id, completed } = data;

    const content = this.tpl.todo.render(data);

    this.$el
      .html(content)
      .attr("data-id", id)
      .toggleClass("completed", completed);

    return this;
  }
}

_.extend(TodoView.prototype, config);
