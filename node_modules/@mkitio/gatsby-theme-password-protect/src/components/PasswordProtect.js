/**
 * Write-only the password as cookie
 */
import React, { useState } from 'react';
import { setSessionPassword } from '../utils/utils';


const PasswordProtect = () => {
  const [password, setPassword] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    setSessionPassword(password);
    window.location.reload(); // eslint-disable-line
  };

  return (
    <div className="password-cnt">
      <div className="margin">
      <h1>Hello!</h1>
      


      <form onSubmit={onSubmit}>
      <p>This page is for anyone who's attended a workshop and needs the full resources. <br/><br/>

      You will have been given the password in-person.
      <br/><br/>
      </p>
        <input
          name="password"
          type="password"
          value={password}
          placeholder="Password"
          onChange={event => setPassword(event.target.value)}
          
        />

<div>
        <button className="button"
          type="submit"
          
        >
          Enter
        </button>
        </div>
      </form>
      </div>
      
      
    </div>
  );
};

export default PasswordProtect;
