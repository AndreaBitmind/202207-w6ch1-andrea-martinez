import { createReducer } from "@reduxjs/toolkit";
import { toDo } from "../models/models";

const initialState: toDo[] = [
  {
    id: 0,
    name: "",
    done: false,
  },
];

export const todoListReducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase((state: toDo[]) => [...state]);
});
