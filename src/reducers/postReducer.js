import { actionType } from "../configurations/constant";

export const postReducer = (state, action) => {
 switch (action.type) {
  case actionType.GET_POSTS:
   return {
    ...state,
    loading: false,
    posts: action.payload,
   };
  case actionType.POST_ERROR:
   return {
    ...state,
    error: action.payload,
   };
  default:
   throw new Error(`A none handled action type: ${action.type}`);
 }
};