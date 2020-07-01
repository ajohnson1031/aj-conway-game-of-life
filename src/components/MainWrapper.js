import React from "react";

const MainWrapper = ({ items }) => {
  return <div className='main-wrapper'>{items.map((item) => item)}</div>;
};

export default MainWrapper;
