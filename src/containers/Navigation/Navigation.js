import React from "react";
import './Navigation.css';
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";
import { connect } from "react-redux";
import { removeAuthenticatedUser } from "../../actions/authenticateUser";
import { removeUserId } from "../../actions/userIdActions";
import PropTypes from 'prop-types';

export const Navigation = ({ authUser }) => {
  return (authUser ? <AuthNavigation /> : <UnauthNavigation />);
};

export const AuthNavigation = (props) => {
  return (
    <div className='nav-bar'>
      <NavLink
        to="/"
        className="zone1">
        Apptivity Zone
      </NavLink>
      <NavLink 
        to="/distance" 
        className="nav-button">
        See Activities in Your Area
      </NavLink>
      <NavLink 
        to="/tags" 
        className="nav-button">
        Search By Type
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
          props.removeId();
          props.removeUser();
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
      <NavLink
        to="/"
        className="zone1">
        Apptivity Zone
      </NavLink>
      <NavLink 
        to="/signin" 
        className="nav-button nav-sign-in-btn">
        Sign In
      </NavLink>
    </div>
  );
};

AuthNavigation.propTypes = {
  authUser: PropTypes.bool,
  removeUser: PropTypes.func,
  removeId: PropTypes.func
};

Navigation.propTypes = {
  authUser: PropTypes.bool
};

export const mapStateToProps = (state) => ({
  authUser: state.authUser
});

export const mapDispatchToProps = (dispatch) => ({
  removeUser: () => dispatch(removeAuthenticatedUser()),
  removeId: () => dispatch(removeUserId())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);