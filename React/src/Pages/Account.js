import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../CSS/Account.css";

function clearInputFeild() {
    document.getElementById("dd").reset();
}

const AccountForm = () => {
    const [firstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [addressOne, setAddressOne] = useState("");
    const [addressTwo, setAddressTwo] = useState("");
    const [city, setCity] = useState("");
    const [states, setStates] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const submit = async (event) => {
        try
        {
            event.preventDefault();
            const responseGET = await fetch("http://localhost:8080/account", {
                method: "GET",
                headers: {"Accept": "application/json", "Content-Type": "application/json"},
                body: JSON.stringify({firstName, LastName, addressOne, addressTwo, city, states, zipCode, phone, email})
            });
            const statusGet = responseGET.status;
            const responseJSONGet = await responseGET.json();
            console.log("responseJSONGet", responseJSONGet);
            if (statusGet === 200) {
                navigate("/");
            }
            else if (statusGet === 204) {
                alert("No data for that account");
            }
            else {
                alert("Incorrct credentials");
            }

            const responsePut = await fetch("http://localhost:8080/account", {
                method: "PUT",
                headers: {"Accept": "application/json", "Content-Type": "application/json"},
                body: JSON.stringify({firstName, LastName, addressOne, addressTwo, city, states, zipCode, phone, email})
            });
            const statusPut = responsePut.status;
            const responseJSONPut = await responsePut.json();
            console.log("responseJSONPut", responseJSONPut);
            if (statusPut === 200) {
                navigate("/");
            }
            else if (statusPut === 404) {
                alert("No existing data for that account");
            }
            else {
                alert("Incorrct credentials");
            }

            const responsePost = await fetch("http://localhost:8080/account", {
                method: "POST",
                headers: {"Accept": "application/json", "Content-Type": "application/json"},
                body: JSON.stringify({firstName, LastName, addressOne, addressTwo, city, states, zipCode, phone, email})
            });
            const status = responsePost.status;
            const responseJSON = await responsePost.json();
            console.log("responseJSON", responseJSON);
            if (status === 201) {
                navigate("/");
            }
            else {
                alert("Incorrct credentials");
            }
        } catch(e) {
            alert(e);
        }
    }
    return (
        <form id='dd'>
            <div className="acc-section">
                <div className="acc-title"><label className="acc-title"><b> ACCOUNT </b></label></div>

                <label htmlFor="firstName"><b> Name </b></label>
                <input className='ll' type="text" placeholder="Enter Name" name="firstName" value={firstName} onChange={({ target }) => setFirstName(target.value)} required />

                <br />

                <label htmlFor="lastName"><b> Last Name </b></label>
                <input className='ll' type="text" placeholder="Last Name" name="lastName" value={LastName} onChange={({ target }) => setLastName(target.value)} required />

                <br />

                <label htmlFor="addressOne"><b> Address 1 </b></label>
                <input className='ll' type="text" placeholder="Address 1" name="addressOne" value={addressOne} onChange={({ target }) => setAddressOne(target.value)} required />

                <br />

                <label htmlFor="addressTwo"><b> Address 2 </b></label>
                <input className='ll' type="text" placeholder="Address 2" name="addressTwo" value={addressTwo} onChange={({ target }) => setAddressTwo(target.value)} />

                <br />

                <label htmlFor="city"><b> City </b></label>
                <input className='ll' type="text" placeholder="City" name="city" value={city} onChange={({ target }) => setCity(target.value)} required />

                <br />

                <label htmlFor="state"><b> State </b></label>
                <select name="state" value={states} onChange={({ target }) => setStates(target.value)} required>
                    <option value="---">---</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="District of Columbia">District of Columbia</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Guam">Guam</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska"> Nebraska </option>
                    <option value="Nevada"> Nevada </option>
                    <option value="New Hampshire">New Hampshire</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="New York">New York</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="North Dakota">North Dakota</option>
                    <option value="Northern Marianas Islands">Northern Marianas Islands</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Oklahoma">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Rhode Island">Rhode Island</option>
                    <option value="South Carolina">South Carolina</option>
                    <option value="South Dakota">South Dakota</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Virgin Islands">Virgin Islands</option>
                    <option value="Washington">Washington</option>
                    <option value="West Virginia">West Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
                </select>

                <br />

                <label htmlFor="zip"><b> Zip Code </b></label>
                <input className='ll' type="text" placeholder="Zip Code" name="zip" value={zipCode} onChange={({ target }) => setZipCode(target.value)} required />

                <br />

                <label htmlFor="phone"><b> Phone Number </b></label>
                <input className='ll' type="text" placeholder="Phone Number" name="phone" value={phone} onChange={({ target }) => setPhone(target.value)} required />
                
                <br />
                
                <label htmlFor="email"><b> Email </b></label>
                <input className='ll' type="text" placeholder="Email" name="email" value={email} onChange={({ target }) => setEmail(target.value)} required />
                
                <br />
                
                <div className="acc-buttons">
                    <button type="reset" value="Reset" onClick={clearInputFeild}> Clear </button>
                    <button type="submit" value="Submit" onClick={event => submit(event)}> Submit </button>
                </div>
                </div>
            </form>
    );
}

export default AccountForm;