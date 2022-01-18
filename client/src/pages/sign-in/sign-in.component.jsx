import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import "./sign-in.styles.scss";
import Button from "../../components/Button/Button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

//export class SignIn extends Component {
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {    
    event.preventDefault();    
    dispatch(emailSignInStart({email, password}));
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
    
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={(event)=> {setEmail(event.target.value)}}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={(event)=> {setPassword(event.target.value)}}
          label="password"
          required
        />        
        {showPass === true ? password : ""}
        <br/>
        <input type="checkbox" onChange={() => setShowPass(!showPass)} />Show Password?        
        <br/>
        <Button type="submit">Sign In</Button>
        <Button
          type="button"
          onClick={() => dispatch(googleSignInStart())}
          isGoogleButton={true}
        >
          Sign In With Google
        </Button>
      </form>
    </div>
  );
};

// const mapDispatchToProps = dispatch =>({
//   googleSignInStart: () => dispatch(googleSignInStart()),
//   emailSignInStart: (email, password) => dispatch(emailSignInStart(email, password))

// })
//export default connect(null, mapDispatchToProps)(SignIn);
export default SignIn;
