import React from "react";

import './Login.css';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import SignUp from "./components/SignUp";

const LogIn = () => {
    return (
        <div className="login">
            {/* <BrowserRouter>

            <Link to="/infinite-site/signup">Sign-up</Link> if you do not have an account

                <Routes>
                    <Route path="/infinite-site/signup" element={< SignUp/>} />
                </Routes>
            
            </BrowserRouter> */}
            <form><fieldset>
                <label>Username<br/>
                    <input type=""/>
                </label><br/>

                <label>Email Address<br/>
                    <input type=""/>
                </label><br/>

                <label>Password<br/>
                    <input type=""/>
                </label><br/>

                <button>Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default LogIn;