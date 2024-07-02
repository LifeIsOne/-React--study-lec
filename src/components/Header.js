import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <div>
            <ul>
                <MyLi>홈</MyLi>
                <MyLi>글쓰기</MyLi>
                <MyLi>로그인</MyLi>
            </ul>
        </div>
    );
}
    
const MyLi = styled.ul`
    color: #0df;
    font-size: 30px;
    list-style-type: none;
`;

export default Header;