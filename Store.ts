import { makeAutoObservable } from "mobx";

interface ToDoType {
  id: string;
  date: Date;
  taskDescription: string;
  duration: {
    estimated: number;
    real: number;
  };
  category: TaskCategory;
  emotionalState: Emotions;
}

enum TaskCategory {
  Work = "Work",
  Leisure = "Leisure",
}

enum Emotions {
  Excellent = "Excellent",
  Normal = "Normal",
  Bad = "Bad",
}

class Store {
  toDoList: ToDoType[] = [];

  constructor() {
    makeAutoObservable(this);
  }
}

const store = new Store();

export default store;
