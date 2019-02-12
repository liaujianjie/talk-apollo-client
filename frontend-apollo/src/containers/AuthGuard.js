import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import LoginPanel from "../components/LoginPanel";

const SignIn = gql`
  mutation SignIn($username: String, $password: String) {
    signIn(username: $username, password: $password) {
      token
    }
  }
`;

class AuthGuard extends React.Component {
  render() {
    return (
      <Mutation mutation={SignIn}>
        {(signIn, { loading, error, data }) => {
          if (loading || error || !data || !data.signIn) {
            return (
              <LoginPanel
                onLogin={credentials => signIn({ variables: credentials })}
              />
            );
          }

          // const { token } = data.authToken;
          return this.props.children;
        }}
      </Mutation>
    );
  }
}

export default AuthGuard;
