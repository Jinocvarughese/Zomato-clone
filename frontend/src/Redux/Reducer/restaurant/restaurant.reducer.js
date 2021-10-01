import { GET_RESTAURANT } from "./restaurant.type";


const INITIAL_STATE = {
    restautants: [],
};

const restaurntReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_RESTAURANT:
            return {
                ...state,
                restautants: action.payload,
            };

        default :
        return {
            ...state,
        };    
    }
};

export default restaurntReducer;