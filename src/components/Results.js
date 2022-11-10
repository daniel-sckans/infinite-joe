import React from "react";
import { useParams } from "react-router-dom";

const Results = () => {
    const params = useParams();

    return (
        <>
            Search results: <br/><br/>
            { params.query }

            { params.query === 'edith' && <div>Hi, Edith!</div> }
            { params.query.indexOf('pilaf') === 0 && <div>Hi, Edith!</div> }
        </>
    )
}

export default Results;