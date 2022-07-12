import styled from "@emotion/styled";

export const Container = styled.main`
  width: 1920px;
  padding: 287px 710px 187px 710px;
  margin: 0 auto;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`;
export const Box = styled.div`
  /* border: 1px solid blue; */
  margin-bottom: 36px;
`;

export const Title = styled.div`
  /* border: 1px solid blue; */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
`;

export const TextBox = styled.input`
  width: 500px;
  height: 80px;
  outline: none;
  border: 1px solid #d9d9d9;
  ::placeholder {
    font-size: 16px;
    padding-left: 10px;
  }
`;

export const SignUpBtn = styled.button`
  width: 500px;
  height: 80px;
  background: #d9d9d9;
  border: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
  :hover {
    background: #184124;
    color: white;
  }
`;

export const Error = styled.div`
  color: red;
`;
