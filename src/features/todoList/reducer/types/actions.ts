import { toDo } from "../../models/models";
import { ActionType } from "./actionTypes";

export interface Anyaction {
  type: any;
}
export interface UnknownAction extends Anyaction {
  type: string;
}

export interface Action extends Anyaction {
  type: ActionType;
  payload: toDo;
}
