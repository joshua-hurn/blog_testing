import React, { Component } from "react";

class BlogInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: " ",
      content: " "
    };
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      });
      this.props.history.replace("/");
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>write a blog post</h3>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="widget-area no-padding blank">
              <div className=" status-upload">
                <form>
                  <div className="form-group">
                    <input
                      className=" addBlogInput form-control"
                      placeholder="Who are you?"
                      value={this.state.author}
                      onChange={(e) => this.setState({ author: e.target.value })}
                    />
                  </div>
                  <textarea
                    cols="80"
                    placeholder="What are you doing right now?"
                    value={this.state.content}
                    onChange={(e) => this.setState({ content: e.target.value })}
                  />
                  <button
                    type="submit"
                    className="btn btn-success green"
                    onClick={(e) => this.handleSubmit(e)}
                  >
                    <i className="fa fa-share" /> Share
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogInput;
