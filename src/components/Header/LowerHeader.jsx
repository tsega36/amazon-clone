import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const LowerHeader = () => {
  return (
    <div className="lower-header">
      <ul>
        <li>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li>
          <a href="/">Today's Deals</a>
        </li>
        <li>
          <a href="/">Prime Video</a>
        </li>
        <li>
          <a href="/">Registry</a>
        </li>
        <li>
          <a href="/">Gift Cards</a>
        </li>
        <li>
          <a href="/">Customer Service</a>
        </li>
        <li>
          <a href="/">Sell</a>
        </li>
      </ul>
    </div>
  );
};

export default LowerHeader;
