import styled from "@emotion/styled";

const Wrapper = styled.main`
  /* background-color: yellow; */
`;

const Photo = styled.img`
  width: 640px;
  height: 868px;
  border: 1px solid black;
  cursor: pointer;
`;

export default function Item(props) {
  return (
    <Wrapper>
      <Photo
        src={`https://storage.googleapis.com/${props.el.images[0]}`}
        alt="상품이미지"
        id={props.el._id}
        onClick={props.onClickDetailPhoto(props.el)}
      />
    </Wrapper>
  );
}
