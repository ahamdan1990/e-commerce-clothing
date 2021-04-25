// Root reducer is the acual base reducer object that will represent all the states of our application so this reducer will end up being the actual code that combines all the states together 

//combinedReducers is just a componet that we get from redux which combine all reducers into one big object
import { combineReducers } from 'redux';


import { persistReducer } from 'redux-persist';

// by importing the storage from the redux-persist we're saying basically that we want our localstorage
import storage from 'redux-persist/lib/storage';


import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

//defining the persist config where we want to store and what we want to store and key
const persistConfig = {
    key: 'root',
    storage,
    //here we say what reducers we want to persist
    whitelist:[
        'user',
        'cart',
        // 'directory',
        // 'shop'
    ]
}

// defining the older rootReducer into a variable called rootReducer
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
})

//using persistReducer we want to export the new rootReducer
export default persistReducer(persistConfig,rootReducer);