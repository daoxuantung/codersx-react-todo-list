import React from 'react';

function FormLogin() {
  return (
    <form className="FormLogin">
        <h1 className="FormLogin-title">
            Sign in
        </h1>
        <div className="FormLogin-group">
            <label for="username">Username</label>
            <input id="username" className="FormLogin-input" type="text" placeholder="Abcxyz"></input>
        </div>
        <div className="FormLogin-group">
            <label for="password">Password</label>
            <input id="password" className="FormLogin-input" type="password" placeholder="********"></input>
        </div>
        <button type="submit">Signin to Coders-X</button>
        <div className="FormLogin-checkbox">
            <input type="checkbox" id="check"></input>
            <label for="check">Keep me signed in</label>
        </div>
        <div className="FormLogin-link">
            <a href="/">Forgot username?</a>
            <a href="/">Forgot password?</a>
        </div>
    </form>
  );
}

export default FormLogin;
