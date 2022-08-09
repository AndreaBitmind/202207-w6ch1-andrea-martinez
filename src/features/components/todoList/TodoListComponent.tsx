import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RestRepository } from "../../../app/respositories/rest.respository";
import { RootState } from "../../../app/store";
import { idTodelete, newTaskt } from "../../todoList/data/data";
import { toDo } from "../../todoList/models/models";
import {
  createTaskAction,
  deleteTaskAction,
  loadTodosTaskActionNew,
} from "../../todoList/reducer/actionCreator";

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

  const handlerCreate = async () => {
    const data = await repoTasks.create(newTaskt);
    dispatch(createTaskAction(data));
  };

  const handlerDelete = async () => {
    const data = await repoTasks.delete(idTodelete);
    dispatch(deleteTaskAction(data));
  };

  return (
    <>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>
        <button onClick={handlerCreate}>Create</button>
        <button>Future Modify button</button>
        <button onClick={handlerDelete}>Delete</button>
      </div>
    </>
  );
}
