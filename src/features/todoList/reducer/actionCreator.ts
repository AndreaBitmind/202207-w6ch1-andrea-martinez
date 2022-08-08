import { createAction } from "@reduxjs/toolkit";
import { toDoList } from "../data/data";
import { toDo } from "../models/models";

export const loadTodosTaskActionNew = createAction<toDo[]>("loadTodoList");
loadTodosTaskActionNew(toDoList);
