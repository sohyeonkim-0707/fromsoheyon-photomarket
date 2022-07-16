import * as S from "./Item.styles";

export default function ItemUI() {
  return (
    <S.Container>
      <S.Wrapper src="./home.jpg" alt="제품 이미지"></S.Wrapper>
      <S.InnerWrapper>
        <S.Title>제목</S.Title>
        <S.Title>요약</S.Title>
      </S.InnerWrapper>
    </S.Container>
  );
}
