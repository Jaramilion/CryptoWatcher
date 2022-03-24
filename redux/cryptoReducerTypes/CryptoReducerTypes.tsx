import {AnyAction} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {CryptoItemTypes} from '../../components/UI/CryptoItem/CryptoItemTypes';
import {RootState} from '../store';

export interface InitialStateTypes {
  cryptoArray: CryptoItemTypes[];
  latestUpdate: string;
}
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
