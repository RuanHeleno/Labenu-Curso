import styled from "styled-components";

export const Header = styled.header`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 10%;
`;

export const Content = styled.main`
  min-height: 80%;
  display: flex;
`;

export const Menu = styled.nav`
  flex-basis: 200px;
  border-right-style: solid;
  border-right-width: thin;
`;
