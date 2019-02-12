import axios from "axios";

export const ARTICLE__FETCH_ALL__LOADING = "ARTICLE::FETCH_ALL::LOADING";
export const ARTICLE__FETCH_ALL__SUCCESS = "ARTICLE::FETCH_ALL::SUCCESS";
export const ARTICLE__FETCH_ALL__FAILURE = "ARTICLE::FETCH_ALL::FAILURE";
export const ARTICLE__PUBLISH__LOADING = "ARTICLE::PUBLISH::LOADING";
export const ARTICLE__PUBLISH__SUCCESS = "ARTICLE::PUBLISH::SUCCESS";
export const ARTICLE__PUBLISH__FAILURE = "ARTICLE::PUBLISH::FAILURE";

export const fetchArticles = () => async dispatch => {
  dispatch({
    type: ARTICLE__FETCH_ALL__LOADING
  });
  try {
    const { data } = await axios.get("/Articles");
    dispatch({
      type: ARTICLE__FETCH_ALL__SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ARTICLE__FETCH_ALL__FAILURE,
      payload: error
    });
  }
};

export const publishArticle = article => async dispatch => {
  dispatch({
    type: ARTICLE__PUBLISH__LOADING
  });
  try {
    const { data } = await axios.post("/Articles", article);
    dispatch({
      type: ARTICLE__PUBLISH__SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ARTICLE__PUBLISH__FAILURE,
      payload: error
    });
  }
};
