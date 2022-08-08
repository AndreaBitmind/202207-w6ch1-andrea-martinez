import { toDo } from "../models/models";
import { todoListReducer } from "./todoList.reducer";
import { UnknownAction } from "./types/actions";

describe("Given a reducer function", () => {
  describe("When it's invoked with an unknown action", () => {
    test("Then it should return the previous state as the new one", () => {
      const UnknownActionTest: UnknownAction = { type: "holi" };
      const todoListTest: toDo[] = [
        {
          id: 1,
          name: "spokemons",
          done: false,
        },
        {
          id: 2,
          name: "digimons",
          done: false,
        },
      ];

      const expectedListTest = todoListReducer(todoListTest, UnknownActionTest);

      expect(expectedListTest).toEqual(todoListTest);
    });
  });
});
