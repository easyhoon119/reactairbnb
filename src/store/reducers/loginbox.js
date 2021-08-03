const initialState = {
    isLoginBox: false
}

const LoginBoxReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGINBOX': {
            return {
                ...state,
                isLoginBox: action.data.isLoginBox
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default LoginBoxReducer