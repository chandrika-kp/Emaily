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
    return { type: LOGOUT };
};

export const handleToken = (token) => async dispatch => {
    const res = axios.post('/api/stripe', token);
    dispatch({type: FETCH_USER, payload: res.data});
}
