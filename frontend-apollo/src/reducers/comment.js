import { COMMENT_ADD_MULTIPLE } from "../actions/comment";
import getDictEntitiesFromEntities from "../utils/getDictEntitiesFromEntities";

export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMMENT_ADD_MULTIPLE:
      const entities = action.payload;
      return { ...state, ...getDictEntitiesFromEntities(entities) };
    default:
      return state;
  }
};
