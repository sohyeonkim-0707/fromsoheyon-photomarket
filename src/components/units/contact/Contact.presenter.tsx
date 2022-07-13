import * as S from "./Contact.styles";

export default function ContactUI() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Arrow src="./arrow.png"></S.Arrow>
        <S.Title>CONTACT</S.Title>
        <S.InnerWrapper>
          <S.Email>hjthgus777@gmail.com</S.Email>
          <S.Tel>010.0000.0000</S.Tel>
        </S.InnerWrapper>
      </S.Wrapper>
      <S.Map></S.Map>
    </S.Container>
  );
}
