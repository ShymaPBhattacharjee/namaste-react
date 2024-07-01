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
    <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              Online status: {onLineStatus ? "✅" :  "🔴"}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
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