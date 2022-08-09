import { toDo } from "../models/models";
import { loadTodosTaskActionNew } from "./actionCreator";

describe("Given an action creator function", () => {
  describe("When it's invoked with a list of tasks as a payload and 'loadTodoList' as a type", () => {
    test("It should return an action with these two properties", () => {
      const todoListTestPayload: toDo[] = [
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

      const expectedAction = {
        type: "tasks@load",
        payload: todoListTestPayload,
      };

      const expectedResult = loadTodosTaskActionNew(todoListTestPayload);

      expect(expectedAction).toEqual(expectedResult);
    });
  });
});
