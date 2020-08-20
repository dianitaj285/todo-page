import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import { Title } from "./components/Title";
import TodoList from "./pages/TodoList";
import AddTodos from "./pages/AddTodos";
import { Nav } from "./components/Nav";
import { connect } from "react-redux";
import { getTodos } from "./redux/thunks";

function App({ getTodos }) {
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Router>
      <Title />
      <Container>
        <Nav />
        <Switch>
          <Route path="/add" component={AddTodos} />
          <Route path="/todos" component={TodoList} />
          <Redirect to="/add" />
        </Switch>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;

const mapDispatchToProps = { getTodos };

export default connect(null, mapDispatchToProps)(App);
