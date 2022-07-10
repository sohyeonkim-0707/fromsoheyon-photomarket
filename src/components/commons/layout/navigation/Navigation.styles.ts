import styled from "@emotion/styled";

export const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 0 10%;
  /* background-color: beige; */
  line-height: 100px;
`;

export const Logo = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  cursor: pointer;
`;

export const MenuList = styled.li`
  padding-left: 0px;
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  list-style: none;
  cursor: pointer;
`;
