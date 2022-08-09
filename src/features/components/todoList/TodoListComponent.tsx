import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RestRepository } from "../../../app/respositories/rest.respository";
import { RootState } from "../../../app/store";
import { toDo } from "../../todoList/models/models";
import { loadTodosTaskActionNew } from "../../todoList/reducer/actionCreator";

export function TodoList() {
  const todoList = useSelector((state: RootState) => state.todoList);

  const dispatch = useDispatch();

  const urlAPI = "  http://localhost:3456/tasks/";
  const repoTasks = useMemo(() => new RestRepository<toDo>(urlAPI), []);

  useEffect(() => {
    repoTasks
      .loadAll()
      .then((todoListAPI) => dispatch(loadTodosTaskActionNew(todoListAPI)));
  }, [dispatch, repoTasks]);

  return (
    <>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>
        <button>Add</button>
        <button>Modify</button>
        <button>Delete</button>
      </div>
    </>
  );
}
