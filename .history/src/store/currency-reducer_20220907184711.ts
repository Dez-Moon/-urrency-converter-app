import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrencyType } from "../types/types";

type InitialStateType = {
  currency: Array<CurrencyType>;
};
const slice = createSlice({
  name: "currency",
  initialState: { currency: [] } as InitialStateType,
  reducers: {
    setCurrency(state, action: PayloadAction<{ currency: any }>) {
      state.videos = action.payload.videos;
    },
  },
});
export const VideosReducer = slice.reducer;
