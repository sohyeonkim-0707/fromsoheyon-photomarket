import * as S from "./ShopDetail.styles";

export default function ShopDetailUI(props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.left>
          <S.Photo></S.Photo>
        </S.left>

        <S.right>
          <S.Inner01>
            <S.Title>{props.data?.fetchUseditem?.name}</S.Title>
            <S.Remark>{props.data?.fetchUseditem?.remark}</S.Remark>
            <S.Size>A1/ 594mm*841mm</S.Size>
            <S.Price>{props.data?.fetchUseditem?.price}</S.Price>
          </S.Inner01>
          <S.Inner>
            <S.BuyBtn onClick={props.onClickMoveToCart}>Buy here</S.BuyBtn>
          </S.Inner>
        </S.right>
      </S.Wrapper>
      <S.BottomWrapper>
        <S.BackBtn onClick={props.onClickMoveToList}>Back to Shop</S.BackBtn>
        <div>
          <S.EditBtn type="button" onClick={props.onClickMoveProductEdit}>
            Edit
          </S.EditBtn>
          <S.deleteBtn type="button" onClick={props.onClickDelete}>
            Delete
          </S.deleteBtn>
        </div>
      </S.BottomWrapper>
    </S.Container>
  );
}
