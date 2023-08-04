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
  emotionalState: Emotions | null;
  isDone: boolean;
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

  updateRealDuration(id: string, realDuration: number) {
    this.toDoList = this.toDoList.map((toDo) =>
      toDo.id === id
        ? {
            ...toDo,
            duration: {
              ...toDo.duration,
              real: realDuration,
            },
          }
        : toDo,
    );
    this.updateLocalStorage();
  }

  setEmotions(id: string, emotion: Emotions) {
    this.toDoList = this.toDoList.map((toDo) =>
      toDo.id === id ? { ...toDo, emotionalState: emotion } : toDo,
    );
    this.updateLocalStorage();
  }

  setTaskStatus(id: string, isDone: boolean) {
    this.toDoList = this.toDoList.map((toDo) =>
      toDo.id === id ? { ...toDo, isDone } : toDo,
    );
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem(localStorageKey, JSON.stringify(this.toDoList));
  }
}

const store = new Store();

export default store;
