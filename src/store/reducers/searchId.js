const initialState = {
    searchId: ''
}

const SearchIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCHID': {
            return {
                ...state,
                searchId: action.data.searchId
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default SearchIdReducer