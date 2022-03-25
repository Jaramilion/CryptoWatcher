# CryptoWatcher


Crypto watcher es una sencilla app para observar los cambios en el precio de las criptomonedas listadas en pantalla.

Primero inicie con lo mas basico, inicie creando los componentes que iba utilizar, cree las interfaces, hoja de estilos, el nombre del archivo donde esta el componente y un index para exportarlo.

Una vez terminado los componentes del UI de la app, al menos la mayoria pase implementar redux, instale redux toolkit, react-redux y redux.thunk, primero empece por crear la carpeta donde guardo los
archivos de redux, la store, reducers, actions y los types, configure la tienda conforme iba necesitando los reducer.

El primer reducer que agregue fue el del UI, donde simplemente manejo isLightModeActive con un reducer para togglear para handlear los onPress en el boton.

Posteriormente, usando la composicion soportada por redux toolkit agregue el segundo reducer, cryptoReducer. Esto para fetchear la info del websocket (WS) y tenerla disponible en la store de redux.
Se movio el WS al crypto-actions para manejar los mensajes de error, ahora con cada respuesta del WS en el mismo action se itera la respuesta del WS y se llama al reduce de las crypto para ir actualizando cada valor en la store, al actualizar el valor verifica si es mayor o menor y agrega el interactionType.

Agregue redux-persist/asyncstorage para ir guardando las crypto fetcheadas y no esperar cada que se abre la app, lo mismo con las preferencias

Despues agregue las interacciones con el precio de las cryptos, cada que baja o sube el precio en relacion al anterior CryptoItem recibe en su useEffect la dependencia del precio y interactionType, para
triggerear el cambio del backgroundColor en la instancia del componente.

Añadi un par de iconos para indicar al usuario el cambio de modo de vision (Oscuro o Claro) y fui agregando los types que me hicieron falta.

Tambien se incluye un alert para cuando el websocket falla.


----UPDATE 25/03/2022------
-Redux persist, asyncstorage agregado a la lista de dependencias, se agrego para no tener que esperar los updates cada que abres la app y guardar las preferencias.
-Ahora la lista se actualiza con la app abierta solamente
-Si el websocket falla aparece feedback al usuario


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
