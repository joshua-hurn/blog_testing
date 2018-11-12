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
        `http://localhost:3000/api/blog/${this.props.match.params.id}`
      );
      let blog = await res.json();
      this.setState({ blog });
    } catch (event) {
      console.log(event);
    }
  }

  render() {
    return (
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{this.state.blog.title}</h5>
          <p class="card-text">{this.state.blog.content}</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default SingleBlog;
