import { types } from "../types/types";


const initialState = {
    movements : [],
    title     : 'Hoy'
}

export const generalReducer = ( state=initialState, action ) => {
    switch (action.type) {

        case types.getData :
            return {
                ...state,
                movements : action.payload
            };
        case types.changeTitle :
            return {
                ...state,
                title : action.payload
            };

        default:
            return state;
    }
}