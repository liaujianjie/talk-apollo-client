import React from "react";
import { Card, FormGroup, InputGroup, Button, Intent } from "@blueprintjs/core";
import "./style.css";

class LoginPanel extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleUsernameChange = event => {
    event.preventDefault();
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
    event.preventDefault();
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onLogin(this.state);
  };

  render() {
    return (
      <div className="LoginPanel">
        <Card>
          <div className="LoginPanel--content-container">
            <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <InputGroup
                  id="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                  leftIcon="user"
                  large
                  data-lpignore="true"
                />
              </FormGroup>
              <FormGroup>
                <InputGroup
                  id="password"
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  leftIcon="lock"
                  large
                  data-lpignore="true"
                />
              </FormGroup>

              <br />

              <div className="LoginPanel--button-container">
                <Button
                  type="submit"
                  text="Login"
                  intent={Intent.PRIMARY}
                  disabled={!this.state.username || !this.state.password}
                  large
                  fill
                />
              </div>
            </form>
          </div>
        </Card>
      </div>
    );
  }
}

export default LoginPanel;
