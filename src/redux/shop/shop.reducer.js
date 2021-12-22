import ShopActionTypes from "./shop.type";

const INITIAL_STATE = {
    shopItems: null,
}

const shopReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
                return {
                    ...state,
                    shopItems: action.payload
                }
        default:
            return state;
    }
}

export default shopReducer;