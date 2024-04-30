import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../CSS/Registration.css";

function clearInputFeild() {
    document.getElementById("ff").reset();
}

const RegistrationForm = (eve) => {
    const [username, setUserName] = useState("");
    const [passwordOne, setPasswordOne] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        try
        {
            if ((username) && (passwordTwo === passwordOne)) {
                event.preventDefault();
                const response = await fetch("http://localhost:8080/register", {
                    method: "POST",
                    headers: {"Accept": "application/json", "Content-Type": "application/json"},
                    body: JSON.stringify({username, passwordOne, passwordTwo})
                });
                const status = response.status;
                const responseJSON = await response.json();
                console.log("responseJSON", responseJSON);

                if (status === 201) {
                    navigate("/");
                }
                else if (status === 409)
                {
                    alert("That user already has an account");
                }
                else {
                    alert("Incorrct credentials");
                }
            }
            else {
                alert("PASSWORDS DO NOT MATCH")
            }
        } catch(e) {
            alert(e);
        }
    }
    return (
    <form id='ff'>
        <div className="register-account">
            <div className="reg-title"><label className="reg-title"><b> CREATE ACCOUNT </b></label></div>
            <label className='oo' htmlFor="user"><b> Username </b></label>
            <input type="text" placeholder="Enter Username" name="user" value={username} onChange={({ target }) => setUserName(target.value)} required />

            <label className='oo'htmlFor="psw1"><b> Password </b></label>
            <input type="password" placeholder="Enter Password" name="psw1" value={passwordOne} onChange={({ target }) => setPasswordOne(target.value)} required />
            
            <label className='oo' htmlFor="psw2"><b> Repeat Password </b></label>
            <input type="password" placeholder="Enter Password" name="psw2" value={passwordTwo} onChange={({ target }) => setPasswordTwo(target.value)} required />

            <div className="reg-buttons">
                <button type="reset" value="Reset" onClick={clearInputFeild}> Clear </button>
                <button type="submit" value="Submit" onClick={event => handleSubmit(event)}> Submit </button>
            </div>
        </div>
    </form>
    );
}

export default RegistrationForm;