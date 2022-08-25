import React, {useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {api} from "../../shared/api";
const AddComment = () => {
  const {postId} = useParams();
  const [addComment, setAddComment] = React.useState("");

  // 댓글 추가
  console.log(postId);
  const onSubmitHandler = (comments) => {
    api.post(`api/comments/${postId}`, comments).then(() => {
      if (addComment.comments.trim() === "") {
        return alert("댓글을 입력해주세요.");
      }
      window.location.reload();
    });
  };

  return (
    <>
      <FormInput
        onSubmit={() => {
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
            }}
            value={addComment.comment}
            placeholder="댓글을 작성하세요"
          />
          <button type="submit" on>
            추가하기
          </button>
        </InputGroup>
      </FormInput>
    </>
  );
};

const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 55px;
  width: 945px;
  input {
    border: 1px solid lightgray;
    border-radius: 10px;
    opacity: 0.2px;
    width: 720px;
    height: 40px;
    margin-top: 20px;
  }
  button {
    height: 50px;
    width: 70px;
    border-radius: 20px;
    border-left: 0px;
    border: transparent;
    margin-top: 20px;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default AddComment;
