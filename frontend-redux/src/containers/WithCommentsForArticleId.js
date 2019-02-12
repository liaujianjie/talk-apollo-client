import React from "react";
import { connect } from "react-redux";
import { getCommentsForArticleId } from "../selectors/comment";
import { fetchCommentsForArticleId } from "../actions/comment";

class WithCommentsForArticleId extends React.Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    const { children, comments } = this.props;
    return children(comments);
  }
}

const mapStateToProps = (rootState, ownProps) => ({
  comments: getCommentsForArticleId(rootState, ownProps.articleId)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchComments: () => dispatch(fetchCommentsForArticleId(ownProps.articleId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithCommentsForArticleId);
