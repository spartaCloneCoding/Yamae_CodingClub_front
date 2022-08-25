import axios from "axios";
import React from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import {api} from "../shared/api";
const Like = () => {
  const {postId} = useParams();
  const [likeOn, setLikeOn] = React.useState(false);
  // const [likeNum, setLikeNum] = React.useState("");

  const Like_On_Click = () => {
    if (!likeOn) {
      api.post(`api/posts/${postId}`, true);
      setLikeOn(!likeOn);
    } else {
      api.delete(`api/posts${postId}`, false);
      setLikeOn(!likeOn);
    }
  };
  //{likeOn : true}
  //true
  //상돈님께 여쭤보기
  return (
    <div>
      <Button
        onClick={() => {
          Like_On_Click();
        }}
      >
        {likeOn ? "❤️" : "🤍"}
      </Button>
    </div>
  );
};

const Button = styled.button`
  border: transparent;
  background-color: transparent;
`;

export default Like;
