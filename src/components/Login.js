import React, { useState, useContext } from "react";
// Assuming you have a context for the login function
import { LoginContext } from './LoginContext'; // Adjust the import path as necessary

function Login() {
  // Use the useContext hook to access the login function from the context
  const login = useContext(LoginContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  console.log('navigated to login');

  function handleChange(e) {
    setFormData({
     ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogin(e) {
    e.preventDefault();
    // Call the login function with the form data
    login(formData);
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <input type="submit" value="Login"/>
    </form>
  );
}

export default Login;
