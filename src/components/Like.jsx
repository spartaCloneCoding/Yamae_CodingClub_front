import axios from "axios";
import React from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import {api} from "../shared/api";
const Like = () => {
  const {id} = useParams();
  const [likeOn, setLikeOn] = React.useState([]);
  console.log("함수밖");
  const Like_On_Click = (likeOn) => {
    const {id} = useParams();
    console.log("함수안");
    if (!likeOn) {
      const res = api.post(`api/posts/${id}`, likeOn);
      console.log(res.data.data.result);
      setLikeOn(!likeOn);
    }
    // else {
    //   api.delete(`/posts`, false);
    //   setLikeOn(likeOn);
    // }
  };
  return (
    <div>
      <Button
        onClick={(likeOn) => {
          Like_On_Click(likeOn);
        }}
      >
        {likeOn ? "❤️" : "🤍"}
      </Button>
      0
      {likeOn?.map((like) => {
        return <div>{like.title}</div>;
      })}
    </div>
  );
};

const Button = styled.button`
  border: transparent;
  background-color: transparent;
`;

export default Like;
