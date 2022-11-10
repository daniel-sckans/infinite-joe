import React from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
    let params = useParams();

    return(
        <div>
            Team member: { params.person } <br />
            <ul>
                <li>
                    Phone Number: 0000111112222
                </li>
                <li>
                    Email Address: emaildot.com
                </li>
            </ul>
        </div>
    )
}
export default Contact;