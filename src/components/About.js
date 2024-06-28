import UserClass from "./UserClass";
import User from "./User";
import React from "react";

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste-react webSeries</h2>
//             <UserClass name={"Shyma Prosad Bhattacharjee"} location={"Kolkata"}/>
//         </div>
//     );
// };

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor called");
  }

  componentDidMount() {
    // console.log("Parent component did mount called");
    // API Call
  }

  render() {
    // console.log("Parent render called");

    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste-react webSeries</h2>
        {/* <UserClass name={"first"} location={"Kolkata"} /> */}
        {/* <UserClass name={"second"} location={"Dehradun"} /> */}
        <User name={"first"} location={"Kolkata"} />
      </div>
    );
  }
}

export default About;
