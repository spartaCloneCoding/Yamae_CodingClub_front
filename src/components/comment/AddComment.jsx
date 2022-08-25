import React from "react";
import axios from "axios";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {api} from "../../shared/api";
const AddComment = () => {
  const {id} = useParams();
  const [addComment, setAddComment] = React.useState("");

  // 댓글 추가
  const onSubmitHandler = (comments) => {
    api.post(`api/comments/${id}`, comments).then(() => {});
  };
  // onRset();
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
    border-right: 0px;
  }
  button {
    height: 50px;
    width: 70px;
    border-radius: 5px;
    border-left: 0px;
    border: 0.5px solid lightgray;
    margin-top: 20px;
    cursor: pointer;
  }
`;

export default AddComment;
