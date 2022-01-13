import React, { useState, useEffect } from "react";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/Button/Button.component";

import "./sign-up.component";
import { signUpStart } from "../../redux/user/user.actions";
import { useSelector, useDispatch } from "react-redux";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfPassword] = useState("");    
  
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  useEffect(() => {    
    if(error !== null) alert(error);    
  }, [error])

  const handleSubmit = async (e) => {    
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    dispatch(signUpStart({displayName, email, password}));
   
  };

  const handleChange = (event) => {
    if (event.target.name === "displayName") setDisplayName(event.target.value);
    if (event.target.name === "email") setEmail(event.target.value);
    if (event.target.name === "password") setPassword(event.target.value);
    if (event.target.name === "confirmPassword")
      setConfPassword(event.target.value);
  };  
  return (
    
    <div className="sign-up">
      <div className="title">
        <b>I do not have a account</b>
      </div>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        ></FormInput>
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
}

export default SignUp;