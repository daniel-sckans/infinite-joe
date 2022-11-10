import React from "react";
import { useParams } from "react-router-dom";

const AboutUs = () => {
    let params = useParams();

    return (
        <div>
            About Us: { params.info } <br />
            <ul>
                <li>
                    We help you understand different concepts behind React
                </li>
                <li>
                    We help you build amazing websites
                </li>
            </ul>

        </div>
    )
}
export default AboutUs;