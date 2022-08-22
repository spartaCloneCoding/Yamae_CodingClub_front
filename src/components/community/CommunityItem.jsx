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
    const data = await axios.get("http://localhost:3001/posts");
    setCommunity(data.data); // 서버로부터 fetching한 데이터를 useState의 state로 set
  };
  // mount가 됐을 때 함수를 실행하기 위한 useEffect
  React.useEffect(() => {
    Get_Posts();
  }, []);

  return (
    <div>
      {community?.map((post) => (
        <ContentBox key={post.id}>
          <Nick>{post.nickname}</Nick>
          <h5>{post.createAt}</h5>

          <BodyText
            onClick={() => {
              navigate("/detail");
            }}
          >
            <div>
              <h2>{post.title}</h2>
              <h4>{post.content}</h4>
            </div>
          </BodyText>
          <p>💬 0</p>
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

  background-color: #fff;
`;

const Nick = styled.div`
  font-size: 14px;
`;

const BodyText = styled.div``;

const CtreatAt = styled.div``;
export default CommunityItem;
