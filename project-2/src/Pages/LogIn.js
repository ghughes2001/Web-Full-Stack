import React, { useState } from 'react'
import "../CSS/LogIn.css";

function clearInputFeild() {
    document.getElementById("cc").reset();
}

const LogInForm = (props) => {;
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { handleLogin } = props;

    const handleSubmit = async (event) => {
        event.preventDefault();
        handleLogin(true);

        console.log(`The name you entered was: ${username}`);
        console.log(`The password you entered was: ${password}`);
    }

    return (
        <form onSubmit={handleSubmit} id="cc">
                <div className="logging-in">
                    <div className="log-title"><label className="log-title"><b> LOG IN </b></label></div>
                    <label className='vv' htmlFor="user"><b> Username </b></label>
                    <input type="text" placeholder="Enter Username" name="user" value={username} onChange={({ target }) => setUserName(target.value)} required />

                    <label className='vv' htmlFor="psw"><b> Password </b></label>
                    <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={({ target }) => setPassword(target.value)} required />

                    <div className="log-buttons">
                        <button type="reset" value="Reset" onClick={clearInputFeild}> Clear </button>
                        <button type="submit" value="Submit"> Sign In </button>
                    </div>
                </div>
            </form>
    );
}

export default LogInForm;