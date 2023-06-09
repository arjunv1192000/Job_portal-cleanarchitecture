import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './reducer/userSlice.ts';
import { recruiterSlice } from './reducer/recruiterSlice.ts';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { userprofileSlice } from './reducer/userProfileSlice.ts';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: userSlice.reducer,
  recruiter:recruiterSlice.reducer,
  userprofile:userprofileSlice.reducer,

  
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
