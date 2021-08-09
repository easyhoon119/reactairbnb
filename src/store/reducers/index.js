import { combineReducers } from 'redux';
import LoginBoxReducer from './loginbox';
import IsLoggedReducer from './isLogged';
import SearchReducer from './search';
import UserInfoReducer from './userinfo';

const rootReducer = combineReducers({
    LoginBoxReducer,
    IsLoggedReducer,
    SearchReducer,
    UserInfoReducer
});

export default rootReducer