import React from 'react';
import { connect } from 'react-redux'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss'

class SignUp extends React.Component {
  constructor(){
    super();
    this.state = {
      displayName: '', 
      email: '', 
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state
    const { signUpStart } = this.props

    if(password !== confirmPassword){
      alert('Password mismatch')
      return;
    }

    signUpStart({email, password, displayName})
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  render(){
    const { displayName, email, password, confirmPassword } = this.state
    return(
      <div className="sign-up">
        <h2 className="title"> I do not have a account</h2>
        <span>Sign up with you email and password</span>
        <form className="formsign-up-form" onSubmit={this.handleSubmit}>
          <FormInput type="text" label='Display Name' name='displayName' value={displayName} onChange={this.handleChange} required/>
          <FormInput type="email" label='Email' name='email' value={email} onChange={this.handleChange} required />
          <FormInput type="password" label='Password' name='password' value={password} onChange={this.handleChange} required />
          <FormInput type="password" label='Confirm Password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} required />

          <CustomButton type="submit"> SIGN UP </CustomButton>
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps )(SignUp);