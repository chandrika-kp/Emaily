import { FETCH_USER } from "../actions/types";

export const authReducer = (state = null, action) => {
    console.log(action)
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        // case LOGOUT:
        //     return null;
        default:
            return state;
    }
}
