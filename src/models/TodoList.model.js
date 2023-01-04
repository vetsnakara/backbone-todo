import _ from "underscore";
import { nanoid } from "nanoid";

import { Collection } from "backbone";
import { Todo } from "./Todo.model";

const config = {
  model: Todo,
  url: "https://jsonplaceholder.typicode.com/todos",
};

export class TodoList extends Collection {
  addTodo(title) {
    const todo = new Todo({ title });
    this.create(todo);
  }
}

_.extend(TodoList.prototype, config);
