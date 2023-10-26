let defaultState = {
    payload: [],
    favourite: [],
};

export const listReducer = (state = defaultState, action) => {

    switch (action.type) {
        case "FETCH_DATA_SUCCESS":
            return { ...state, payload: action.payload }
        case "ADD_FAVOURITE_ITEM":
            const newState = { ...state };
            newState.favourite.push(action.payload)
            return newState
        default:
            return state
    }
}