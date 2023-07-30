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

export const localStorageKey = "tasks";

class Store {
  toDoList: ToDoType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(toDo: ToDoType) {
    this.toDoList.push(toDo);
    this.updateLocalStorage();
  }

  removeToDo(id: string) {
    this.toDoList = this.toDoList.filter((toDo) => toDo.id !== id);
    this.updateLocalStorage();
  }

  getTasks() {
    const tasks = localStorage.getItem(localStorageKey);
    if (tasks) this.toDoList = JSON.parse(tasks);
  }

  updateLocalStorage() {
    localStorage.setItem(localStorageKey, JSON.stringify(this.toDoList));
  }
}

const store = new Store();

export default store;
