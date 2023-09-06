import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import postReducer from "./posts/postSlice";
import userReducer from "./users/userSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
    users: userReducer,
  },
});
