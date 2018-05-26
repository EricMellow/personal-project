import React from "react";
import './Navigation.css';
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";
import { connect } from "react-redux";
import { removeAuthenticatedUser } from "../../actions/authenticateUser";

const Navigation = ({ authUser }) => {
  return (authUser ? <AuthNavigation /> : <UnauthNavigation />);
};

const AuthNavigation = () => {
  return (
    <div className='nav-bar'>
      <NavLink 
        to="/distance" 
        className="nav-button">
        Distance
      </NavLink>
      <NavLink 
        to="/tags" 
        className="nav-button">
        Tags
      </NavLink>
      <NavLink 
        to="/create" 
        className="nav-button">
        Create Activity
      </NavLink>
      <NavLink 
        to="/" 
        onClick={() => {
          auth.doSignOut();
          this.props.removeUser();
        }} 
        className="nav-button">
        Sign Out
      </NavLink>
      <NavLink 
        to="/account" 
        className="nav-button">
        Account
      </NavLink>
    </div>
  );
};

const UnauthNavigation = () => {
  return (
    <div className='nav-bar'>
      <NavLink to="/distance" className="nav-button">Distance</NavLink>
      <NavLink to="/signin" className="nav-button">Sign In</NavLink>
      <NavLink to="/signup" className="nav-button">Sign Up</NavLink>
    </div>
  )
}

const mapStateToProps = (state) => ({
  authUser: state.authUser
});

const mapDispatchToProps = (dispatch) => ({
  removeuser: () => dispatch(removeAuthenticatedUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);