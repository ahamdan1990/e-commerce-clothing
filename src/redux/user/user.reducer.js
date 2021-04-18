import {UserActionTypes} from './user.types';
//when we fire the state for the first time it's going to be nothing because redux doesn't know anything about our state yet so we have to set an initial state

// we're going to initiat an intial object just as the one we define it inside the this.state in the app component which will represent the initial state of our state

const INITIAL_STATE = {
    currentUser:null,
}

// If state is still undefined it will get the initial state object 
const userReducer = ( state = INITIAL_STATE , action ) => {

    switch (action.type) {

        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            }

        default:
            return state;

    }

}

export default userReducer;