import React, { Component } from "react";
import { Link,Navigate } from "react-router-dom";

import "./style.css";
import axios from 'axios';

export default class Login extends Component {
	constructor(props){
		super(props);
		this.onChangeEmail= this.onChangeEmail.bind(this);
		this.onChangePassword= this.onChangePassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state ={
		email:'',
		password:'',
		emailError:'',
		passwordError:'',
		loginError:'',
		isLoggedIn:false,
		}
	}
	onChangeEmail(e){
		this.setState({
			email:e.target.value
		});
	}

	onChangePassword(e){
		this.setState({
			password:e.target.value
		});
	}
	validate() {
		// let firstNameError= '';
		// let lastNameError= '';
		//  let emailError= '';
		let passwordError = '';
		let emailError = '';
		this.setState({loginError:''});
		if (this.state.email == '') {
		    emailError = 'Please enter a E-mail'
		}else{
			emailError = '';
		}
		if (this.state.password == '' || this.state.password.length < 6) {
		    passwordError = 'Please enter a valid password';
		}else{
			passwordError = '';
		}
		if (emailError) {
		  this.setState({ emailError })
		  return false
		}else{
		this.setState({
			emailError:''
		});	
		}

		if (passwordError) {
		  this.setState({ passwordError })
		  return false
		}else{
			this.setState({
				passwordError:''
			});
		}

		return true;
	  }
	onSubmit(e){
	  e.preventDefault();
	  const isValid = this.validate()
    if (isValid) {
		const obj ={
		  email:this.state.email,
		  password:this.state.password,
		};
	   
		axios.post('https://konstellatestg.wpengine.com/api/login.php',obj)
		.then(res=> {
			let result = res.data;
			if(result.type=='success'){
				this.setState({loginError:'Login Successful'});
				this.setState({isLoggedIn:true});
				sessionStorage.setItem('userData',JSON.stringify(result.user));
			}else{
				this.setState({loginError:'Email or Password not correct'});
			}
			
		})
		.catch(error => {
		  console.log(error.response)
	  });
	 
	//To clear text box values 
	  this.setState({
		email:'',
		password:'',
	 
	  })
	}  
	}
  render() {
	  let login = sessionStorage.getItem('userData');
	  if(this.state.isLoggedIn === true || sessionStorage.getItem('myData')!=''){
            return (<Navigate to="/people" />);
        }
    return (
	<>
	<div className="authentication-bg">
	<div className="account-pages mt-5 mb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card">
                            <div className="card-header pt-4 pb-4 text-center bg-primary">
                                <a href="index.html">
                                    <span><img src="./images/logo.png" alt="" height="18"/></span>
                                </a>
                            </div>
                            <div className="card-body p-4">                               
                                <div className="text-center w-75 m-auto">
                                    <h4 className="text-dark-50 text-center mt-0 font-weight-bold">Sign In</h4>
                                    <p className="text-muted mb-4">Enter your email address and password to access admin panel.</p>
                                </div>
								<div className="loginmessage">{this.state.loginError}</div>
                                <form action="#">
                                    <div className="form-group">
                                        <label htmlFor="emailaddress">Email address</label>
                                        <input onChange={this.onChangeEmail} value={this.state.email} className="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email"/>
										<span className="error">{this.state.emailError}</span>
                                    </div>
                                    <div className="form-group">
                                        <a href="pages-recoverpw.html" className="text-muted float-right"><small>Forgot your password?</small></a>
                                        <label htmlFor="password">Password</label>
                                        <div className="input-group input-group-merge">
                                            <input type="password" onChange={this.onChangePassword} value={this.state.password} id="password" className="form-control" placeholder="Enter your password"/>
                                            <div className="input-group-append" data-password="false">
                                                <div className="input-group-text">
                                                    <span className="password-eye"></span>
                                                </div>
                                            </div>
                                        </div>
										<span className="error">{this.state.passwordError}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="checkbox-signin" checked/>
                                            <label className="custom-control-label" htmlFor="checkbox-signin">Remember me</label>
                                        </div>
                                    </div>
                                    <div className="form-group mb-0 text-center">
                                        <button onClick={this.onSubmit} className="btn btn-primary" type="submit"> Log In </button>
                                    </div>
                                </form>
                            </div>
                        </div>           
                        <div className="row mt-3">
                            <div className="col-12 text-center">
                                <p className="text-muted">Don't have an account? <Link to={`/register`} activeClassName="active"><b>Sign Up</b></Link></p>
                            </div> 
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <footer className="footer footer-alt">
            2018 - 2020 ?? Hyper - Coderthemes.com
        </footer>
	</div>
	</>
    );
  }
}
