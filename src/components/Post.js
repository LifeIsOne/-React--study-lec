import React, { useEffect, useState } from 'react';


function Post(props) {
    console.log("Post 실행됨");

    const [page, setPage] = useState(0);
    
    const [post, setPost] = useState({
        userId: undefined,
        id: undefined,
        title: "",
        body: ""
    });

    function nextPage() {
        setPage(1);
    }
      
	async function download() {
		let response = await fetch("https://jsonplaceholder.typicode.com/posts/3");
        // 파싱하기
        let responseBody = await response.json();
        console.log("responseBody", responseBody);

        setPost(responseBody);
	}
	
    // 한번만 실행하겠다. ( 그림 그려질 때 !! )
	useEffect(()=>{
        console.log("useEffect 실행됨");
		download();
	},[page]);
	
	return (
        <div>
            userId: {post.userId},
            id:     {post.id},
            title:  {post.title},
            <br/>
            body:   {post.body},
            <button onClick={nextPage}>다음페이지</button>
        </div>
    );
}

export default Post;
