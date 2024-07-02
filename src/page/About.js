import React from 'react';
import { useNavigate } from 'react-router-dom';

function About(props) {
    const navigate = useNavigate();

    function moveInfo(){
        navigate("/info/1212")
    }

    return (
        <div>
            <h1>About</h1>
            <button onClick={moveInfo}>정보 페이지이동</button>
        </div>
    );
}

export default About;