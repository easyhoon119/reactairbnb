const initialState = {
    userName: '김아무개',
    userEmail: 'kim@gmail.com',
    userSex: '',
    userBirth: ''
}

const UserInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERINFO': {
            return {
                ...state,
                userName: action.data.userName,
                userEmail: action.data.userEmail,
                userSex: action.data.userSex,
                userBirth: action.data.userBirth
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