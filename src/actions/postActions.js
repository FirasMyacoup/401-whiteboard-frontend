import axios from "axios";
import { actionType } from "../configurations/constant";
import { getPosts } from "../redux/postSlicer";

export const post = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_HEROKU_URL}/post`)
    dispatch(getPosts(res.data));
  } catch (error) {
    console.log(error);
  }
};
