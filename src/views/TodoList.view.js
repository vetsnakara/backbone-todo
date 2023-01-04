import _ from "underscore";
import { View } from "backbone";

import { TodoView } from "./Todo.view";

const config = {
  tagName: "ul",
  id: "todoList",
};

export class TodoListView extends View {
  initialize() {
    this.model.on("add", this.addTodo, this);
  }

  addTodo(todo) {
    const todoView = new TodoView({
      model: todo,
    });

    this.$el.append(todoView.render().$el);
  }

  render() {
    this.model.each((todo) => {
      this.addTodo(todo);
    });
    return this;
  }
}

_.extend(TodoListView.prototype, config);
