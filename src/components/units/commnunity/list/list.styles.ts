import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 195px 240px;
  h1 {
    font-family: "Montserrat";
    font-style: italic;
    font-weight: 400;
    font-size: 30px;
  }
`;

export const Table = styled.div`
  height: 631px;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #000000;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 70px;
  padding: 16px 63px;
  border-bottom: 1px solid #d9d9d9;

  div {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 37px;
  }
`;
