import { createSlice } from '@reduxjs/toolkit';

interface StepsState {
  step: number;
}

const initialState: StepsState = {
  step: 1,
};

export const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    increment: (state) => {
      state.step += 1;
    },
  },
});

export const { increment } = stepsSlice.actions;
export default stepsSlice.reducer;
