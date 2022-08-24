import React from "react";
import axios from "axios";

import styled from "styled-components";
import {useParams} from "react-router-dom";
import AddComment from "./AddComment";
// import userEvent from "@testing-library/user-event";
const Comment = () => {
  const {postId} = useParams();
  const [comment, setComment] = React.useState([]);
  const [editInput, setEditInput] = React.useState(false);
  const [editComment, setEditComment] = React.useState({
    comment: "",
  });


//__GET_COMMENT
  const __GetComment = async () => {
    const res = await axios.get(
      `http://54.180.113.36/api/comments/2`
      // "http://wetube-phenomenonlee.shop/api/comments/1"
      // `http://wetube-phenomenonlee.shop/api/comments/${postId}`
    );
    setComment(res.data);
  };
//__DELELTE_COMMENT
  const __DelComment = (commentId) => {
    axios.delete(`http://wetube-phenomenonlee.shop/api/comments/${commentId}`) 
  }

  //__PATCH_COMMENT
  const __EditComment = ((commentId, editComment) => {
    axios.patch(`http://wetube-phenomenonlee.shop/api/comments/${commentId}`, editComment)

  })

  React.useEffect(() => {
    __GetComment();
  }, []);
  return (
    <Container>
      💬 댓글
        {comment?.map((comments) => {
          return (
              <>
            {editInput !== true ? (
            <ContentBox>
            <div key={comments}>
            <CreatAt>{comments.createdAt}</CreatAt>
            <NickName>{comments.User.nickname}</NickName>
            <p>{comments.comment}</p>
            {/* {comments.cmtNum} */}
            </div>
            <ButtonGroup>
              <button
              type="button"
              onClick={() => {setEditInput(!editInput)}}>✍🏼</button>
              <button 
              type="button"
              onClick={() => {__DelComment(comment.id)}}
              >❌</button>
            </ButtonGroup>
            </ContentBox>
            ) : (
              <>
              <div>
                
                <input
            type="text"
            onChange={(e) => {
              const {value} = e.target;
              setEditComment({
                ...comment,
                comment: value,
              });
            }}
            placeholder={comments.comment}
              />
              <button
              type="button"
              onClick={() => {
                __EditComment()
                setEditInput(!editInput)}}>완료</button>
              </div>
              </>
            )}
            </>
          );
        })}
 
      
      <AddComment />
    </Container>
  );
};

const Container = styled.div`
  padding: 40px 0 120px;
  border-top: 1px solid #eaebed;
  border-radius: 10px;
  input{
    border: 1px solid lightgray;
  border-radius: 10px;
  opacity: 0.2px;
  width: 890px;
  height: 30px;
  margin-top: 20px;
  }
`;

const ContentBox = styled.div`
  display: flex;
  background-color: #f4f5f6;
  border-radius: 5px;
  padding: 10px;
  margin-top: 3px;
  justify-content: space-between;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

button{
    cursor: pointer;
    border: transparent;
    margin: 5px;
    width: 40px;
    height: 40px;
  }
`
const NickName = styled.div``;
const CreatAt = styled.div``;

export default Comment;

// 데이터를 웹으로 출력중에 에러 Uncaught TypeError: comment.map is not a function 배열확인.
