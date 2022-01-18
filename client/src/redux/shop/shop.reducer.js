import ShopActionTypes from "./shop.type";

const INITIAL_STATE = {
    shopItems: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                shopItems: action.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                shopItems: action.payload
            }
        case ShopActionTypes.UPDATE_COLLECTIONS:
                return {
                    ...state,                    
                    errorMessage: action.payload
                }
        default:
            return state;
    }
}

export default shopReducer;