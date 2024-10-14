import React from "react";

const TwoLinesHeading = ({ as: Tag = "h1", children }) => {
  return <Tag className="centered-heading">{children}</Tag>;
};

export default TwoLinesHeading;
