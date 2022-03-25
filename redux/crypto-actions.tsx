import {cryptoActions} from './crypto-reducer';
import {AppDispatch} from './store';
import {AppState} from 'react-native';
import {uiActions} from './ui-reducer';

export const fetchCryptos = () => {
  return async (dispatchEvent: AppDispatch) => {
    const connectWs = () => {
      const pricesWs = new WebSocket(
        'wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin,xrp,cardano,solana',
      );
      pricesWs.onmessage = msg => {
        const parsedObj = JSON.parse(msg.data);
        const propNames = Object.keys(parsedObj);
        propNames.forEach(cryptoName => {
          AppState.currentState === 'active' &&
            dispatchEvent(
              cryptoActions.updateArray({
                name: cryptoName,
                price: parseFloat(parsedObj[cryptoName]),
                interactionType: 'initial',
              }),
            );
        });
      };
      pricesWs.onclose = ev => {
        console.log('ONCLOSE' + ev);
      };
      pricesWs.onerror = ev => {
        dispatchEvent(uiActions.setErrorTriggeredInWS(true));
        console.log('ONERROR' + ev);
      };
      return pricesWs;
    };
    const status = await connectWs();
    try {
      dispatchEvent(uiActions.setErrorTriggeredInWS(false));
      console.log('status open' + status.OPEN);
    } catch {
      dispatchEvent(uiActions.setErrorTriggeredInWS(true));
      console.log('status closed' + status.CLOSED);
    }
  };
};
