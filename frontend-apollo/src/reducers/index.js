import authReducer, { INITIAL_STATE as AUTH_INITIAL_STATE } from "./auth";
import articleReducer, {
  INITIAL_STATE as ARTICLE_INITIAL_STATE
} from "./article";
import commentReducer, {
  INITIAL_STATE as COMMENT_INITIAL_STATE
} from "./comment";

const INITIAL_STATE = {
  auth: AUTH_INITIAL_STATE,
  entities: {
    articles: ARTICLE_INITIAL_STATE,
    comments: COMMENT_INITIAL_STATE
  }
};

const rootReducer = (state = INITIAL_STATE, action) => {
  return {
    auth: authReducer(state.auth, action),
    entities: {
      articles: articleReducer(state.entities.articles, action),
      comments: commentReducer(state.entities.comments, action)
    }
  };
};

export default rootReducer;
