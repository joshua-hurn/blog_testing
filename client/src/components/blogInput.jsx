import React, { Component } from "react";
import { withRouter } from "react-router";
import  *  as  blogServices  from  '../services/blogs';

class BlogInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: " ",
      content: " "
    };

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(event) {
    this.setState({ title: event.target.value });
  }

  handleContentChange(event) {
    this.setState({ content: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      let res = await blogServices.insert(this.state);
      this.props.history.replace("/");
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="card blogInputCard">
        <div className="card-header">Blog Input</div>
        <div className="card-body">
          <form className="addBlogInput" cols="80" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>
                Title:
                <input
                  type="text"
                  className="form-control"
                  id="addBlogAuthor"
                  placeholder="Enter your Name?"
                  value={this.state.title}
                  onChange={this.handleAuthorChange}
                />
              </label>
            </div>
            <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                id="blogInputText"
                placeholder="Write blog post here"
                value={this.state.content}
                onChange={this.handleContentChange}
              />
            </div>
            <button type="submit" value="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(BlogInput);
