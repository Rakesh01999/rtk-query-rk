import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    task: ITask[];
}

const initialState : InitialState = {
  task: [
    {
      id: "asdfgasdfg",
      title: "Initialize frontend",
      description: "Create Home page, and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
