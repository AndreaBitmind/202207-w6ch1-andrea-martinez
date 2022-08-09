import { toDo } from "../models/models";
import { todoListReducer } from "./todoList.reducer";
import { UnknownAction } from "./types/actions";

describe("Given a reducer function", () => {
  const previousTodoListTest: toDo[] = [
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

  describe("When it's invoked with an unknown action", () => {
    test("Then it should return the previous state as the new one", () => {
      const UnknownActionTest: UnknownAction = { type: "holi" };

      const expectedListTest = todoListReducer(
        previousTodoListTest,
        UnknownActionTest
      );

      expect(expectedListTest).toEqual(previousTodoListTest);
    });
  });

  describe("When it's invoked with a 'loadTodosTasksActionNew' and a list of tasks", () => {
    test("Then it should return an equal list", () => {
      const testList: toDo[] = [
        {
          id: 1,
          name: "cucharas",
          done: false,
        },
        {
          id: 2,
          name: "tenedores",
          done: false,
        },
      ];

      const actionLoadTest = { type: "tasks@load", payload: testList };

      const expectResult = todoListReducer(
        previousTodoListTest,
        actionLoadTest
      );

      expect(expectResult).toEqual(testList);
    });
  });

  describe("When it's invoked with a 'createTaskAction' and a list of tasks", () => {
    test("Then it should return the previous task-list with the new one", () => {
      const taskCreateTest = {
        id: 1,
        name: "spokemons",
        done: false,
      };

      const expectedNewList: toDo[] = [
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
        {
          id: 1,
          name: "spokemons",
          done: false,
        },
      ];

      const actionCreateTest = {
        type: "tasks@Create",
        payload: taskCreateTest,
      };

      const newTodoList = todoListReducer(
        previousTodoListTest,
        actionCreateTest
      );

      expect(newTodoList).toEqual(expectedNewList);
    });
  });
  describe("When it's invoked with a 'updateTaskAction' and a list of tasks", () => {
    test("Then it should return the same take id but with a diferent name", () => {
      const taskUpdateTest = {
        id: 1,
        name: "lacasitos",
      };

      const expectedUpdatedList: toDo[] = [
        {
          id: 1,
          name: "lacasitos",
          done: false,
        },
        {
          id: 2,
          name: "digimons",
          done: false,
        },
      ];

      const action = { type: "tasks@Update", payload: taskUpdateTest };

      const newUpdateTask = todoListReducer(previousTodoListTest, action);

      expect(newUpdateTask).toEqual(expectedUpdatedList);
    });
  });
  describe("When it's invoked with a 'deleteTaskAction' and a list of tasks", () => {
    test("Then it should return the previous list without the task with the indicated id", () => {
      const taskDeleteTest = {
        id: 1,
        name: "lacasitos",
        done: false,
      };

      const expectedUpdatedList: toDo[] = [
        {
          id: 2,
          name: "digimons",
          done: false,
        },
      ];

      const action = { type: "tasks@Delete", payload: taskDeleteTest.id };

      const newList = todoListReducer(previousTodoListTest, action);

      expect(newList).toEqual(expectedUpdatedList);
    });
  });
});
