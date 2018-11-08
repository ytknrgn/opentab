import React from 'react';
import PropTypes from 'prop-types';

function Login({
  email,
  password,
  phone,
  username,
  userType,
  getLogin,
  getEmail,
  getPassword,
  getNewUser,
  getUsername,
  getPhone,
  getUserType,
}) {
  return (
    <div>
      {userType === 'existingUser' && (
        <div>
          <form onSubmit={getLogin}>
            <label>
              {' '}
              Email:
              <input
                type="text"
                value={email}
                onChange={event => getEmail(event.target.value)}
                placeholder="Email"
              />
            </label>
            <label>
              {' '}
              Password:
              <input
                type="password"
                value={password}
                onChange={event => getPassword(event.target.value)}
                placeholder="Password"
              />
            </label>
            <button type="submit">Login</button>
          </form>
          <div>
            <div>No account?</div>
            <button type="button" onClick={() => getUserType('newUser')}>
              Sign Up
            </button>
          </div>
        </div>
      )}

      {userType === 'newUser' && (
        <div>
          <form onSubmit={getNewUser}>
            <label>
              {' '}
              Email:
              <input
                type="text"
                value={email}
                onChange={event => getEmail(event.target.value)}
                placeholder="Email"
              />
            </label>
            <label>
              {' '}
              Username:
              <input
                type="text"
                value={username}
                onChange={event => getUsername(event.target.value)}
                placeholder="Username"
              />
            </label>
            <label>
              {' '}
              Phone:
              <input
                type="text"
                value={phone}
                onChange={event => getPhone(event.target.value)}
                placeholder="Phone"
              />
            </label>
            <label>
              {' '}
              Password:
              <input
                type="password"
                value={password}
                onChange={event => getPassword(event.target.value)}
                placeholder="Password"
              />
            </label>
            <button type="submit">Create account</button>
          </form>
          <div>
            <div>Already have an account?</div>
            <button type="button" onClick={() => getUserType('existingUser')}>
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  userType: PropTypes.string.isRequired,
  getLogin: PropTypes.func.isRequired,
  getEmail: PropTypes.func.isRequired,
  getPassword: PropTypes.func.isRequired,
  getNewUser: PropTypes.func.isRequired,
  getUsername: PropTypes.func.isRequired,
  getPhone: PropTypes.func.isRequired,
  getUserType: PropTypes.func.isRequired,
};

export default Login;
