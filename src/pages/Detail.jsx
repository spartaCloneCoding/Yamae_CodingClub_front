import React, {useEffect} from "react";
import styled from "styled-components";
import Comment from "../components/comment/Comment";
// import BottomBox from "../components/BottomBox";
import Like from "../components/Like";
import {useParams} from "react-router-dom";
import {api} from "../shared/api";
import AddComment from "../components/comment/AddComment";
// import {Navigate} from "react-router-dom";

const Detail = () => {
  const [commentList, setCommentList] = React.useState([]);
  // const navigate = Navigate();
  const [contents, setContents] = React.useState("");
  const {id} = useParams();

  // DetailPagte Get
  const Get_Detail = async () => {
    const res = await api.get(`api/posts/${id}`);
    console.log(res.data);
    setContents(res.data.result);
  };

  // Commment_Get
  const GET_COMMENT = async () => {
    const res = await api.get(`api/comments/${id}`);
    setCommentList(res.data);
  };

  useEffect(() => {
    Get_Detail();
    GET_COMMENT();
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
              <h4>
                <Like />
                {contents.like}{" "}
              </h4>
            </LikeCommentBox>
            <Content>{contents.content}</Content>
            {commentList?.map((comments) => {
              return <Comment key={comments.commentId} comments={comments} />;
            })}
          </ContentBox>
          <AddComment />
          <ButtonGroup>
            <div>
              <button
              // onClick={() => {
              //   // navigate("/community");
              // }}
              >
                목록으로
              </button>
            </div>
            <NextGroup>
              <button>⬅️</button>
              <button>➡️</button>
            </NextGroup>
          </ButtonGroup>
        </Section>
        {/* <BottomBox /> */}
      </Container>
    </>
  );
};
const Container = styled.div`
  box-sizing: border-box;
  /* display: flex; */
  justify-content: center;
  align-items: center;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f4f5f6;
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
  height: 70px;
  p {
    margin: 10px;
  }

  h4 {
    margin: 5px;
    opacity: 0.95;
  }
`;
const NextGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  button {
    margin-left: 5px;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  margin-top: 10px;
  margin-right: 10px;
  opacity: 0.9;

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
    border: transparent;
    padding: 14px;
    font-family: Pretendard;
    font-size: 14px;
    cursor: pointer;
    font-weight: 700;
    color: white;
    gap: 8px;
  }
`;

export default Detail;
