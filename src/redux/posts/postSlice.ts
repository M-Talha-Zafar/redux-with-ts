import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
}

const initialState: Post[] = [
  {
    id: nanoid(),
    title: "This is the title of the first post",
    content: "This is the content of the first post",
    userId: "",
  },
  {
    id: nanoid(),
    title: "This is the title of the second post",
    content: "This is the content of the second post",
    userId: "",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action: PayloadAction<Post>) => {
        state.push(action.payload);
      },
      prepare: (title: string, content: string, userId: string) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
