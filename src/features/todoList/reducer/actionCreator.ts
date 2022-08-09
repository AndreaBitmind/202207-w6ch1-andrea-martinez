import { createAction } from "@reduxjs/toolkit";
import { toDo } from "../models/models";
import { ActionTypes } from "./types/actionTypes";

export const loadTodosTaskActionNew = createAction<toDo[]>(
  ActionTypes.tasksLoad
);

export const createTaskAction = createAction<toDo>(ActionTypes.tasksCreate);

export const updateTaskAction = createAction<Partial<toDo>>(
  ActionTypes.tasksUpdate
);

export const deleteTaskAction = createAction<toDo["id"]>(
  ActionTypes.tasksDelete
);
