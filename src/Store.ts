import { makeAutoObservable } from "mobx";

export interface ToDoType {
  id: string;
  date: string;
  taskDescription: string;
  duration: {
    estimated: number;
    real: number;
  };
  category: TaskCategory;
  emotionalState: Emotions;
}

export enum TaskCategory {
  Work = "Work",
  Leisure = "Leisure",
}

export enum Emotions {
  Excellent = "Excellent",
  Normal = "Normal",
  Bad = "Bad",
}

class Store {
  toDoList: ToDoType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(toDo: ToDoType) {
    this.toDoList.push(toDo);
  }

  removeToDo(id: string) {
    this.toDoList = this.toDoList.filter((toDo) => toDo.id !== id);
  }
}

const store = new Store();

export default store;
