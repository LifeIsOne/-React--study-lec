import React, { useState } from 'react';

function Body() {
    const [number, setNumber] = useState("0109603");
    
    const changeNumber = () => {
        setNumber("0102291");
    }
    
    return (
        <div>
           <div>이름 : 노승</div> 
           <div>전화 : {number}</div>
           <button onClick={changeNumber}>전화번호 변경</button>
        </div>
    );
}

export default Body;