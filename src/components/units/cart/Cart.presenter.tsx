import * as S from "./Cart.styles";

export default function CartUI(props) {
  return (
    <S.Container>
      <S.Wrapper01>
        <button onClick={props.onClickMypage}>Mypage</button>
        <button>Oder History</button>
        <button>Cart</button>
      </S.Wrapper01>

      <S.Wrapper02>
        <S.Title>CART</S.Title>

        <S.InnerBox>
          <S.Photo></S.Photo>
          <div>Product</div>
          <div>1</div>
          <div>1,000₩</div>
          <S.CancleBtn src="./cancle.png"></S.CancleBtn>
        </S.InnerBox>
      </S.Wrapper02>
      <S.Wrapper03>
        <div>Subtotal:</div>
        <div>1,000₩</div>
      </S.Wrapper03>
      <S.Wrapper04>
        <button>Checkout</button>
      </S.Wrapper04>
    </S.Container>
  );
}
