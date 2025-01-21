import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dictionary: [],
};

export const getDictionary = createAsyncThunk("words", async (word) => {
  return axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res) => res.data);
});

export const wordSlice = createSlice({
  name: "words",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getDictionary.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDictionary.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.dictionary = [...state.dictionary, action.payload];
      })
      .addCase(getDictionary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.dictionary = [];
      });
  },
  reducers: {
    removeWord: (state, action) => {
      return {
        ...state,
        dictionary: [...state.dictionary].filter(
          (word) => word[0].word !== action.payload
        ),
      };
    },
  },
});

export const { removeWord } = wordSlice.actions;

export default wordSlice.reducer;
