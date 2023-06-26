import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from './redux/store.ts';
import { ErrorBoundary } from 'react-error-boundary'
import Errorboundary from './commonpage/ErrorBoundary';


const persistor =persistStore(store)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorBoundary FallbackComponent={Errorboundary}>
  <Provider store = {store}>
  <PersistGate persistor={persistor}>
    <App />
  </PersistGate>
  </Provider>
  </ErrorBoundary>
)
