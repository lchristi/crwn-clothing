import React, { Component } from "react";
import FormInput from "../../components/form-input/form-input.component";
import "./sign-in.styles.scss";
import Button from "../../components/Button/Button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    console.log("name: " + name);
    console.log("value: " + value);
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <Button type="submit">Sign In</Button>
          <Button onClick={signInWithGoogle} isGoogleButton={true}>
            Sign In With Google
          </Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
