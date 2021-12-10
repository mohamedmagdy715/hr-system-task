import { combineReducers } from "redux";

const employeesReducer = (state = [] , action)=>{
    if (action.type === "EMPLOYEES"){
        return {...state, employees:action.payload}
    }
    else if (action.type === "SEARCH_EMPLOYEES_LIST"){
        return {...state, search:action.payload}
    }
    else if (action.type === "ADD_EMPLOYEE"){
        return {...state, added:action.payload}
    }
    else if (action.type === "DELETE_EMPLOYEE"){
        return {...state, deleted:action.payload}
    }
    return state;
}

export default combineReducers({
    employeesReducer
})