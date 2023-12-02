import axios from 'axios';
import { FETCH_USER ,LOGOUT} from './types';

// export const fetchUser = () => {
// return function (dispatch) {
//     axios.get('/api/current_user')
//     .then(res=> dispatch({type: FETCH_USER, payload: res}))
// }
// }; or

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
}; 
// or 
// export const fetchUser = () => async dispatch => {
//     dispatch({ type: FETCH_USER, payload: await axios.get('/api/current_user') });
// };

export const logout = () => {
    // You may want to make a request to your server to handle the logout
    // For simplicity, directly dispatch LOGOUT action
    return { type: LOGOUT };
};
