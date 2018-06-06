import React from "react";
import './Navigation.css';
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";
import { connect } from "react-redux";
import { removeAuthenticatedUser } from "../../actions/authenticateUser";
import { removeUserId } from "../../actions/userIdActions";
import { removeZipcode } from "../../actions/zipcodeActions";
import { removeUsername } from "../../actions/usernameActions";
import PropTypes from 'prop-types';

export const Navigation = (props) => {
  return (
    props.authUser ?
      <AuthNavigation
        username={props.username}
        zipcode={props.zipcode}
        removeId={props.removeId}
        removeUser={props.removeUser}
        removeZip={props.removeZip}
        removeUsername={props.removeUsername}
      /> :
      <UnauthNavigation />
  );
};

export const AuthNavigation = ({
  username,
  zipcode,
  removeId,
  removeUser,
  removeZip,
  removeUsername
}) => {
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
            removeZip();
            removeUsername();
          }}
        >
          Sign Out
        </NavLink>
      </div>
      <div className="user-display">
        Welcome, {username}! Your default view is zip code {zipcode}.
      </div>
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
  username: PropTypes.string,
  zipcode: PropTypes.number,
  removeId: PropTypes.func,
  removeUser: PropTypes.func,
  removeZip: PropTypes.func,
  removeUsername: PropTypes.func
};

Navigation.propTypes = {
  authUser: PropTypes.bool,
  username: PropTypes.string,
  zipcode: PropTypes.number,
  removeId: PropTypes.func,
  removeUser: PropTypes.func,
  removeZip: PropTypes.func,
  removeUsername: PropTypes.func
};

export const mapStateToProps = (state) => ({
  authUser: state.authUser,
  username: state.username,
  zipcode: state.zipcode
});

export const mapDispatchToProps = (dispatch) => ({
  removeUser: () => dispatch(removeAuthenticatedUser()),
  removeId: () => dispatch(removeUserId()),
  removeZip: () => dispatch(removeZipcode()),
  removeUsername: () => dispatch(removeUsername())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);