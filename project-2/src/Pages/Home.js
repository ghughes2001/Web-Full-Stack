import React from 'react'
import "../CSS/Home.css";
import "../JSS/HomeMobile"

const Home = () => {
    return (
        <div className="home-img">
            <div className="nav" id="nav">
                <a href="./index.html" class="active"> Home </a>
                <a href="./Registration/registration.html"> Registration </a>
                <a href="./Login/login.html"> Login </a>
                <a href="./Account/account.html"> Account </a>
                <a href="#"> Logout </a>
                <a href="javascript:void(0);" className="icon" onclick="myFunction()"><i className="fa fa-bars"></i></a>
            </div>

            <footer className="foot">
                <p> Link: W3Schools <br />
                <a target="_blank" href="https://www.w3schools.com"> W3Schools </a>
                </p>
            </footer>
        </div>
    );
}

export default Home;