import React from "react";
import axios from "axios";

import styled from "styled-components";
import {useParams} from "react-router-dom";
const AddComment = () => {
  const {postId} = useParams();
  const [showComment, setShowComment] = React.useState(false);
  const [input, setInput] = React.useState({
    comment: "",
  });
  const [addComment, setAddComment] = React.useState({
    nickname: "",
    comment: "",
    createAt: "",
  });
  const onSubmitHandler = (comments) => {
    axios
    // .post(`http://wetube-phenomenonlee.shop/comments/${postId}`, comments)
      // .post(`http://54.180.113.36/api/comments`, comments)
      .then(() => {
        setShowComment(!showComment);
      });
      setInput("")
  };
  return (
    <>
      <FormInput
        onSubmit={(e) => {
          e.preventDefault();
          if (addComment.comment.trim() === "") {
            return alert("댓글을 입력해주세요.");
          }
          onSubmitHandler(addComment);
        }}
      >
        <InputGroup>
          <input
            type="text"
            className="comment"
            onChange={(e) => {
              const {value} = e.target;
              setAddComment({
                ...addComment,
                comment: value,
              });
            setInput(e.target.value);
              
            }}
            // value={addComment.comment}
            value={input}
            placeholder="댓글을 작성하세요"
          />
          <button 
          type="submit"
          >추가하기</button>
        </InputGroup>
      </FormInput>
    </>
  );
};

const FormInput = styled.form`
  display: flex;

  input {
    border-radius: 7px;
    height: 50px;
    width: 800px;
    border: 0.5px solid lightgray;
  }
  button {
    height: 55px;
    width: 150px;
    border-radius: 5px;
    border: 0.5px solid lightgray;
  }
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  
  button{
    cursor: pointer;
  }
`;

export default AddComment;
