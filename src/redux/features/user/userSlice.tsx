import { RootState } from "@/redux/store";
import { ITask, IUser } from "@/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [],
};

type DraftUser = Pick<IUser, "name">;

const createUser = (taskData: DraftUser): IUser => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUser(action.payload);
      state.tasks.push(userData);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.tasks.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
