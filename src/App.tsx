/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useDispatch, useSelector } from "react-redux";
import { LoadingState } from "./types";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import SubjectPage from "./SubjectPage";
import HomePage from "./HomePage";
import SchoolPage from "./SchoolPage";
import SemesterPage from "./SemesterPage";
import { getSchools, RootState } from "./duck";

export interface School {
  code: string;
  name: string;
}

const styles = {
  App: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    paddingBottom: "50px"
  },
  content: {
    width: "60vw"
  }
} as const;

const App: React.FC = () => {
  const dispatch = useDispatch();
  const loadingState = useSelector(
    (state: RootState) => state.core.loadingState
  );
  const error = useSelector((state: RootState) => state.core.error);
  useEffect(() => {
    (async () => {
      dispatch(getSchools());
    })();
  }, [loadingState, dispatch]);
  if (loadingState === LoadingState.Loading) {
    return (
      <div css={{ ...styles.App, height: "100vh", justifyContent: "center" }}>
        <h2> Loading...</h2>;
      </div>
    );
  }
  if (loadingState === LoadingState.Failed) {
    return <div css={{ color: "red" }}> {error} </div>;
  }
  return (
    <div css={styles.App}>
      <Router>
        <Link
          css={{
            textDecoration: "none",
            color: "black",
            "&:hover": {
              textDecoration: "underline"
            }
          }}
          to="/"
        >
          <h1> Schedge </h1>
        </Link>
        <div css={styles.content}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/:semester">
              <Switch>
                <Route exact path="/:semester">
                  {" "}
                  <SemesterPage />
                </Route>
                <Route exact path="/:semester/:school">
                  <SchoolPage />
                </Route>
                <Route path="/:semester/:school/:code">
                  <SubjectPage />
                </Route>
              </Switch>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
