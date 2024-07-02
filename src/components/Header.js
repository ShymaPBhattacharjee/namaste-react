import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log('Header render');

  const onLineStatus = useOnlineStatus();

  // if no dependency Array, useEffect will call every time my header component will re-render
  // useEffect(() => {
  //   console.log('useEffect called');
  // });

  // if the dependency Array is empty, useEffect will call on initial render and only once
  useEffect(() => {
    console.log('useEffect called');
  }, []);

  // if we have something in the dependency Array, useEffect will call everytime whenever our dependency array value got change i.e when btnNameReact updated
  // useEffect(() => {
  //   console.log('useEffect called');
  // }, [btnNameReact]);

    return (
    <div className="flex justify-between bg-pink-300 shadow-lg mb-2 sm:bg-yellow-100 lg:bg-green-50">
        <div className="logo-container">
          <img className="w-48" src={LOGO_URL}></img>
        </div>
        <div className="nav-items flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              Online status: {onLineStatus ? "✅" :  "🔴"}
            </li>
            <li className= "px-4">
              <Link to="/">Home</Link>
            </li>
            <li className= "px-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className= "px-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className= "px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className= "px-4">
              Cart
            </li>

            <button className="login" onClick={() => {
              btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
            }}>{btnNameReact}</button>
          </ul>
        </div>
    </div>
    );
  };

  export default Header;