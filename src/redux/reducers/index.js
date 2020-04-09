import { combineReducers } from 'redux';
import GameReducer from './GameReducer';
import UserReducer from './UserReducer';
import TownReducer from './TownReducer';

export default combineReducers({
    Game: GameReducer,
    Town: TownReducer,
    User: UserReducer,
});
