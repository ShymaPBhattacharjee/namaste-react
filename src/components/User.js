import React, { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  
    // useEffect(() => {
    //    // API call 
    //    // console.log("useEffect")
    // },[count]);

    useEffect(() => {
      // API call 
      console.log("useEffect in User.js");
      // const timer = setInterval(() => {
      //   console.log("Namaste react componentUnmount part OP in User.js");
      // }, 1000);

      return () => {
        console.log("useEffect return / Unmounting in User.js");
        // clearInterval(timer);
      };

   },[]);
   console.log("render called in User.js");

    // ** will czll after the useEffect call
  //   useEffect(() => {
  //     // API call 
  //     // console.log("useEffect")
  //     // will execute aftye the first useEffect call
  //  },[count2]);

  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: {props.location}</h3>
      <h3>Contact: {"bhattacharjeeshyam17@gmail.com"}</h3>
    </div>
  );
};

export default User;
