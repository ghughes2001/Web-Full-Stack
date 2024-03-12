import React from 'react'
import "../CSS/LogIn.css";
import "../JSS/LogIn.js"

const LogInForm = () => {
    return (
        <div className="login-img">
            <div className="login-nav" id="log-nav">
                <a href="..//index.html" style="text-decoration: none;"> Home </a>
                <a href="../Registration/registration.html" style="text-decoration: none;"> Registration </a>
                <a href="./login.html" style="text-decoration: none;" class="active"> Login </a>
                <a href="../Account/account.html" style="text-decoration: none;"> Account </a>
                <a href="#" style="text-decoration: none;"> Logout </a>
                <a href="javascript:void(0);" className="icon" onclick="myFunction()"><i className="fa fa-bars"></i></a>
            </div>
            <form>
                <div className="logging-in">
                    <div className="title"><label><b> LOG IN </b></label></div>
                    <label htmlFor="user"><b> Username </b></label>
                    <input type="text" placeholder="Enter Username" name="user" required />

                    <label htmlFor="psw"><b> Password </b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <div className="buttons">
                        <button type="reset" value="Reset"> Clear </button>
                        <button type="submit" value="Submit"> Submit </button>
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