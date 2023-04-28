import React from 'react';
import { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInHandler = () => {
    console.log(email, password);
  };
  return (
    <div>
      <form onSubmit={signInHandler}>
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
