import { toDo } from "../../models/models";
import { ActionTypes } from "./actionTypes";

export interface Anyaction {
  type: any;
}
export interface UnknownAction extends Anyaction {
  type: string;
}

export interface Action extends Anyaction {
  type: ActionTypes;
  payload: toDo;
}
