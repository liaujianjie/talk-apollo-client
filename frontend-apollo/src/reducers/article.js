import { ARTICLE_ADD, ARTICLE_ADD_MULTIPLE } from "../actions/article";
import getDictEntitiesFromEntities from "../utils/getDictEntitiesFromEntities";

export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ARTICLE_ADD:
      const article = action.payload;
      return { ...state, [article.id]: article };
    case ARTICLE_ADD_MULTIPLE:
      const articles = action.payload;
      return { ...state, ...getDictEntitiesFromEntities(articles) };
    default:
      return state;
  }
};
