import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store';

function LoginComplete(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function logoutProcess (){
 
        // 1. store 상태변경
        dispatch(logout());

        // 2. 화면 이동
        navigate("/loginComplete");
    }
    const isLogin = useSelector((state) => state.isLogin);

    return (
        <div>
            <h1>Login 완료</h1>
            <h2>store isLogin : {isLogin.toString()}</h2>
            <button onClick={logoutProcess}>로그아웃</button>
        </div>
    );
}

export default LoginComplete;