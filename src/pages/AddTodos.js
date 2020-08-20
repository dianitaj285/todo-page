import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../styles/globalStyles";
import { addTodo } from "../redux/thunks";

const AddTodos = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleOnChangeInput = useCallback(({ target: { value } }) => {
    setInput(value);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <Container>
      <h1>Add a new task</h1>
      <Form onSubmit={handleSubmit}>
        <Label>
          Task
          <Input
            placeholder="Buy new underware"
            onChange={handleOnChangeInput}
            type="text"
            value={input}
          />
        </Label>
        <Button type="submit">Add</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
`;

const Form = styled.form`
  padding: 5px;
  border-radius: 3px;
`;

const Label = styled.label`
  font-size: 1.2rem;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid ${COLORS.yellow};
  font-size: 1.2rem;
  color: white;
  margin-left: 10px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  min-width: 50px;
  min-height: 50px;
  background-color: white;
  border: none;
  font-size: 1.2rem;
  color: ${COLORS.blue};
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  &:focus {
    outline: none;
  }
  &: hover {
    background-color: ${COLORS.yellow};
    color: ${COLORS.grey};
  }
`;

const mapDispatchToProps = { addTodo };

export default connect(null, mapDispatchToProps)(AddTodos);
