import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "../ReduxSlices/Words_Slice";

export const store = configureStore({
  reducer: {
    wordStore: wordReducer,
  },
});
