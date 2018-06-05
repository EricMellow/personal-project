import React from "react";
import './Navigation.css';
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";
import { connect } from "react-redux";
import { removeAuthenticatedUser } from "../../actions/authenticateUser";
import { removeUserId } from "../../actions/userIdActions";

export const Navigation = ({ authUser }) => {
  return (authUser ? <AuthNavigation /> : <UnauthNavigation />);
};

export const AuthNavigation = () => {
  return (
    <div className='nav-bar'>
      <h1 className="zone1">Apptivity Zone</h1>
      <NavLink 
        to="/distance" 
        className="nav-button">
        Distance
      </NavLink>
      <NavLink 
        to="/tags" 
        className="nav-button">
        Type
      </NavLink>
      <NavLink 
        to="/create" 
        className="nav-button">
        Create Activity
      </NavLink>
      <NavLink 
        to="/" 
        className="nav-button sign-out"
        onClick={() => {
          auth.doSignOut();
          this.props.removeId();
          this.props.removeUser();
        }} 
      >
        Sign Out
      </NavLink>
    </div>
  );
};

export const UnauthNavigation = () => {
  return (
    <div className='nav-bar'>
      <h1 className="zone1">Apptivity Zone</h1>
      <NavLink to="/signin" className="nav-button nav-sign-in-btn">Sign In</NavLink>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  authUser: state.authUser
});

export const mapDispatchToProps = (dispatch) => ({
  removeUser: () => dispatch(removeAuthenticatedUser()),
  removeId: () => dispatch(removeUserId())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);