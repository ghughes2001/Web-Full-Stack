import React from 'react'
import "../CSS/Account.css";
import "../JSS/Accoun.js"

const AccountForm = () => {
    return (
        <div className="account-img">
            <div className="account-nav" id="acc">
                <a href="..//index.html" style="text-decoration: none;"> Home </a>
                <a href="../Registration/registration.html" style="text-decoration: none;"> Registration </a></li>
                <a href="../Login/login.html" style="text-decoration: none;"> Login </a>
                <a href="./account.html" style="text-decoration: none;" class="active"> Account </a>
                <a href="#" style="text-decoration: none;"> Logout </a>
                <a href="javascript:void(0);" className="icon" onclick="myFunction()"><i className="fa fa-bars"></i></a>
            </div>

            <form>
                <div className="section">
                    <div className="title"><label><b> ACCOUNT </b></label></div>
                    <label htmlFor="firstName"><b> Name </b></label>
                    <input type="text" placeholder="Enter Name" name="firstName" required />
                    <br />
                    <label htmlFor="lastName"><b> Last Name </b></label>
                    <input type="text" placeholder="Last Name" name="lastName" required />
                    <br />
                    <label htmlFor="addressOne"><b> Address 1 </b></label>
                    <input type="text" placeholder="Address 1" name="addressOne" required />
                    <br />
                    <label htmlFor="addressTwo"><b> Address 2 </b></label>
                    <input type="text" placeholder="Address 2" name="addressTwo" required />
                    <br />
                    <label htmlFor="city"><b> City </b></label>
                    <input type="text" placeholder="City" name="city" required />
                    <br />
                    <label htmlFor="state"><b> State </b></label>
                    <select name="state">
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
                    <input type="text" placeholder="Zip Code" name="zip" required />
                    <br />
                    <label htmlFor="phone"><b> Phone Number </b></label>
                    <input type="text" placeholder="Phone Number" name="phone" required />
                    <br />
                    <label htmlFor="email"><b> Email </b></label>
                    <input type="text" placeholder="Email" name="email" required />
                    <br />
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

export default AccountForm;