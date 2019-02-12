import getDictEntitiesFromEntities from "../utils/getDictEntitiesFromEntities";

export const getCommentsForArticleId = (rootState, articleId) =>
  getDictEntitiesFromEntities(
    Object.values(rootState.entities.comments).filter(
      comment => comment.articleId === articleId
    )
  );
