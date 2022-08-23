import React, {useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import Comment from "../components/comment/Comment";
// import BottomBox from "../components/BottomBox";
import {useParams} from "react-router-dom";
const Detail = () => {
  const [contents, setContents] = React.useState("");
  const {id} = useParams();

  const Get_Detail = async () => {
    const res = await axios.get(
      `http://wetube-phenomenonlee.shop/api/posts/${id}`
    );
    setContents(res.data.result);
    console.log(res.data.result);
  };

  useEffect(() => {
    Get_Detail();
  }, []);
  return (
    <>
      <Container>
        <Section>
          <ContentBox>
            {contents.content}
            <Nick>{contents.nickname}</Nick>
            <CtreatAt>{contents.createdAt}</CtreatAt>
            <title>{contents.title}</title>
            <LikeCommentBox>
              <p>💬 0 </p>
              <p>❤️{contents.like}10 </p>
            </LikeCommentBox>
            <Content>{contents.content}</Content>
            <Comment />
          </ContentBox>
        </Section>
        {/* <BottomBox /> */}
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
  border-radius: 5px;
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

const CtreatAt = styled.h5`
  font-size: 4px;
`;

const LikeCommentBox = styled.div`
  display: flex;
  flex-direction: row;

  p {
    margin: 5px;
  }
`;

export default Detail;
