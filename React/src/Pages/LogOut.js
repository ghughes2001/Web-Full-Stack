import "../CSS/LogOut.css";
import React from "react";

function Logout(props) {
    const { handleLogOut } = props;

    const logout = async (event) => {
        event.preventDefault();
        handleLogOut(false);
    }

    return (
        <div className="log-out">
            <p className="out"> Would you like to Log Out? </p>

            <div className="log-buttons">
                <button onClick={logout}> Logout </button>
            </div>
        </div>
    );
}

export default Logout;