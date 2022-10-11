import customerReducer from "./customers";
import categoryReducer from "./category";
import taskReducer from "./task";

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    customers:customerReducer,
    taskInfo: taskReducer,
    categoryInfo: categoryReducer
})

export default rootReducer;