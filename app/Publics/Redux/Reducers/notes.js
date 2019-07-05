const initialState = {
    number: 0,
    data: [],
    isLoading: false,
    page: 1
}

export default notes = ( state = initialState,action ) => {
    switch (action.type) {
        case 'GET_NOTES_PENDING': // => Data pending
            return{
                ...state,
                isLoading: true
            }
        case 'GET_NOTES_REJECTED': // => Data rejected
            return{
                ...state,
                isLoading: false
            }
        case 'GET_NOTES_FULFILLED': // => Data discovered
        
            return{
                ...state,
                isLoading: false,
                data: action.payload.data.data,
                page: action.payload.data.totalpage
            }
        /* PAGINATION */
        case 'GET_LOAD_NOTES_PENDING':
            return{
                ...state,
                isLoading:false,
            }
            case 'GET_LOAD_NOTES_REJECTED':
                    return{
                        ...state,
                        isLoading:false,
                    }
            case 'GET_LOAD_NOTES_FULFILLED':
            return{
                ...state,
                isLoading:false,
                data:[...state.data, ...action.payload.data.data]
            }
        /* SEARCH ACTION */
        case 'GET_SEARCH_NOTES_FULFILLED':
            return{
                ...state,
                isLoading: false,
                data: action.payload.data.data,
                page: action.payload.data.totalpage
            }
        /* ASC AND DESC ACTION */
        case 'GET_SORT_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data.data
            }
        /* ADD NOTES ACTION */
        
        case 'POST_NOTES_PENDING':
                return {
                    ...state,
                    isLoading: true
                }
        case 'POST_NOTES_FULFILLED':
            return{
                ...state,
                
                isLoading: false,
                data: [ action.payload.data.results, ...state.data]   
            }
            
        case 'POST_NOTES_REJECTED':
                return {
                    ...state,
                    isLoading: false
                }
        /* DEL NOTES ACTION */
        case 'DEL_NOTES_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'DEL_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false
            }
        case 'DEL_NOTES_FULFILLED':
            
            return{
                ...state,
                isLoading: false,
                isFinish: true,
                data: state.data.filter(note => note.desc_id !== parseInt(action.payload.data.results))
            }
        /* UPD NOTES ACTION */
        case 'UPD_NOTES_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'UPD_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false
            }
        case 'UPD_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                data: state.data.map(note => 
                    (note.desc_id == parseInt(action.payload.data.results.desc_id)) ?
                                     action.payload.data.results : note
                )
            }
        // GET NOTES BY CATEGORY
        case 'CATEGORY_NOTES_PENDING':
            return {
                ...state,
                isLoading: true,
            }
        case 'CATEGORY_NOTES_REJECT':
            return {
                ...state,
                isLoading: false,
            }
        case 'CATEGORY_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                data: action.payload.data.data,
                page: action.payload.data.totalpage
            }
        default:
            return state;
    }
}