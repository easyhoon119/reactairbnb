const initialState = {
    isLogged: false,
}

const IsLoggedReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ISLOGGED': {
            return {
                ...state,
                isLogged: action.data.isLogged
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default IsLoggedReducer