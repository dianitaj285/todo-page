import React from "react";
import styled from "styled-components";

export function Title() {
  return <Header>To Do List App</Header>;
}

const Header = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
`;
