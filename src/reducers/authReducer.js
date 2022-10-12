import { actionType } from '../configurations/constant';

export const authReducer = (state, action) => {
    switch (action.type) {
        case actionType.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case actionType.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                token: action.payload.token,
                isAuth: true,
            };
        case actionType.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case actionType.LOGOUT:
            return {
                ...state,
                user: null,
                token: null,
                isAuth: false,
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}