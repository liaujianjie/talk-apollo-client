import axios from "axios";

export const COMMENT_ADD_MULTIPLE = "COMMENT::ADD_MULTIPLE";

export const fetchCommentsForArticleId = articleId => async dispatch => {
  const { data } = await axios.get(`/Articles/${articleId}/comments`);
  dispatch({
    type: COMMENT_ADD_MULTIPLE,
    payload: data
  });
};
