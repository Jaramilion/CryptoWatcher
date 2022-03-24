import {cryptoActions} from './crypto-reducer';

export const cryptoManager = (incomingCryptoValues: any) => {
  return dispatchEvent => {
    const parsedObj = JSON.parse(incomingCryptoValues);
    const propNames = Object.keys(parsedObj);
    propNames.forEach(cryptoName => {
      dispatchEvent(
        cryptoActions.updateArray({
          name: cryptoName,
          price: parseFloat(parsedObj[cryptoName]),
        }),
      );
    });
  };
};
