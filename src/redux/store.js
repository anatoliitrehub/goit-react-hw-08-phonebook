import { configureStore} from '@reduxjs/toolkit';
// import {devToolsEnhancer} from '@redux-devtools/extension';
// import { rootReducer } from './reducers';
// import {contactsReducer, filterReducer} from './reducers';
import { contactsReducer } from './contactsSlice';
import { userReducer } from './userSlice';
import { filterReducer } from './filterSlice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const initialState = {
//     contacts:[],
//     filter:{}
// }

// const rootReducer = (state = initialState, action) =>{
//     return state;
// };

// const enhancer = devToolsEnhancer();

const store=configureStore({
    reducer: {
        user:userReducer,
        contacts:contactsReducer,
        filter:filterReducer,
    },
})

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

export default store;
