import React, { Component } from "react";
import FeaturedPost from "./FeaturedPost";
import { PostConsumer } from "../../context";

class FeaturedPosts extends Component {
  render() {
    const bg = process.env.PUBLIC_URL + "/images/cool-background.png";
    const styles = {
      backgroundImage: `url(${bg})`,
      backgroundPosition: "0% 100%"
    };
    return (
      <section className="featured-section pb-4" style={styles}>
        <div className="container">
          <h6 className="grid-title pt-4 pb-2">Featured</h6>
          <div className="row">
            <PostConsumer>
              {value => {
                return value.featuredPosts.map(post => {
                  return <FeaturedPost key={post.id} post={post} />;
                });
              }}
            </PostConsumer>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedPosts;
