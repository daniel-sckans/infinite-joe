import React from "react";

import './Search.css';

import { Outlet, useNavigate} from "react-router-dom";

const Search = () => {
    const navigate = useNavigate();

    return(
        <div className="search">
            <input onChange={ change => navigate(change.target.value) }></input><br/>
            <Outlet />
        </div>
    )
}
export default Search;