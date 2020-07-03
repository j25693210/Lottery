import * as types from '../types';

export const fetchUserData = () => async dispatch => {
    dispatch({
        type: types.GET_PARTICIPANT,
        payload: ['Catherine', 'Ellen', 'Charlotte', 'Georgia', 'Jenny', 'Valerie']
    })
}

export const updateWinner = winner => async dispatch => {
    dispatch({
        type: types.UPDATE_WINNER,
        payload: winner
    })
}

export const resetResult = () => async dispatch => {
    dispatch({
        type: types.RESET
    })
}
