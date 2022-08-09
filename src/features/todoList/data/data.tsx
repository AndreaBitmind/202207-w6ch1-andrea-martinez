import { toDo } from "../models/models";

export const toDoListArray: toDo[] = [
  {
    id: 1,
    name: "comprar fruta",
    done: false,
  },
  {
    id: 2,
    name: "depilación",
    done: false,
  },
  {
    id: 3,
    name: "recoger paquete",
    done: false,
  },
];

export const newTaskt: Partial<toDo> = {
  name: "comprar fruta",
  done: false,
};

export const newTasktModified: toDo = {
  id: 4,
  name: "comprar fruta",
  done: false,
};

export const idTodelete = 1;
