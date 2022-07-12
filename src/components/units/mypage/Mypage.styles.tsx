import styled from "@emotion/styled";

export const Container = styled.main`
  padding: 176px 119px 345px 119px;
  margin: 0 auto;
`;

export const Wrapper01 = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: right;
  /* border: 1px solid red; */
  margin-bottom: 116px;

  button {
    width: 230px;
    height: 50px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    margin-left: 26px;
    border: 1px solid #d9d9d9;
    background-color: white;
    border-radius: 50px;
    cursor: pointer;
    :hover {
      background: #184124;
      color: white;
    }
  }
`;

export const Wrapper02 = styled.section``;

export const Title = styled.h1`
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  /* border: 1px solid red; */
`;

export const InnerBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  padding: 15px 85px;
  border: 1px solid #d9d9d9;
  div {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    /* border: 1px solid red; */
  }
`;

export const Wrapper03 = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding: 39px 0px;
  border-bottom: 1px solid #d9d9d9;
  button {
    width: 230px;
    height: 50px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    margin-left: 26px;
    border: 1px solid #d9d9d9;
    background-color: white;
    border-radius: 50px;
    cursor: pointer;
    :hover {
      background: #184124;
      color: white;
    }
  }
`;
