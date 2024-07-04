import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../store';
import { useDispatch } from 'react-redux';

function Login(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser]  = useState({
        username:"",
        password:"",
    });

    function loginProcess (e){
        e.preventDefault(); // submit 하지마세요
        // 1. form 태그 username, password 가져오기
        let username = user.username;
        let password = user.password;

        // 2. 유효성 검증
        console.log(username);
        console.log(password);

        // 3. 통신
        // post로 정보를 서버에 전송
        let requestBody = JSON.stringify(user);
        console.log(requestBody);
        // 4. store 상태변경
        localStorage.setItem("jwt", "abcdefghijklmnopqrstuvwxyz")   // 디스크 저장
        dispatch(login(""));              // store 저장

        // 5. 화면 이동
        navigate("/loginComplete");
    }

    function pass(){
        navigate("/loginComplete");
    }

    function changeValue(e){
        // console.log("event" , e);
        // console.log("value" , e.target.value);
        // console.log("name"  , e.target.name);

        setUser({   // computed property name => 변수를 키값으로 바인딩
            ...user,
            [e.target.name]: e.target.value,
        });

        // console.log("username", user.username);
        // console.log("password", user.password);
    }   // 상태 변경을 하면 메서드가 종료되어야 변경됨.

    return (
        <div>
            <form>
                <input
                    type='text'
                    placeholder='username'
                    onChange={changeValue}
                    name='username'
                />
                <input
                    type='password'
                    placeholder='password'
                    onChange={changeValue}
                    name='password'
                />
                <button type='submit' onClick={loginProcess}>
                    로그인
                </button>
            </form>
            <button onClick={pass}>로그인 없이 이동</button>
        </div>
    );
}

export default Login;