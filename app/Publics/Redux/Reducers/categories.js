const initialState = {
    number: 0,
    data: [],
    isLoading: false
}

export default categories = ( state = initialState,action ) => {
    switch (action.type) {
        case 'GET_CATEGORY_PENDING': // => Data pending
            return{
                ...state,
                isLoading: true
            }
        case 'GET_CATEGORY_REJECTED': // => Data rejected
            return{
                ...state,
                isLoading: false
            }
        case 'GET_CATEGORY_FULFILLED': // => Data discovered
            return{
                ...state,
                isLoading: false,
                data: action.payload.data.data
            }
        /* POST CATEGORY */
        
        case 'POST_CATEGORY_PENDING': // => Data pending
            return{
                ...state,
                isLoading: true
            }
        case 'POST_CATEGORY_REJECTED': // => Data rejected
            return{
                ...state,
                isLoading: false
            }
        case 'POST_CATEGORY_FULFILLED':
            return{
                ...state, // spreadoperator
                data: state.data.concat(action.payload.data.results)   
            }
        /* DELETE CATEGORY */
        case 'DELETE_CATEGORY_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'DELETE_CATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false
            }
        case 'DELETE_CATEGORY_FULFILLED':
            return{
                ...state,
                isLoading: false,
                isFinish: true,
                data: state.data.filter(category => category.category_id !== parseInt(action.payload.data.results))
            }

        default:
            return state;
    }
}