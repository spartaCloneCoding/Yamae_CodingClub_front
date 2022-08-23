import React from "react";
import axios from "axios";

import styled from "styled-components";
import {useParams} from "react-router-dom";

import AddComment from "./AddComment";
// import userEvent from "@testing-library/user-event";
const Comment = () => {
  const {id} = useParams();
  const [comment, setComment] = React.useState([]);
  // const [comment, setComment] = React.useState({
  //   postId: 0,
  //   nickname: "",
  //   createAt: "",
  //   comment: "",
  // });

  const Get_Comment = async () => {
    const res = await axios.get(
      // "http://54.180.113.36/api/posts"
      "http://wetube-phenomenonlee.shop/api/comments/1"
      // `http://wetube-phenomenonlee.shop/api/comments/${id}`
    );
    setComment(res.data); // 서버로부터 페칭한 데이터를 useState의 state로 set
    console.log(res.data)
  };
  React.useEffect(() => {
    Get_Comment();
  }, []);
  return (
    <Container>
      💬 댓글
      <ContentBox>
        {/* <NickName>{comment.nickname}</NickName>
        <CreatAt>{comment.createdAt}</CreatAt>
        <p>{comment.comment}</p> */}
        
            {/* {comments} */}

        {comment?.map((comments) => {
          return (
            <div key={comments}>
            {comments.createdAt}
            {comments.comment}
            </div>
          );
        })}
        {/* {comment !== "" ? comment.map((comments) => {
          return (
            <div key={comments.id}>
            {comments.createdAt}
            {comments.comment}
            </div>
          );
        })
        :null} */}
      </ContentBox>
      <AddComment />
    </Container>
  );
};

const Container = styled.div`
  padding: 40px 0 120px;
  border-top: 1px solid #eaebed;
  border-radius: 10px;
`;

const ContentBox = styled.div`
  background-color: #f4f5f6;
  border-radius: 5px;
  padding: 10px;
`;

const NickName = styled.div``;
const CreatAt = styled.div``;
const Input = styled.input`
  border: 1px solid lightgray;
  border-radius: 10px;
  opacity: 0.2px;
  width: 890px;
  height: 30px;
  margin-top: 20px;
`;
export default Comment;

// 데이터를 웹으로 출력중에 에러 Uncaught TypeError: comment.map is not a function 배열확인.
