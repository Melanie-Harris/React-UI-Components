import React from "react";
import './header.css';

const HeaderTitle = () => {
  return (
    <div className="headerTitle">
      <img className="lambdaLogo" alt="Lambda Logo" src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" />
      <h1>Lambda School</h1>
      <a>@LambdaSchool 26 Jan</a>
    
    </div>
  );
};

export default HeaderTitle;
