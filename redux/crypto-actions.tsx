import {cryptoActions} from './crypto-reducer';
import {AppDispatch} from './store';

export const cryptoManager = (incomingCryptoValues: any) => {
  return (dispatchEvent: AppDispatch) => {
    const parsedObj = JSON.parse(incomingCryptoValues);
    const propNames = Object.keys(parsedObj);
    propNames.forEach(cryptoName => {
      dispatchEvent(
        cryptoActions.updateArray({
          name: cryptoName,
          price: parseFloat(parsedObj[cryptoName]),
          interactionType: 'initial',
        }),
      );
    });
  };
};
