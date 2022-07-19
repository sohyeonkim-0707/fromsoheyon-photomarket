import styled from "@emotion/styled";

export const UploadImage = styled.img`
  /* border: 1px solid #d9d9d9; */
  width: 590px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UploadBtn = styled.div`
  width: 225px;
  height: 61px;
  border: 1px solid #d9d9d9;
  background: white;
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  line-height: 61px;
  outline: none;
  cursor: pointer;
  position: absolute;
  top: 45%;
  left: 21%;
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
