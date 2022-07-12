import * as S from "./Mypage.styles";

export default function MypageUI(props) {
  return (
    <S.Container>
      <S.Wrapper01>
        <button>Mypage</button>
        <button>Oder History</button>
        <button onClick={props.onClickCart}>Cart</button>
      </S.Wrapper01>
      <S.Wrapper02>
        <S.Title>MYPAGE</S.Title>
        <S.InnerBox>
          <div>김소현님 안녕하세요.</div>
          <div>Point</div>
          <div>1,000 </div>
        </S.InnerBox>
      </S.Wrapper02>
      <S.Wrapper03>
        <button>Edit Account Info</button>
        <button>Customer Center</button>
      </S.Wrapper03>
    </S.Container>
  );
}
