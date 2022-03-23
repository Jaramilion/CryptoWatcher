import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLightModeActive: true,
};

const uiReducer = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMode(state) {
      state.isLightModeActive = !state.isLightModeActive;
    },
  },
});

export const uiActions = uiReducer.actions;
export default uiReducer.reducer;
