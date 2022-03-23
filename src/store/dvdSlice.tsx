import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dvds } from "./dvds";

export interface Dvd {
  id: number;
  name: string;
  category: string;
  image: string;
  featured?: boolean;
}

export interface DvdState {
  dvds: Dvd[];
}

const initialState: DvdState = {
  dvds: dvds,
};

export const dvdSlice = createSlice({
  name: "dvds",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Dvd>) => {},
    remove: (state, action: PayloadAction<number>) => {
      console.log(action);
      state.dvds = state.dvds.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = dvdSlice.actions;

export default dvdSlice.reducer;
