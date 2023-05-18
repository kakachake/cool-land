import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BasicState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: BasicState = {
  value: 0,
  status: "idle",
};

export const basicSlice = createSlice({
  name: "basic",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = basicSlice.actions;

export default basicSlice.reducer;
