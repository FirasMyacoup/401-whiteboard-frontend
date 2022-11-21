import axios from "axios";
import { actionType } from "../configurations/constant";

export const getPost = (dispatch) => {
 axios
  .get(`${process.env.REACT_APP_HEROKU_URL}/post`)
  .then((res) => {dispatch({ type: actionType.GET_POSTS, payload: res.data });
  })
  .catch((err) => {dispatch({ type: actionType.POST_ERROR, payload: err });
  });
};