import {cryptoActions} from './crypto-reducer';
import {AppDispatch} from './store';
import {AppState} from 'react-native';
import {uiActions} from './ui-reducer';

export const fetchCryptos = () => {
  return async (dispatchEvent: AppDispatch) => {
    let delayUpdate = true;
    let savedDataBetweenIntervals = [];
    window.setInterval(() => {
      delayUpdate = !delayUpdate;
    }, 3000);

    const connectWs = () => {
      const pricesWs = new WebSocket(
        'wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin,xrp',
      );
      pricesWs.onmessage = msg => {
        if (AppState.currentState !== 'active') {
          pricesWs.close();
        }

        if (delayUpdate) {
          const parsedObj = JSON.parse(msg.data);
          let savedCryptoObj = {};
          savedDataBetweenIntervals.push(parsedObj);
          savedDataBetweenIntervals.forEach(val => {
            const savedPropKeys = Object.keys(savedCryptoObj);
            const propNames = Object.keys(val);

            if (savedPropKeys.length < 1) {
              savedCryptoObj = {...val};
            }
            propNames.forEach(key => {
              if (savedCryptoObj[key]) {
                savedCryptoObj[key] = val[key];
              } else {
                const newVal = {
                  [key]: val[key],
                };
                savedCryptoObj = {...savedCryptoObj, ...newVal};
              }
            });
          });
          savedDataBetweenIntervals = [];
          const propNames = Object.keys(
            savedDataBetweenIntervals.length < 1 ? parsedObj : savedCryptoObj,
          );
          propNames.forEach(cryptoName => {
            dispatchEvent(
              cryptoActions.updateArray({
                name: cryptoName,
                price: parseFloat(parsedObj[cryptoName]),
                interactionType: 'initial',
              }),
            );
          });
        } else {
          const parsedObj = JSON.parse(msg.data);
          savedDataBetweenIntervals.push(parsedObj);
        }
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
