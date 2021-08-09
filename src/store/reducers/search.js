const initialState = {
    address: '',
    checkin: '',
    checkout: '',
    guestnum: ''
}

const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH': {
            return {
                ...state,
                address: action.data.address,
                checkin: action.data.checkin,
                checkout: action.data.checkout,
                guestnum: action.data.guestnum
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default SearchReducer