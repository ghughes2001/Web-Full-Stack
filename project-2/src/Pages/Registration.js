import React from 'react'
import "../CSS/Registration.css";

function clearInputFeild() {
    document.getElementById("ff").reset();
}

const RegistrationForm = () => {
    return (
    <form id='ff'>
        <div className="register-account">
            <div className="reg-title"><label className="reg-title"><b> CREATE ACCOUNT </b></label></div>
            <label className='oo' htmlFor="user"><b> Username </b></label>
            <input type="text" placeholder="Enter Username" name="user" required />

            <label className='oo'htmlFor="psw1"><b> Password </b></label>
            <input type="password" placeholder="Enter Password" name="psw1" required />
            
            <label className='oo' htmlFor="psw2"><b> Repeat Password </b></label>
            <input type="password" placeholder="Enter Password" name="psw2" required />

            <div className="reg-buttons">
                <button type="reset" value="Reset" onClick={clearInputFeild}> Clear </button>
                <button type="submit" value="Submit"> Submit </button>
            </div>
        </div>
    </form>
    );
}

export default RegistrationForm;