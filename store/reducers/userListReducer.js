import * as types from '../types';

const initalState = { 
    participant: [],
    winners: [],
    loading: false,
    error: null
}

export const userListReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.GET_PARTICIPANT:
            return {
                ...state,
                participant: action.payload,
            }
        case types.UPDATE_WINNER:
            return {
                ...state,
                winners: action.payload,
            }
        case types.RESET:
            return {
                ...state,
                participant: [],
                winners: [],
                loading: false,
                error: null
            }
        default:
            return state
    }
}