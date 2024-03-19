import React from 'react'
import "../CSS/Registration.css";
import "../JSS/RegistrationMobile"

const RegistrationForm = () => {
    return (
        <div className="registration-img">
            <div className="registration-nav" id="registration-nav">
                <a href="..//index.html"> Home </a>
                <a href="./registration.html" class="active"> Registration </a>
                <a href="../Login/login.html"> Login </a>
                <a href="../Account/account.html"> Account </a>
                <a href="#" style="text-decoration: none;"> Logout </a>
                <a href="javascript:void(0);" className="icon" onclick="myFunction()"><i className="fa fa-bars"></i></a>
            </div>
            <form>
                <div className="register-account">
                    <div className="title"><label><b> CREATE ACCOUNT </b></label></div>
                    <label htmlFor="user"><b> Username </b></label>
                    <input type="text" placeholder="Enter Username" name="user" required />

                    <label htmlFor="psw1"><b> Password </b></label>
                    <input type="password" placeholder="Enter Password" name="psw1" required />
                    <label htmlFor="psw2"><b> Repeat Password </b></label>
                    <input type="password" placeholder="Enter Password" name="psw2" required />

                    <div className="buttons">
                        <button type="reset" value="Reset"> Clear </button>
                        <button type="submit" value="Submit"> Submit </button>
                    </div>
                </div>
            </form>

            <footer class="regBottom">
                <p> Link: W3Schools <br />
                    <a target="_blank" href="https://www.w3schools.com"> W3Schools </a>
                </p>
            </footer>
        </div>
    );
}

export default RegistrationForm;