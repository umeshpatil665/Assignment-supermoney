import { configureStore } from "@reduxjs/toolkit";

// import piechartSlicer from "./Slicer/piechartSlicer";

import errorHadlingSlicer from "./Slicer/errorHadlingSlicer";

export const store = configureStore({
  reducer: {
    errorBoundry: errorHadlingSlicer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
