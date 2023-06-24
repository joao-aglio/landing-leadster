import { Action } from "redux";

const defaultState = false;

const modalState = (state, action) => {

     const { type, newState } = action;

     switch (type) {

        case "SET MODAL":
            return newState;

        case "RESET":
            return defaultState;

        default:
            return state;

     }
     
}

export default modalState