import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Articles = gql`
  query Articles {
    articles {
      id
      title
      body
      owner {
        id
      }
    }
  }
`;

class WithArticles extends React.Component {
  render() {
    return (
      <Query query={Articles}>
        {({ data, loading, error }) => {
          if (loading) return <span>loading</span>;
          if (error) return <span>{error.message}</span>;

          const { articles } = data;
          return this.props.children(articles);
        }}
      </Query>
    );
  }
}

export default WithArticles;
