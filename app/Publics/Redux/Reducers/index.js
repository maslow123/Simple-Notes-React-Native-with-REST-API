import { combineReducers } from 'redux'; // Penghubung antara action dan store

import notes from './notes';
import categories from './categories';

const appReducer = combineReducers({
    notes,categories
});

export default appReducer;