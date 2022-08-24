import React, {useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import Comment from "../components/comment/Comment";
// import BottomBox from "../components/BottomBox";
import Like from "../components/Like";
import {useParams} from "react-router-dom";
import Layout from "../components/Layout"
const Detail = () => {
  const [contents, setContents] = React.useState("");
  const {id} = useParams();


  // DetailPagte Get
  const Get_Detail = async () => {
    const res = await axios.get(
      `http://54.180.113.36/api/posts/${id}`
      // `http://wetube-phenomenonlee.shop/api/posts/${id}`
    );
    setContents(res.data.result);
    console.log(res.data.result)
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
              <h4>💬 0 </h4>
              <h4><Like />{contents.like} </h4>
            </LikeCommentBox>
            <Content>{contents.content}</Content>
            <Comment />
          </ContentBox>
          <ButtonGroup>
          <div>
            <button>
            목록으로
            </button>
            </div>
            <div>
              <button></button>
              <button></button>
            </div>
          </ButtonGroup>

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
  background-color: #f4f5f6;
  display: margin;
  padding: 50px;
`;
const ContentBox = styled.div`
  margin: auto;
  max-width: 957px;
  width: 100%;
  padding: 32px 20px;
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
  height: 70px

  p {
    margin: 10px;
  }
  h4 {
    margin:5px;
    opacity: 0.95;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  width: 800px;

  button {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    background-color: #1c1d1e;
    border-radius: 8px;
    padding: 14px;
    font-family: Pretendard;
    font-size: 14px;
    cursor: pointer;
    font-weight: 700;
    color: #f4f5f6;
    gap: 8px;
  }
  `

export default Detail;
