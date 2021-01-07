import styled from "styled-components";
import HomePage from "../../pages/HomePage/";
import LoginPage from "../../pages/LoginPage/";
import ArchivePage from "../../pages/ArchivePage";
import AboutPage from "../../pages/AboutPage";
import ReleasePage from "../../pages/ReleasePage";
import RegisterPage from "../../pages/RegisterPage";
import PostPage from "../../pages/PostPage";
import Header from "../Header/";
import { getAuthToken } from "../../utils";
import { AuthContext } from "../../Contexts";
import { getMe } from "../../webApi";
import Banner from "../../Banner/Banner";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const Root = styled.div``;

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (getAuthToken()) {
      getMe().then((res) => {
        if (res.ok) {
          setUser(res.data);
        }
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Root>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Banner />
              <HomePage />
            </Route>
            <Route path="/posts/:id">
              <Banner />
              <PostPage />
            </Route>
            <Route path="/archive">
              <Banner />
              <ArchivePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/release">
              <ReleasePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
          </Switch>
        </Router>
      </Root>
    </AuthContext.Provider>
  );
}

export default App;
