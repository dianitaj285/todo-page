import React, { useCallback } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { removeTodo } from "../redux/thunks";
import { getTodos } from "../redux/selectors";
import { COLORS } from "../styles/globalStyles";

const TodoList = ({ todos, removeTodo }) => {
  const handleRemove = useCallback(
    (key) => () => {
      removeTodo(key);
    },
    []
  );

  return (
    <Container>
      <Title>Tasks</Title>
      <List>
        {Object.entries(todos).map(([key, value]) => (
          <Item key={key}>
            {value} <Close onClick={handleRemove(key)}>x</Close>
          </Item>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
`;

const Title = styled.h1``;

const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  background: transparent;
  border: 1px solid white;
  color: white;
  font-size: 1rem;
  &:hover {
    background-color: ${COLORS.brown};
    border: 1px solid transparent;
  }
`;

const List = styled.ul`
  padding: 0;
`;

const Item = styled.li`
  margin-bottom: 5px;
  padding-right: 30px;
  font-size: 1.2rem;
  position: relative;
`;

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});

const mapDispatchToProps = { removeTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
