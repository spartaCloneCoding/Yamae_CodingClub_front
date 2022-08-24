import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const Like = () => {
    const {postId} = useParams();
const [likeOn, setLikeOn] = React.useState(false);

const __LikeOnClick =  (likeOn) => {
    if(!likeOn){
    axios.post(`http://54.180.113.36/api/post/like/${postId}`, likeOn)
    setLikeOn(!likeOn)}
    else{axios.delete(`http://54.180.113.36/api/post/like/${postId}`, false)
setLikeOn(likeOn)}

}
    return (
        <div>
            <Button onClick={(likeOn) => {
           __LikeOnClick(likeOn);
            }}>{likeOn ? "❤️" : "🤍"}</Button>0
        </div>
    )
};

const Button = styled.button`
    border: transparent;
    background-color: transparent;
`

export default Like;