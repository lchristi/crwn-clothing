//base reducer - represents state of our components
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'] // this is the only thing we want to persist (cart), user is not added here since firebase persists it
}
//above in persistConfig we added cart, if we had anymore reducers, we would add it there.

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});


export default persistReducer(persistConfig, rootReducer);