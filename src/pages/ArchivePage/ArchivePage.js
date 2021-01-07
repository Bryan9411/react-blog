import styled from "styled-components";
import { getPostFromPage } from "../../webApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../IMG/avatar.png";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: colum;
  margin: 0 auto;
  max-width: 1440px;
  align-items: center;
`;
const Information = styled.div`
  position: fixed;
  top: 50%;
  margin: 0px 5%;
  align-items: center;

  h2 {
    font-weight: bold;
    text-align: center;
  }

  span {
    display: block;
    text-align: center;
  }
`;
const PostList = styled.ul`
  margin: 0 auto;

  h1 {
    padding-top: 30px;
    color: rgba(21, 87, 23, 1);
  }
`;
const Avatar = styled.div`
  width: 150px;
  height: 150px;
  img {
    border-radius: 50%;
    width: 100%;
  }
`;
const About = styled(Link)`
  display: block;
  font-size: 16px;
  color: rgba(21, 87, 23, 1);
  text-decoration none;
  margin: 20px 0;
  text-align: center;
`;
const PostContainer = styled.div`
  border-bottom: 1px solid rgb(238, 238, 238);
  margin-bottom: 20px;
  padding: 25px 0px;
  max-width: 500px;
`;
const CreatedAt = styled.div`
  margin: 5px 0px;
  color: #6c6c6c;
  font-size: 16px;
`;
const Title = styled.h2`
  letter-spacing: 0.1em;
`;
const Content = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 500px;
  font-size: 22px;
`;
const ReadMore = styled(Link)`
  display: block;
  font-size: 16px;
  color: rgba(26, 137, 23, 1);
  text-decoration none;
  margin: 20px 0;
  
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: colum;
`;
const ButtonContainer = styled.div`
  display: flex;
  padding: 20px 0;
  align-items: center;
  a {
    display: block;
    margin: 0 20px;
    text-decoration: none;
    color: rgba(26, 137, 23, 1);
    font-size: 20px;
    &:hover {
      letter-spacing: 0.2em;
      transition: all 1s;
    }
  }
`;
const LastPage = styled(Link)``;
const ThisPage = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
const NextPage = styled(Link)``;

function Post({ post }) {
  return (
    <PostContainer>
      <CreatedAt>{new Date(post.createdAt).toLocaleString()}</CreatedAt>
      <Title>{post.title}</Title>
      <Content>{post.body}</Content>
      <ReadMore to={`/posts/${post.id}`}>ReadMore</ReadMore>
    </PostContainer>
  );
}

function PageButtonCard({
  currentPage,
  handleChangePageLast,
  handleChangePageNext,
  totalPages,
}) {
  return (
    <ButtonContainer>
      {currentPage !== 1 && (
        <LastPage onClick={handleChangePageLast}>Last</LastPage>
      )}
      <ThisPage>{currentPage}</ThisPage>
      {currentPage !== totalPages && (
        <NextPage onClick={handleChangePageNext}>Next</NextPage>
      )}
    </ButtonContainer>
  );
}

export default function ArchivePage() {
  const [posts, setPosts] = useState([]);

  // 全部頁數有幾頁 ， 預設 0 頁
  const [totalPages, setTotalPages] = useState(0);

  // 目前在第幾頁 , 預設第一頁
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 3;

  const handleChangePageNext = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
  };

  const handleChangePageLast = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    // 先 render 第一頁資料
    getPostFromPage(1, limit)
      .then((res) => {
        console.log(res);
        // 從 response header 找到文章總數
        if (res.headers.get("X-Total-Count")) {
          // 找到文章總數
          const totalArticals = Number(res.headers.get("X-Total-Count"));
          console.log(totalArticals);

          // 找到全部有幾頁 (文章總數 / limit)
          let totalPages = Math.ceil(totalArticals / limit);
          console.log("totalPages", totalPages);
          if (!totalPages) {
            totalPages = 1;
          }
          setTotalPages(totalPages);
          console.log(res);
          return res.json();
        }
      })
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  useEffect(() => {
    return getPostFromPage(currentPage, limit)
      .then((res) => {
        return res.json();
      })
      .then((posts) => {
        console.log(posts);
        setPosts(posts);
      });
  }, [currentPage]);

  return (
    <Container>
      <Information>
        <Avatar>
          <img src={avatar} alt="avatar" />
        </Avatar>
        <h2>My Blog</h2>
        <About to={"/about"}>關於我</About>
      </Information>
      <PostList>
        <h1>文章列表</h1>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
        <ButtonWrapper>
          <PageButtonCard
            totalPages={totalPages}
            currentPage={currentPage}
            handleChangePageNext={handleChangePageNext}
            handleChangePageLast={handleChangePageLast}
          />
        </ButtonWrapper>
      </PostList>
    </Container>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};

PageButtonCard.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  handleChangePageLast: PropTypes.func,
  handleChangePageNext: PropTypes.func,
};
