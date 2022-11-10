import React, { useState } from "react";
import "../css/signIn.css";

const SignIn = () => {
  const [userName, setUserName] = useState(" ");
  const [password, setPassword] = useState(" ");
  //console.log(userName, password);

  const handleChange = (e) => {
    setUserName(e);
  };

  return (
    <div className="signIn">
      <form>
        <label>
          <p>User-name</p>
          <input
            type="text"
            name="User Name"
            value={userName}
            onChange={(e) => handleChange(e.target.value)}
          />
        </label>
      </form>
      <form>
        <label>
          <p>Password</p>
          <input
            type="text"
            name="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default SignIn;
