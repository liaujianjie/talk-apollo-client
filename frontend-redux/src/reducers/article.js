import {
  ARTICLE__FETCH_ALL__LOADING,
  ARTICLE__FETCH_ALL__SUCCESS,
  ARTICLE__FETCH_ALL__FAILURE,
  ARTICLE__PUBLISH__LOADING,
  ARTICLE__PUBLISH__SUCCESS,
  ARTICLE__PUBLISH__FAILURE
} from "../actions/article";
import getDictEntitiesFromEntities from "../utils/getDictEntitiesFromEntities";

export const INITIAL_STATE = {
  _isLoading: false,
  _lastError: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ARTICLE__FETCH_ALL__LOADING:
    case ARTICLE__PUBLISH__LOADING:
      return { ...state, _lastError: null, _isLoading: true };
    case ARTICLE__FETCH_ALL__SUCCESS:
      const articles = action.payload;
      return {
        ...state,
        /**
         * {
         *   1: { id: 1, title: "My first article", body: "Lorem ipsum..."},
         *   2: { id: 2, title: "My 2nd article", body: "Lorem ipsum..."},
         *   3: { id: 3, title: "My other article", body: "Lorem ipsum..."},
         * }
         */
        ...getDictEntitiesFromEntities(articles),
        _lastError: null,
        _isLoading: false
      };
    case ARTICLE__FETCH_ALL__FAILURE:
    case ARTICLE__PUBLISH__FAILURE:
      return { ...state, _lastError: action.payload, _isLoading: false };
    case ARTICLE__PUBLISH__SUCCESS:
      const article = action.payload;
      return {
        ...state,
        [article.id]: article,
        _lastError: null,
        isLoading: false
      };
    default:
      return state;
  }
};
