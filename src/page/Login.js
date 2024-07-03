import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../store';
import { useDispatch } from 'react-redux';

function Login(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function loginProcess (){
 
        // 1. store 상태변경
        dispatch(login());

        // 2. 화면 이동
        navigate("/loginComplete");
    }

    function pass(){
        navigate("/loginComplete");
    }


    return (
        <div>
            <button onClick={loginProcess}>로그인</button>
            <button onClick={pass}>로그인 없이 이동</button>
        </div>
    );
}

export default Login;