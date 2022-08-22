import React from "react";
import axios from "axios";

import styled from "styled-components";
import {useParams} from "react-router-dom";
const AddComment = () => {
  const {postId} = useParams();
  const [addComment, setAddComment] = React.useState({
    nickname: "",
    comment: "",
    createAt: "",
  });
  const onSubmitHandler = (comments) => {
    axios
      .post(`http://wetube-phenomenonlee.shop/comments/${postId}`, comments)
      .then((res) => {});
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
        <input
          type="text"
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
        <button type="submit">추가하기</button>
      </FormInput>
    </>
  );
};

const FormInput = styled.form`
  display: flex;

  input {
    border-radius: 3px;
    height: 30px;
  }
`;

export default AddComment;
