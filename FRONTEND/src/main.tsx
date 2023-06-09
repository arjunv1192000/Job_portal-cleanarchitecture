import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from './redux/store.ts';


const persistor =persistStore(store)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store = {store}>
  <PersistGate persistor={persistor}>
 
    <App />

  </PersistGate>
  </Provider>
)
