import React from "react";
import ReactDOM from "react-dom";

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    // all three ways are valid ways to call component inside a component (which is a function)
    {Title()}
    <Title/>
    <Title></Title>
    <h1 id="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
