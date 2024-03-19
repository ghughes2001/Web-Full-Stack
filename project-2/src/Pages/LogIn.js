import React, { useState } from 'react'
import "../CSS/LogIn.css";
import "../JSS/LogInMobile"


const LogInForm = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { handleSignIn } = props;

    const handleSubmit = async(event) => {
        event.provenDefault()
        handleSignIn = true;
    }

    return (
        <div class="login-img">
            <div class="login-nav" id="log-nav">
                <a href="..//index.html" style="text-decoration: none;"> Home </a>
                <a href="../Registration/registration.html" style="text-decoration: none;"> Registration </a>
                <a href="./login.html" style="text-decoration: none;" class="active"> Login </a>
                <a href="../Account/account.html" style="text-decoration: none;"> Account </a>
                <a href="#" style="text-decoration: none;"> Logout </a>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars"></i></a>
            </div>
            <form onSubmit= { handleSubmit }>
                <div className="logging-in">
                    <label htmlFor="user"><b> Username </b></label>
                    <input type="text" placeholder="Enter Username" name="user" value= {username} onChange={({target}) => setUsername(target.value)} required />

                    <label htmlFor="psw"><b> Password </b></label>
                    <input type="password" placeholder="Enter Password" name="psw" value= {password} onChange={({target}) => setPassword(target.value)} required />

                    <div className="buttons">
                        <button type="reset" value="Reset"> Clear </button>
                        <button type="submit" value="Submit"> Sign In </button>
                    </div>
                </div>
            </form>

            <footer className="bottom">
                <p> Link: W3Schools <br />
                <a target="_blank" href="https://www.w3schools.com"> W3Schools </a>
                </p>
            </footer>
        </div>
    );
}

export default LogInForm;