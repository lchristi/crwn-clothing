import React, { Component } from "react";
import FormInput from "../../components/form-input/form-input.component";
import "./sign-in.styles.scss";
import Button from "../../components/Button/Button.component";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

export class SignIn extends Component {
  
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const {emailSignInStart} = this.props;
    emailSignInStart(email, password);
 
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const {googleSignInStart} = this.props;
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
          <Button
            type="button"
            onClick={googleSignInStart}
            isGoogleButton={true}
          >
            Sign In With Google
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart(email, password))

})
export default connect(null, mapDispatchToProps)(SignIn);
