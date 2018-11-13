import React, { Component } from "react";

class SingleBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blog: {}
    };
  }

  async componentDidMount() {
    try {
      let res = await fetch(
        `http://localhost:3000/api/blogs/${this.props.match.params.id}`
      );
      let blog = await res.json();
      this.setState({ blog });
    } catch (event) {
      console.log(event);
    }
  }

  render() {
    return (
      <div>
        {console.log(this.state)}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.state.blog.title}</h5>
            <p className="card-text">{this.state.blog.content}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBlog;
