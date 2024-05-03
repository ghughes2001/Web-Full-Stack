import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../CSS/LogIn.css";

function clearInputFeild() {
    document.getElementById("cc").reset();
}

const LogInForm = (props) => {;
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { handleLogin } = props;
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        try
        {
            event.preventDefault();
            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {"Accept": "application/json", "Content-Type": "application/json"},
                body: JSON.stringify({username, password})
            });
            const status = response.status;
            const responseJSON = await response.json();
            console.log("responseJSON", responseJSON);

            if (status === 200) {
                handleLogin(true)
                navigate("/");
            }
            else if (status === 400)
            {
                alert("No user account exists");
            }
            else if (status === 401)
            {
                alert("Either password or username doesn't match");
            }
            else {
                alert("Incorrct credentials");
            }
        } catch(e) {
            alert(e);
        }
    }
    return (
        <form id="cc">
                <div className="logging-in">
                    <div className="log-title"><label className="log-title"><b> LOG IN </b></label></div>
                    <label className='vv' htmlFor="user"><b> Username </b></label>
                    <input type="text" placeholder="Enter Username" name="user" value={username} onChange={({ target }) => setUserName(target.value)} required />

                    <label className='vv' htmlFor="psw"><b> Password </b></label>
                    <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={({ target }) => setPassword(target.value)} required />

                    <div className="log-buttons">
                        <button type="reset" value="Reset" onClick={clearInputFeild}> Clear </button>
                        <button type="submit" value="Submit" onClick={event => handleSubmit(event)}> Sign In </button>
                    </div>
                </div>
            </form>
    );
}

export default LogInForm;