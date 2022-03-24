# CryptoWatcher


Crypto watcher es una sencilla app para observar los cambios en el precio de las criptomonedas listadas en pantalla.

Primero inicie con lo mas basico, inicie creando los componentes que iba utilizar, cree las interfaces, hoja de estilos, el nombre del archivo donde esta el componente y un index para exportarlo.

Una vez terminado los componentes del UI de la app, al menos la mayoria pase implementar redux, instale redux toolkit, react-redux y redux.thunk, primero empece por crear la carpeta donde guardo los
archivos de redux, la store, reducers, actions y los types, configure la tienda conforme iba necesitando los reducer.

El primer reducer que agregue fue el del UI, donde simplemente manejo isLightModeActive con un reducer para togglear para handlear los onPress en el boton.

Posteriormente, usando la composicion soportada por redux toolkit agregue el segundo reducer, cryptoReducer. Esto para fetchear la info del websocket (WS) (OJO los valores se van inicializando cuando el WS envia un cambio en la crypto) y tenerla disponible en la store de redux.
Utilice un action para iterar sobre el array de actualizaciones que iba llegando del WS, y de esta manera llamar a mi reducer para ir actualizando cada valor en la store, al actualizar el valor verifica si es mayor o menor y agrega el interactionType.

Despues agregue las interacciones con el precio de las cryptos, cada que baja o sube el precio en relacion al anterior CryptoItem recibe en su useEffect la dependencia del precio y interactionType, para
triggerear el cambio del backgroundColor en la instancia del componente.

Finalmente añadi un par de iconos para indicar al usuario el cambio de modo de vision (Oscuro o Claro) y fui agregando los types que me hicieron falta.

Requerimientos para correr este proyecto
- node.js v16+
- cocoapods

Pasos a seguir para ejecutar

- Ejecutar npm install en la carpeta raiz del proyecto

Android
  -npx react-native run-android
  
iOS
  - navegar a la carpeta ios desde la carpeta raiz y ejecutar pod install
  - en una terminal ejecutar npx react-native start
  - en otra npx react-native run-android
  
Para ejecutar en android studio es necesario tener la version mas actualizado
