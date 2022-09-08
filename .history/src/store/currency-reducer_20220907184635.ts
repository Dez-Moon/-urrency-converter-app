import { currency } from './../../.history/src/currency/currency_20220907041532';
import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { videosApi } from "../api/videos-api";
import { CurrencyType } from '../types/types';

type InitialStateType = {
  currency: Array<CurrencyType>
}
const slice = createSlice({
  name: "currency",
  initialState: { currency: [] }
  reducers: {
    setCurrency(state, action: PayloadAction<{ currency: any }>) {
      state.videos = action.payload.videos;
    },
    
  },
});
export const VideosReducer = slice.reducer;

