import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
  iaReady: boolean;
}

const initialState: CounterState = {
  count: 5,
  iaReady: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCountState(state, action: PayloadAction<number>) {
      if ( state.iaReady ) return;

      state.count = action.payload;
      state.iaReady = true;
    },
    addOne(state) {
      state.count++;
    },
    substractOne(state) {
      if ( state.count === 0 ) return;
      state.count--;
    },
    resetCount(state, action: PayloadAction<number>) {
      if ( action.payload < 0 ) action.payload = 0;
      state.count = action.payload;
    }
  }
});

export const { addOne, substractOne, resetCount, initCountState } = counterSlice.actions;

export default counterSlice.reducer;
