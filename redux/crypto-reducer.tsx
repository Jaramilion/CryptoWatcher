import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CryptoItemTypes} from '../components/UI/CryptoItem/CryptoItemTypes';
import {InitialStateTypes} from './cryptoReducerTypes/CryptoReducerTypes';

const initialState: InitialStateTypes = {
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
  latestUpdate: '',
};

const cryptoReducer = createSlice({
  name: 'cryptoValues',
  initialState,
  reducers: {
    updateArray(
      state: InitialStateTypes,
      action: PayloadAction<CryptoItemTypes>,
    ) {
      state.latestUpdate = new Date().toLocaleTimeString('en-US');
      const cryptoFound = state.cryptoArray.find(
        crypto => crypto.name === action.payload.name,
      );
      if (!cryptoFound) {
        state.cryptoArray.push(action.payload);
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
