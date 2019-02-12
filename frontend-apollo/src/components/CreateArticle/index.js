import React from "react";
import faker from "faker";
import {
  Card,
  FormGroup,
  InputGroup,
  TextArea,
  Button,
  Intent
} from "@blueprintjs/core";
import "./style.css";

class CreateArticle extends React.Component {
  state = {
    title: "",
    body: ""
  };

  handleTitleChange = event => {
    event.preventDefault();
    this.setState({ title: event.target.value });
  };

  handleBodyChange = event => {
    event.preventDefault();
    this.setState({ body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createArticleHandler(this.state);
    this.clearState();
  };

  handleOnClickFake = event => {
    event.preventDefault();
    this.setState({
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraphs(5)
    });
  };

  clearState = () => {
    this.setState({
      title: "",
      body: ""
    });
  };

  render() {
    return (
      <section className="CreateArticle">
        <Card>
          <div className="CreateArticle--content-container">
            <h2 className="CreateArticle--title">Publish a new article</h2>
            <form onSubmit={this.handleSubmit}>
              <FormGroup label="Title" labelFor="title">
                <InputGroup
                  id="title"
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                />
              </FormGroup>
              <FormGroup label="Body" labelFor="body">
                <TextArea
                  id="body"
                  fill
                  value={this.state.body}
                  onChange={this.handleBodyChange}
                />
              </FormGroup>

              <div className="CreateArticle--button-container">
                <Button
                  type="submit"
                  text="Publish"
                  intent={Intent.PRIMARY}
                  disabled={!this.state.title || !this.state.body}
                />
                <Button text="Lorem ipsum" onClick={this.handleOnClickFake} />
              </div>
            </form>
          </div>
        </Card>
      </section>
    );
  }
}

export default CreateArticle;
