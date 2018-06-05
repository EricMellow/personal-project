import React from "react";
import './Navigation.css';
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";
import { connect } from "react-redux";
import { removeAuthenticatedUser } from "../../actions/authenticateUser";
import { removeUserId } from "../../actions/userIdActions";
import PropTypes from 'prop-types';

export const Navigation = (props) => {
  return (
    props.authUser ? 
      <AuthNavigation 
        username={props.username} 
        zipcode={props.zipcode}
        removeId={props.removeId}
        removeUser={props.removeUser}
      /> : 
      <UnauthNavigation />
  );
};

export const AuthNavigation = ({username, zipcode, removeId, removeUser}) => {
  return (
    <nav>
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
            removeId();
            removeUser();
          }} 
        >
          Sign Out
        </NavLink>
      </div>
      <div className="user-display">{username}</div>
    </nav>
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
  authUser: state.authUser,
  username: state.username,
  zipcode: state.zipcode
});

export const mapDispatchToProps = (dispatch) => ({
  removeUser: () => dispatch(removeAuthenticatedUser()),
  removeId: () => dispatch(removeUserId())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);