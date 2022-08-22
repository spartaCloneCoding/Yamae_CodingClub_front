import React, {useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import Comment from "../components/comment/Comment";
import BottomBox from "../components/BottomBox";
import {useParams} from "react-router-dom";
const Detail = () => {
  const [contents, setContents] = React.useState([]);
  const {postId} = useParams();
  const Get_Detail = async () => {
    const data = await axios.get(
      `http://wetube-phenomenonlee.shop/api/posts/${postId}`
      );
      // console.log("detail", data);
    setContents(data); // 서버로부터 fetching한 데이터를 useState의 state로 set
  };

  useEffect(() => {
    Get_Detail();
  });
  return (
    <>
      <Container>
        <Section>
          <ContentBox>
            {contents.map((posts) => {
              return (
                <div key={posts.id}>
                  <Nick>{posts.nickname}</Nick>
                  <CtreatAt>{posts.createAt}</CtreatAt>
                  <title>{posts.title}</title>
                  <p>💬 0 </p>
                  <p>❤️{posts.like} </p>
                  <Content>{posts.content}</Content>
                </div>
              );
            })}
            <Comment />
          </ContentBox>
        </Section>
        <BottomBox />
      </Container>
    </>
  );
};
const Container = styled.div`
  box-sizing: border-box;
`;
const Section = styled.div`
  background-color: lightgray;
  display: margin;
  padding: 50px;
`;
const ContentBox = styled.div`
  margin: auto;
  max-width: 957px;
  width: 100%;
  padding: 32px 20px;
  /* border-top: solid 1px #eaebed;
border-left: solid 1px #eaebed;
border-right: solid 1px #eaebed; */
  background-color: #fff;
  border-radius: 2px;
`;

const Content = styled.div`
  display: flex;
  border-top: 1px solid #eaebed;
  height: 100px;
  border-radius: 2px;
`;
const Nick = styled.div`
  font-size: 14px;
`;

const CtreatAt = styled.div``;

export default Detail;
