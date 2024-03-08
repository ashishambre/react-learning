import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React Web Series</h2>
      <User name={"Ashish Ambre (Function)"} />
      <UserClass name={"Ashish Ambre (Class)"} location={"Mumbai Class"}/>
    </div>
  )
}

export default About;