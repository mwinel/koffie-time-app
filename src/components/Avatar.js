import React from "react";

const Avatar = ({ avatar }) => {
  const styles = {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${avatar})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    width: "36px",
    height: "36px"
  };
  return (
    <div className="author-avatar mr-2" style={styles}>
    </div>
  );
};

export default Avatar;
