import React, { Component, Fragment } from "react";
import BlogCard from "./blogcard";

class FrontPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: []
    };
  }

  async componentDidMount() {
    try {
      let res = await fetch("api/blogs");
      let blogs = await res.json();
      this.setState({ blogs });
    } catch (e) {
      console.log(e);
    }
  }

  renderBlogs() {
    return this.state.blogs.map(blog => {
      return (
        <BlogCard
          key={blog.id}
          id={blog.id}
          title={blog.title}
          content={blog.content}
          blog={blog}
        />
      );
    });
  }

  render() {
    return (
      <Fragment>
        <div className="blogContainer container">{this.renderBlogs()}</div>
      </Fragment>
    );
  }
}

export default FrontPage;
