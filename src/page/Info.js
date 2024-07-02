import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Info(props) {
  const { id } = useParams();

  const navigate = useNavigate();

  function moveList() {
    navigate(`/list?page=0`);
  }

  return (
    <div>
      <h1>Info 번호 : {id}</h1>
      <button onClick={moveList}>리스트페이지이동</button>
    </div>
  );
}

export default Info;