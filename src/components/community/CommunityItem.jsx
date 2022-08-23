import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const CommunityItem = () => {
  const navigate = useNavigate();
  const [community, setCommunity] = React.useState([
    {
      title: "",
      content: "",
    },
  ]);

  const Get_Posts = async () => {
    const res = await axios.get("http://wetube-phenomenonlee.shop/api/posts");
    setCommunity(res.data.result); // 서버로부터 fetching한 데이터를 useState의 state로 set
  };
  // mount가 됐을 때 함수를 실행하기 위한 useEffect

  React.useEffect(() => {
    Get_Posts();
  }, []);

  return (
    <div>
      {community.createData}
      {community?.map((post) => (
        <ContentBox key={post.id}>
          <Nick>sdf{post.nickname}</Nick>
          <h6>{post.createdAt}</h6>
          <BodyText
            onClick={() => {
              navigate(`/detail/${post.id}`);
            }}
          >
            sdfsdfsdf
            <div>
              <h2>{post.title}</h2>
              <h4>{post.content}</h4>
            </div>
          </BodyText>
          <LikeBox>
            <p>💬 3</p>
            {/* <p>{post.like}</p> */}
            <p>❤️10</p>
          </LikeBox>
        </ContentBox>
      ))}
    </div>
  );
};

const ContentBox = styled.form`
  margin: auto;
  max-width: 957px;
  width: 100%;
  padding: 32px 20px;
  border-top: solid 1px #eaebed;
  border-left: solid 1px #eaebed;
  border-right: solid 1px #eaebed;
  border-radius: 5px;

  background-color: #fff;

  h6 {
    opacity: 0.7;
  }
`;

const Nick = styled.div`
  font-size: 14px;
`;

const LikeBox = styled.div`
  display: flex;
  flex-direction: row;
  p {
    margin: 3px;
    opacity: 0.9;
  }
`;
const BodyText = styled.div``;

const CtreatAt = styled.div``;
export default CommunityItem;
