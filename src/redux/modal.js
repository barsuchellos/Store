const defaultState = {
    favourite: [],
    visible: false,
}

export const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_FAVOURITE_ITEM":
            const newState = { ...state };
            newState.favourite.push(action.payload)
            return newState
        case "OPEN_MODAL":
            return { ...state, visible: true }
        case "CLOSE_MODAL":
            return { ...state, visible: false }
        default:
            return state
    }
}