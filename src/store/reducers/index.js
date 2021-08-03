import { combineReducers } from 'redux';
import LoginBoxReducer from './loginbox';
import IsLoggedReducer from './isLogged';

const rootReducer = combineReducers({
    LoginBoxReducer,
    IsLoggedReducer
});

export default rootReducer