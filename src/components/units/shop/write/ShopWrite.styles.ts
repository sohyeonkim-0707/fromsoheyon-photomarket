import styled from "@emotion/styled";

export const Container = styled.main`
  padding: 191px 214px 100px 275px;
  /* background-color: beige; */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: beige; */
`;

export const left = styled.section`
  /* border: 1px solid red; */
`;

export const Photo = styled.img`
  /* border: 1px solid red; */
  width: 590px;
  height: 800px;
  background-color: #d9d9d9;
`;

export const right = styled.section`
  padding-left: 241px;
  padding-top: 42px;
`;

export const Inner = styled.div`
  /* border: 1px solid red; */
  width: 600px;
  margin-bottom: 42px;
`;

export const InnerWrapeer = styled.div`
  /* background-color: yellow; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 42px;

  div {
    width: 270px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
`;

export const InputText = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  border: 1px solid #d9d9d9;
`;

export const InputText2 = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  border: 1px solid #d9d9d9;
`;

export const InputText3 = styled.input`
  width: 100%;
  height: 292px;
  outline: none;
  border: 1px solid #d9d9d9;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  /* border: 1px solid red; */
`;

export const BackBtn = styled.button`
  width: 230px;
  height: 50px;
  margin-top: 79px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  background-color: white;
  outline: none;
  cursor: pointer;
  :hover {
    background-color: #184124;
    color: #ffffff;
  }
`;

export const CancleBtn = styled(BackBtn)`
  margin-left: 31px;
`;
export const EditBtn = styled(BackBtn)``;
