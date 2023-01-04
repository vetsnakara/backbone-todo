import _ from "underscore";
import { Model } from "backbone";

const config = {
  urlRoot: "https://jsonplaceholder.typicode.com/todos",
  defaults: {
    completed: false,
  },
};

export class Todo extends Model {
  validate({ title }) {
    if (!title) {
      return "Title is required";
    }
  }

  toggle() {
    this.set("completed", !this.get("completed"));
    this.save();
  }
}

_.extend(Todo.prototype, config);
