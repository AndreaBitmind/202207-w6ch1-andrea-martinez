import { createReducer } from "@reduxjs/toolkit";
import { toDo } from "../models/models";
import * as actionCreator from "./actionCreator";

const initialState: toDo[] = [
  {
    id: 0,
    name: "",
    done: false,
  },
];

export const todoListReducer = createReducer(initialState, (builder) => {
  builder.addCase(
    actionCreator.loadTodosTaskActionNew,
    (_state: toDo[], action) => action.payload
  );
  builder.addCase(actionCreator.createTaskAction, (state, action) => [
    ...state,
    action.payload,
  ]);
  builder.addCase(actionCreator.updateTaskAction, (state, action) =>
    state.map((item) =>
      item.id !== action.payload.id ? item : { ...item, ...action.payload }
    )
  );
  builder.addCase(actionCreator.deleteTaskAction, (state, action) =>
    state.filter((item) => item.id !== action.payload)
  );
  builder.addDefaultCase((toDoNewstate: toDo[]) => [...toDoNewstate]);
});
