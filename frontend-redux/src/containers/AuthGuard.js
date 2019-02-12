import React from "react";
import { connect } from "react-redux";
import { getAuthToken } from "../selectors/auth";
import { login } from "../actions/auth";
import LoginPanel from "../components/LoginPanel";

class AuthGuard extends React.Component {
  render() {
    const { children, authToken } = this.props;

    if (!authToken) {
      return <LoginPanel onLogin={this.props.login} />;
    }

    return children;
  }
}

const mapStateToProps = rootState => ({
  authToken: getAuthToken(rootState)
});

const mapDispatchToProps = {
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthGuard);
