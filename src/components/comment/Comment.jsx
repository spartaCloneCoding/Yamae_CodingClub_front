import React from "react";
import axios from "axios";

import styled from "styled-components";
import {useParams} from "react-router-dom";

import AddComment from "./AddComment";
const Comment = () => {
  const {postId} = useParams();
  const [comment, setComment] = React.useState([
    {
      nickname: "개",
      createAt: "2020-20-20",
      comment: "동물농장",
    },
  ]);

  const Get_Comment = async () => {
    const data = await axios.get(
      `http://wetube-phenomenonlee.shop/api/comments/${postId}`
    );
    setComment(data.data); // 서버로부터 페칭한 데이터를 useState의 state로 set
  };
  // mount가 됐을 때 함수를 실행하기 위한 useEffect
  React.useEffect(() => {
    Get_Comment();
  }, []);
  return (
    <Container>
      💬 댓글
      <ContentBox>
        {comment.map((comments) => {
          return (
            <div key={comments.id}>
              <NickName>{comments.nickname}</NickName>
              <CreatAt>{comments.createAt}</CreatAt>
              <p>{comments.comment}</p>
            </div>
          );
        })}
      </ContentBox>
      <AddComment />
    </Container>
  );
};

const Container = styled.div`
  padding: 40px 0 120px;
  border-top: 1px solid #eaebed;
  border-radius: 2px;
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
  border-radius: 6px;
  opacity: 0.2px;
  width: 890px;
  height: 30px;
  margin-top: 20px;
`;
export default Comment;

// 데이터를 웹으로 출력중에 에러 Uncaught TypeError: comment.map is not a function 배열확인.
