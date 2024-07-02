import React from "react";
import { useSearchParams } from "react-router-dom";

function List(props) {
    console.log("리스트 페이지 렌더링");
    const [searchParams, setSearchParams] = useSearchParams();
    let page = searchParams.get("page");

      // 두번째 방법
    //const navigate = useNavigate();

    function next() {
        // 쿼리스트링 값이 변경되면서 화면 새로 불러짐
        setSearchParams({ page: Number(page) + 1 });

        //let newPage = Number(page) + 1;
        //navigate("/list?page=" + newPage);
  }

  console.log("화면 새로 불러짐");
  return (
    <div>
      <h1>List page : {page}</h1>
      <button onClick={next}>다음페이지</button>
    </div>
  );
}

export default List;