import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cryptoArray: [
    {
      name: 'bitcoin',
      price: 0,
      interactionType: 'initial',
    },
    {
      name: 'ethereum',
      price: 0,
      interactionType: 'initial',
    },
    {
      name: 'monero',
      price: 0,
      interactionType: 'initial',
    },
    {
      name: 'litecoin',
      price: 0,
      interactionType: 'initial',
    },
  ],
};

const cryptoReducer = createSlice({
  name: 'cryptoValues',
  initialState,
  reducers: {
    updateArray(state, action) {
      const cryptoFound = state.cryptoArray.find(
        crypto => crypto.name === action.payload.name,
      );
      if (!cryptoFound) {
        state.cryptoArray.push({
          name: action.payload.name,
          price: action.payload.price,
          interactionType: 'initial',
        });
        return;
      }
      if (action.payload.price > cryptoFound.price) {
        cryptoFound.interactionType = 'increment';
      }
      if (action.payload.price < cryptoFound.price) {
        cryptoFound.interactionType = 'decrement';
      }
      cryptoFound.price = action.payload.price;
    },
  },
});

export const cryptoActions = cryptoReducer.actions;
export default cryptoReducer.reducer;
