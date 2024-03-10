import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props){
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount")
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"Ashish Ambre (Class)"} location={"Mumbai Class"}/>
      </div>
    );
  }
}

export default About;