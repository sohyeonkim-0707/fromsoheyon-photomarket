import * as S from "./ShopDetail.styles";

export default function ShopDetailUI() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.left>
          <S.Photo></S.Photo>
        </S.left>

        <S.right>
          <S.Inner01>
            <S.Title>August</S.Title>
            <S.Remark>Lichterfelde, Berlin, Germany, 2020</S.Remark>
            <S.Size>A1/ 594mm*841mm</S.Size>
            <S.Price>1,000원</S.Price>
          </S.Inner01>
          <S.Inner>
            <S.BuyBtn>Buy here</S.BuyBtn>
          </S.Inner>
        </S.right>
      </S.Wrapper>

      <S.BackBtn>Back to Shop</S.BackBtn>
    </S.Container>
  );
}
