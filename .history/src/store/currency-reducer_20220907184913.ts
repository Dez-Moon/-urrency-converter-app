import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { CurrencyType } from "../types/types";

type InitialStateType = {
  currency: Array<CurrencyType>;
};
const slice = createSlice({
  name: "currency",
  initialState: { currency: [] } as InitialStateType,
  reducers: {
    setCurrencyAC(
      state,
      action: PayloadAction<{ currency: Array<CurrencyType> }>
    ) {
      state.currency = action.payload.currency;
    },
  },
});
export const VideosReducer = slice.reducer;

export const { setCurrencyAC } = slice.actions;

export const setCurrencyTC = () => (dispatch: Dispatch) => {};
