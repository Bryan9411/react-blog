import styled from "styled-components";
import { getPosts } from "../../webApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../IMG/avatar.png";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  flex-direction: colum;
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
const Auther = styled.h4``;
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

function Post({ post }) {
  return (
    <PostContainer>
      <CreatedAt>{new Date(post.createdAt).toLocaleString()}</CreatedAt>
      <Title>{post.title}</Title>
      <Auther>{post.nickname}</Auther>
      <Content>{post.body}</Content>
      <ReadMore to={`/posts/${post.id}`}>ReadMore</ReadMore>
    </PostContainer>
  );
}

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  // let pageNum = useRef()
  // const limit = 8

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
      console.log(posts);
    });
  }, []);

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
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </PostList>
    </Container>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};
