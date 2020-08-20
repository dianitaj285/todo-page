import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../styles/globalStyles";

export function Nav() {
  const { pathname } = useLocation();

  return (
    <div>
      <ButtonsContainer>
        <MinContainer>
          <div>Want to add some tasks?</div>
          <Link to="/add">
            <Button isSelected={pathname === "/add"}>Add Tasks</Button>
          </Link>
        </MinContainer>
        <MinContainer>
          <div>Want to see your tasks?</div>
          <Link to="/todos">
            <Button isSelected={pathname === "/todos"}>To Do List</Button>
          </Link>
        </MinContainer>
      </ButtonsContainer>
    </div>
  );
}

const ButtonsContainer = styled.div`
  display: flex;
  height: 300px;
  width: 400px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  border-radius: 50%;
  background-color: ${(props) => (props.isSelected ? COLORS.yellow : "white")};
  border: none;
  focus: none;
  width: 100px;
  color: ${(props) => (props.isSelected ? COLORS.grey : COLORS.blue)};
  height: 100px;
  font-size: 20px;
  outline: none;
  &: hover {
    background-color: ${COLORS.yellow};
    color: ${COLORS.grey};
  }
`;

const MinContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;
