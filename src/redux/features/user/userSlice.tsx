// // import { RootState } from "@/redux/store";
// import { IUser } from "@/types";
// import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

// interface InitialState {
//   users: IUser[];
// }

// const initialState: InitialState = {
//   users: [
//     {
//       id: "kNifM2S4CXYd694SycUf4",
//       name: "Rakesh Biswas",
//     },
//     {
//       id: "kNifM2S4CXYd694Sycasdf",
//       name: "Tipu Ali",
//     },
//   ],
// };

// type DraftUser = Pick<IUser, "name">;

// const createUser = (userData: DraftUser): IUser => {
//   return { id: nanoid(), ...userData };
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState: initialState,
//   reducers: {
//     addUser: (state, action: PayloadAction<IUser>) => {
//       const userData = createUser(action.payload);
//       state.users.push(userData);
//     },
//     removeUser: (state, action: PayloadAction<string>) => {
//       state.users = state.users.filter((user) => user.id !== action.payload);
//     },
//   },
// });

// // export const selectUsers = (state: RootState) => state.user.users;

// export const { addUser, removeUser } = userSlice.actions;

// export default userSlice.reducer;
