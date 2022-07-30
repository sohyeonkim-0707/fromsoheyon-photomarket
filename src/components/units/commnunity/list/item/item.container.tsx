import styled from "@emotion/styled";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 70px;
  padding: 20px 65px;
  border-bottom: 1px solid #d9d9d9;

  div {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
  }
`;

export default function Item() {
  return (
    <Row>
      <div>N</div>
      <div>Title</div>
      <div>Writer</div>
      <div>Date</div>
    </Row>
  );
}
