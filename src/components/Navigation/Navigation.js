import React from "react";
import './Navigation.css';
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";
import { connect } from "react-redux";

const Navigation = ({ authUser }) => {
  return (authUser ? <AuthNavigation /> : <UnauthNavigation />);
};

const AuthNavigation = () => {
  return (
    <div className='nav-bar'>
      <NavLink to="/distance">Distance</NavLink>
      <NavLink to="/tags">Tags</NavLink>
      <NavLink to="/create">Create Activity</NavLink>
      <NavLink to="/" onClick={auth.doSignOut}>Sign Out</NavLink>
      <NavLink to="/account">Account</NavLink>
    </div>
  );
};

const UnauthNavigation = () => {
  return (
    <div className='nav-bar'>
      <NavLink to="/distance">Distance</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
    </div>
  )
}

const mapStateToProps = (state) => ({
  authUser: state.authUser
});

export default connect(mapStateToProps)(Navigation);