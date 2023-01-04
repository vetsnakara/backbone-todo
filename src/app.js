import _ from "underscore";
import Twig from "twig";
import { View } from "backbone";

import { TodoList } from "./models/TodoList.model";

import { AddTodo } from "./views/AddTodo.view";
import { TodoListView } from "./views/TodoList.view";

_.extend(View.prototype, {
  tpl: {
    todo: Twig.twig({
      data: $("#todoTpl").html(),
    }),
    addTodo: Twig.twig({
      data: $("#addTodoTpl").html(),
    }),
  },
});

const todoList = new TodoList();

todoList.fetch().done(() => {
  const addTodoView = new AddTodo({
    model: todoList,
  });

  const todoListView = new TodoListView({
    model: todoList,
  });

  const $addTodo = addTodoView.render().$el;
  const $todoList = todoListView.render().$el;

  $("#root").append($addTodo, $todoList);
});
