import styled from "@emotion/styled";

export const Container = styled.main`
  padding: 210px 275px;
  /* background-color: beige; */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
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
  display: flex;
  /* border: 1px solid blue; */
  flex-direction: column;
  justify-content: space-between;
  padding-left: 208px;
`;

export const Inner01 = styled.div`
  /* border: 1px solid red; */
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 90px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  color: #000000;
`;

export const Remark = styled.p`
  margin: 0 0 35px 0;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
`;

export const Size = styled.p`
  margin: 0 0 35px 0;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
`;

export const Price = styled.p`
  margin: 0;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  /* border: 1px solid red; */
`;

export const BuyBtn = styled.button`
  width: 334px;
  height: 80px;
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  background-color: white;
  outline: none;
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 400;
  font-size: 25px;
  outline: none;
  cursor: pointer;
  :hover {
    background-color: #184124;
    color: #ffffff;
  }
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
