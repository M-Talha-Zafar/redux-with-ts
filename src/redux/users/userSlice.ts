import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  username: string;
  email: string;
}

const initialState: User[] = [
  {
    id: nanoid(),
    username: "emteazy",
    email: "tz@gmail.com",
  },
  {
    id: nanoid(),
    username: "summer",
    email: "summer@gmail.com",
  },
];

const userSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addUser: {
      reducer: (state, action: PayloadAction<User>) => {
        state.push(action.payload);
      },
      prepare: (username: string, email: string) => {
        return {
          payload: {
            id: nanoid(),
            username,
            email,
          },
        };
      },
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
