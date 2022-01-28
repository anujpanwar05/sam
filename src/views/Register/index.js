import React, { Component,useContext,useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {MyContext} from '../../contexts/MyContext';
import axios from 'axios';

//import Registerform from './Registerform';



export default class Register extends Component {
	constructor(props){
		super(props);
		this.onChangeName= this.onChangeName.bind(this);
		this.onChangeEmail= this.onChangeEmail.bind(this);
		this.onChangePassword= this.onChangePassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state ={
		name: '',
		email:'',
		password:'',
		nameError: '',
		emailError:'',
		passwordError:'',
		registerError:'',
		}
	}
	onChangeName(e){
		this.setState({
			name:e.target.value
		});
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
		
		let nameError = '';
		let emailError = '';
		let passwordError = '';
		
		if (this.state.name == '') {
		  nameError = 'Please enter your name'
		}
		if (this.state.email == '') {
		  emailError = 'Please enter a E-mail'
		}
		if (this.state.password == '' || this.state.password.length < 6) {
		  passwordError = 'Please enter a valid password'
		}
		if (nameError) {
		  this.setState({ nameError })
		  return false
		}else{
		this.setState({
			nameError:''
		});	
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
			  name:this.state.name,
			  email:this.state.email,
			  password:this.state.password,
			};
		   
			axios.post('http://13.233.64.4/register.php',obj)
			.then(res=> {
				let result = res.data;
				if(result.type=='success'){
					this.setState({registerError:result.message});
					//sessionStorage.setItem('userData',JSON.stringify(result.user));
				}else{
					this.setState({registerError:result.message});
				}
				
			})
			.catch(error => {
			  console.log(error.response)
		  });
		 
		//To clear text box values 
		  this.setState({
			name: '',
			email:'',
			password:'',
		 
		  })
		}   
	}
  render() {
    return (
	<>			
	<div className="authentication-bg">
	<div className="account-pages mt-5 mb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card">
                            
                            <div className="card-header pt-4 pb-4 text-center bg-primary">
                                <a href="/">
                                    <span><img src="./images/logo.png" alt="" height="18"/></span>
                                </a>
                            </div>

                            <div className="card-body p-4">
                                
                                <div className="text-center w-75 m-auto">
                                    <h4 className="text-dark-50 text-center mt-0 font-weight-bold">Free Sign Up</h4>
                                    <p className="text-muted mb-4">Don't have an account? Create your account, it takes less than a minute </p>
                                </div>
								<div className="loginmessage">{this.state.registerError}</div>
                                <form method="POST" action="#">

                                    <div className="form-group">
                                        <label for="fullname">Full Name</label>
                                        <input onChange={this.onChangeName} className="form-control" type="text" id="fullname" placeholder="Enter your name" value={this.state.name} required/>
										<span className="error">{this.state.nameError}</span>
                                    </div>

                                    <div className="form-group">
                                        <label for="emailaddress">Email address</label>
                                        <input onChange={this.onChangeEmail} className="form-control" type="email" id="emailaddress" required value={this.state.email} placeholder="Enter your email"/>
										<span className="error">{this.state.emailError}</span>
                                    </div>

                                    <div className="form-group">
                                        <label for="password">Password</label>
                                        <div className="input-group input-group-merge">
                                            <input onChange={this.onChangePassword} type="password" id="password" className="form-control" value={this.state.password} placeholder="Enter your password"/>
                                            <div className="input-group-append" data-password="false">
                                                <div className="input-group-text">
                                                    <span className="password-eye"></span>
                                                </div>
                                            </div>
                                        </div>
										<span className="error">{this.state.passwordError}</span>
                                    </div>

                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="checkbox-signup"/>
                                            <label className="custom-control-label" for="checkbox-signup">I accept <a href="#" className="text-muted">Terms and Conditions</a></label>
                                        </div>
                                    </div>

                                    <div className="form-group mb-0 text-center">
                                        <button onClick={this.onSubmit} className="btn btn-primary" type="submit"> Sign Up </button>
                                    </div>

                                </form>
                            </div> 
                        </div>
                       

                        <div className="row mt-3">
                            <div className="col-12 text-center">
                                <p className="text-muted">Already have account? <Link to={`/login`} activeClassName="active"><b>Log In</b></Link></p>
                            </div> 
                        </div>
                        

                    </div> 
                </div>
                
            </div>
            
        </div>
        

        <footer class="footer footer-alt">
            2018 - 2020 © Hyper - Coderthemes.com
        </footer>
	</div>
	</>
    );
  }
}
