import React from "react";
import { connect } from "react-redux";
import {
  getAllArticles,
  getAllArticlesLoadingState,
  getAllArticlesError
} from "../selectors/article";
import { fetchArticles } from "../actions/article";

class WithArticles extends React.Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { children, articles, isLoading, error } = this.props;
    if (error) return <span>{error.message}</span>;
    if (isLoading) return <span>Loading...</span>;
    return children(articles);
  }
}

const mapStateToProps = rootState => ({
  articles: getAllArticles(rootState),
  isLoading: getAllArticlesLoadingState(rootState),
  error: getAllArticlesError(rootState)
});

const mapDispatchToProps = {
  fetchArticles
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithArticles);
