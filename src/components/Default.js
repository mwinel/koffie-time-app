import React from "react";
import { Link } from "react-router-dom";
import FeaturedPosts from "./featured/FeaturedPosts";
import FeaturedTutorials from "../components/featured/FeaturedTutorials";
import FeaturedEngineering from "./featured/FeaturedEngineering";
import FeaturedCareers from "./featured/FeaturedCareers";
import FeaturedDesign from "./featured/FeaturedDesign";
import NewsLetterSection from "./NewsLetter";
import SeeMore from "./SeeMore";

const Default = () => {
  return (
    <div>
      <FeaturedPosts />
      <div className="container">
        <FeaturedTutorials />
        <FeaturedEngineering />
        <FeaturedCareers />
        <FeaturedDesign />
        <div className="see-more py-5">
          <Link to="/all">
            <SeeMore />
          </Link>
        </div>
      </div>
      <NewsLetterSection />
    </div>
  );
};

export default Default;
