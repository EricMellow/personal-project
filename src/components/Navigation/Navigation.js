import React from "react";
import './Navigation.css';
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";

const Navigation = () => {
  return (
    <div className='nav-bar'>
      <NavLink to="/distance">Distance</NavLink>
      <NavLink to="/tags">Tags</NavLink>
      <NavLink to="/create">Create Activity</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/" onClick={auth.doSignOut}>Sign Out</NavLink>
      <NavLink to="/account">Account</NavLink>
    </div>
  );
};

export default Navigation;