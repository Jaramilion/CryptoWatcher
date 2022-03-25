import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialStateTypes} from './uiReducerTypes/uiReducerTypes';

const initialState = {
  isLightModeActive: true,
  errorTriggeredInWS: false,
};

const uiReducer = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMode(state: InitialStateTypes) {
      state.isLightModeActive = !state.isLightModeActive;
    },
    setErrorTriggeredInWS(
      state: InitialStateTypes,
      action: PayloadAction<boolean>,
    ) {
      state.errorTriggeredInWS = action.payload;
    },
  },
});

export const uiActions = uiReducer.actions;
export default uiReducer.reducer;
