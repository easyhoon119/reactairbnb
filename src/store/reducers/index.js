import { combineReducers } from 'redux';
import LoginBoxReducer from './loginbox';
import IsLoggedReducer from './isLogged';
import SearchReducer from './search';
import UserInfoReducer from './userinfo';
import SearchIdReducer from './searchId';

const rootReducer = combineReducers({
    LoginBoxReducer,
    IsLoggedReducer,
    SearchReducer,
    UserInfoReducer,
    SearchIdReducer
});

export default rootReducer