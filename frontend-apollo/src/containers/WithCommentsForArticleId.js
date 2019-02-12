import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const CommentsForArticleId = gql`
  query CommentsForArticleId($articleId: String!) {
    comments(articleId: $articleId) {
      id
      message
      owner {
        id
      }
    }
  }
`;

class WithCommentsForArticleId extends React.Component {
  render() {
    const { children, articleId } = this.props;
    return (
      <Query query={CommentsForArticleId} variables={{ articleId }}>
        {({ data, loading, error }) => {
          if (loading) return <span>loading</span>;
          if (error) return <span>{error.message}</span>;

          return children(data.comments);
        }}
      </Query>
    );
  }
}

export default WithCommentsForArticleId;
