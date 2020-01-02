import React, { Component } from "react";
import { Posts } from "./data";

const PostContext = React.createContext();

class PostProvider extends Component {
  state = {
    posts: [],
    notFeatured: [],
    featuredPosts: [],
    featuredTutorials: [],
    featuredEngineering: [],
    featuredCareers: [],
    featuredDesign: []
  };

  componentDidMount() {
    this.setPosts();
  }

  setPosts = () => {
    let tempPosts = [];
    let notFeatured = [];
    let featuredPosts = [];
    let featuredTutorials = [];
    let featuredEngineering = [];
    let featuredCareers = [];
    let featuredDesign = [];
    Posts.forEach(item => {
      const singlePost = { ...item };
      tempPosts = [...tempPosts, singlePost];
      // not featured.
      const notfeatured = tempPosts.filter(item => item.featured === false);
      notFeatured = [...notfeatured]
      // featured post.
      const featured = tempPosts.filter(item => item.featured === true);
      featuredPosts = [...featured.slice(0, 1)];
      // featured tutorials
      const tutorialCategory = "Tutorial";
      const tempTutorials = tempPosts.filter(
        item => item.category === tutorialCategory.toLowerCase()
      );
      featuredTutorials = [...tempTutorials.slice(0, 3)];
      // featured engineering
      const engineeringCategory = "Engineering";
      const tempEngineering = tempPosts.filter(
        item => item.category === engineeringCategory.toLowerCase()
      );
      featuredEngineering = [...tempEngineering.slice(0, 3)];
      // featured careers
      const careersCategory = "Career";
      const tempCareers = tempPosts.filter(
        item => item.category === careersCategory.toLowerCase()
      );
      featuredCareers = [...tempCareers.slice(0, 3)];
      // featured design
      const designCategory = "Design";
      const tempDesign = tempPosts.filter(
        item => item.category === designCategory.toLowerCase()
      );
      featuredDesign = [...tempDesign.slice(0, 3)];
    });
    this.setState(() => {
      return {
        posts: tempPosts,
        notFeatured: notFeatured.filter(item => item.featured === false),
        featuredPosts: featuredPosts,
        featuredTutorials: featuredTutorials.filter(item => item.featured === false),
        featuredEngineering: featuredEngineering.filter(item => item.featured === false),
        featuredCareers: featuredCareers.filter(item => item.featured === false),
        featuredDesign: featuredDesign.filter(item => item.featured === false)
      };
    });
  };

  render() {
    return (
      <PostContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </PostContext.Provider>
    );
  }
}

const PostConsumer = PostContext.Consumer;

export { PostProvider, PostConsumer };
