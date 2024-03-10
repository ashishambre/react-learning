import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "John Doe", 
        location: "Default location",
      }
    };
    console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child componentDidMount");

    const data = await fetch("https://api.github.com/users/ashishambre");
    const json = await data.json();
    
    this.setState({
      userInfo: json,
    })
  }
  
  componentDidUpdate() {
    console.log(this.props.name + "Child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log(this.props.name + "Child componentWillUnmount");
  }

  render() {
    // const { name, location } = this.props;
    // const { count } = this.state;

    const { name, location, avatar_url } = this.state.userInfo;
    console.log(this.props.name + "Child render");

    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @ashishambre</h4>
      </div>
    );
  }
}

export default UserClass;

/**
 * ---- MOUNTING ----
 * 
 * Constructor (dummy)
 * Render (dummy)
 * 
 *  <HTML (dummy)>
 * componentDidMount
 *  <API call> 
 *  <this.setState> --> State variable is updated
 * 
 * ---- UPDATE -----
 * 
 *  render (API data)
 *  <MTML (new API data)
 *  componentDidUpdate
 * 
 * ---- UNMOUNTING ---- 
 * willComponentUnmount
 * 
 *  ** unmouting happens when you go to the different page
 * 
 */