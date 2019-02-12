import axios from "axios";

export const ARTICLE_ADD = "ARTICLE::ADD";
export const ARTICLE_ADD_MULTIPLE = "ARTICLE::ADD_MULTIPLE";

export const fetchArticles = () => async dispatch => {
  const { data } = await axios.get("/Articles");
  dispatch({
    type: ARTICLE_ADD_MULTIPLE,
    payload: data
  });
};

export const publishArticle = article => async dispatch => {
  const { data } = await axios.post("/Articles", article);
  dispatch({
    type: ARTICLE_ADD,
    payload: data
  });
};
