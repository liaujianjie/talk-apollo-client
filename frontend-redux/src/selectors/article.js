export const getAllArticles = rootState => {
  const { _isLoading, _lastError, ...articles } = rootState.entities.articles;
  return articles;
};

export const getAllArticlesLoadingState = rootState =>
  rootState.entities.articles._isLoading;

export const getAllArticlesError = rootState =>
  rootState.entities.articles._lastError;
