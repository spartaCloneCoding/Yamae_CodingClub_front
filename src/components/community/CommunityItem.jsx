import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {api} from "../../shared/api";
const CommunityItem = () => {
  const navigate = useNavigate();
  const [banJack, setBanJak] = React.useState(false);

  const [community, setCommunity] = React.useState([
    {
      title: "",
      content: "",
    },
  ]);

  // __GET_POSTS
  const Get_Posts = async () => {
    const res = await api.get("api/posts");
    console.log(res);
    setCommunity(res.data.result);
    setBanJak(!banJack);
  };

  React.useEffect(() => {
    Get_Posts();
  }, []);
  // Get_Posts();
  return (
    <div>
      {community.createData}
      {community?.map((post) => (
        <ContentBox key={post.id}>
          <Nick>{post.nickname}</Nick>
          <h6>{post.createdAt}</h6>
          <BodyText
            onClick={() => {
              navigate(`/detail/${post.id}`);
            }}
          >
            <div>
              <h2>{post.title}</h2>
              <h4>{post.content}</h4>
            </div>
          </BodyText>
          <LikeBox>
            <p>💬 {post.cmtNum}</p>
            <p>❤️{post.like}</p>
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
const BodyText = styled.div`
  cursor: pointer;
`;
const CtreatAt = styled.div``;
export default CommunityItem;
