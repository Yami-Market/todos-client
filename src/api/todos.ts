import { instance } from './instance';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export const getAllTodos = async () => {
  return await instance.get<Todo[]>('/todos');
};

export const getTodoById = async (id: number) => {
  return await instance.get<Todo>(`/todos/${id}`);
};

export const updateTodo = async (id: number, todo: Todo) => {
  return await instance.post<Todo>(`/todos/${id}`, todo);
};
