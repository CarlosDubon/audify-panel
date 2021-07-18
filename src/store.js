import { createStore } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const initialState = {
  sidebarShow: false,
  user:{}
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    case "update_user":
      return {...state,user: {...rest}}
    default:
      return state
  }
}
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, changeState)

const store = createStore(persistedReducer)

let persistor = persistStore(store)

export {store,persistor}
