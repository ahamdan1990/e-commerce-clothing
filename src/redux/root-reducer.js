// Root reducer is the acual base reducer object that will represent all the states of our application so this reducer will end up being the actual code that combines all the states together 

//combinedReducers is just a componet that we get from redux which combine all reducers into one big object
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directorySections from './directory/directory.reducer';
import shopDataReducer from './shop-data/shop-data.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    sections: directorySections,
    shop_data: shopDataReducer,
})