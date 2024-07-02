import React, { useState } from 'react';

function Body2(props) {
    console.log("Body2 실행됨");
    let {username, password} = props;

    const [user, setUser] = useState({
        name: "양승호",
        number: "0109603"
    });
    
    const changeUser = () => {
        setUser({...user,name:"야스오", number:"0102222"});
    }
    const changeNumber = () => {
        setUser({...user, number:"01011111111"});
    }
    
    return (
        <div>
            <div>
                사용자 이름 : {username} 비밀번호 : {password}
            </div>
        
            <div>이름 : {user.name}</div> 
            <div>전화 : {user.number}</div>
            <button onClick={()=> changeUser()}>사용자 정보변경</button>
            <button onClick={()=> changeNumber()}>전화번호 1111로 변경</button>
        </div>
    );
}

export default Body2;