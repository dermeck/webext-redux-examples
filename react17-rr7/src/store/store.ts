import { configureStore } from "@reduxjs/toolkit";
import mySlice from "./slices/mySlice";

const store = configureStore({
  reducer: {
    mySlice: mySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
