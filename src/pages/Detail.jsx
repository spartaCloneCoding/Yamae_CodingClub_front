import React, {useEffect} from "react";
import styled from "styled-components";
import Comment from "../components/comment/Comment";
// import BottomBox from "../components/BottomBox";
import Like from "../components/Like";
import {useParams} from "react-router-dom";
import {api} from "../shared/api";
import AddComment from "../components/comment/AddComment";
import {useNavigate} from "react-router-dom";
// import {Navigate} from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const [commentList, setCommentList] = React.useState([]);
  const [nick, setNick] = React.useState(""); // const navigate = Navigate();
  const [contents, setContents] = React.useState("");
  const {postId} = useParams();

  // DetailPagte Get
  const Get_Detail = async () => {
    const res = await api.get(`api/posts/${postId}`);
    setContents(res.data.result);
    setNick(res.data.result.User);
  };

  // Del_Post
  const Del_Post = (postId) => {
    api.delete(`api/posts/${postId}`).then(() => {
      window.location.reload();
    });
  };

  // Commment_Get
  const GET_COMMENT = async () => {
    const res = await api.get(`api/comments/${postId}`);
    setCommentList(res.data);
  };

  useEffect(() => {
    GET_COMMENT();
    Get_Detail();
  }, []);

  // GET_COMMENT();

  return (
    <>
      <Container>
        <Section>
          <h1>{nick.nickname}님의 글</h1>
          <ContentBox>
            <h1>{contents.title}</h1>
            <Nick>{contents.nickname}</Nick>
            <CtreatAt>{contents.createdAt}</CtreatAt>
            <title>{contents.title}</title>
            <LikeCommentBox>
              <h4>💬 {contents.cmtNum} </h4>

              <LikeBox>
                <div>
                  <Like />
                </div>
                <h4>{contents.likeNum}</h4>
              </LikeBox>
            </LikeCommentBox>
            <Content>{contents.content}</Content>
            <ButtonGroup>
              <button
                onClick={() => {
                  navigate("/community");
                }}
              >
                목록으로
              </button>
              <button
                onClick={() => {
                  Del_Post(postId);
                  navigate("/community");
                }}
              >
                게시물 삭제
              </button>
            </ButtonGroup>
            <MiddleStyle>
              <p>💬 댓글</p>
            </MiddleStyle>
            {commentList?.map((comments) => {
              return <Comment key={comments.commentId} comments={comments} />;
            })}

            <AddComment />
          </ContentBox>
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

const LikeBox = styled.div`
  display: flex;
  flex-direction: row;
  div {
    padding-top: 2.5px;
    padding-left: 5px;
  }
  h4 {
    padding-right: 100px;
  }
`;
const ContentBox = styled.div`
  margin: auto;
  max-width: 957px;
  width: 100%;
  padding: 50px 20px;
  background-color: #fff;
  border-radius: 5px;
`;

const Content = styled.div`
  display: flex;
  border-top: 1px solid #eaebed;
  height: 100px;
  border-radius: 2px;
  margin-top: 10px;
`;

const MiddleStyle = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 0.4px solid #eaebed;

  button {
    background-color: transparent;
    border-color: transparent;
  }
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
  padding: 10px;

  p {
    margin: 10px;
  }

  h4 {
    margin: 5px;
    opacity: 0.95;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  opacity: 0.8;
  margin-top: 10px;

  button {
    /* width: 100%; */
    /* display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox; */
    /* display: flex; */
    /* -webkit-box-pack: center; */
    /* -ms-flex-pack: center; */
    -webkit-justify-content: center;
    justify-content: center;
    background-color: transparent;

    border: transparent;
    /* padding: 14px;
    font-family: Pretendard;
    font-size: 14px;*/
    cursor: pointer;
    font-weight: 500;
    gap: 8px;
    /* margin-left: 200px; */
  }
`;

export default Detail;
