const initialState = {
    userName: '김아무개',
    userEmail: 'kim@gmail.com'
}

const UserInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERINFO': {
            return {
                ...state,
                userName: action.data.userName,
                userEmail: action.data.userEmail
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default UserInfoReducer