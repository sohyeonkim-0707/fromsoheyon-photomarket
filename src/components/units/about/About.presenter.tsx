import * as S from "./About.styles";

export default function AboutUI() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.InnerLeft>
          <p>FILM PHOTOGRAPHER</p>
          <p>CURRENTRLY BASED IN SEOUL, KOREA</p>
          <img></img>
        </S.InnerLeft>

        <S.InnerRight>
          <S.Box>
            <S.Name>Sohyeon Kim</S.Name>
            <S.Nicname>피동보다 능동</S.Nicname>
            <S.Text>
              ABCDEFGHIJKLM NOPQRSTUVWXYZ abcdefghijklm nopqrstuvwxyz 1234567890
            </S.Text>
            <S.Email>hjthgus777@gmail.com</S.Email>
          </S.Box>
        </S.InnerRight>
      </S.Wrapper>

      <S.Wrapper>
        <S.Image01></S.Image01>
      </S.Wrapper>
      <S.Wrapper>
        <S.Image02></S.Image02>
      </S.Wrapper>
      <S.Wrapper>
        <S.Image03></S.Image03>
      </S.Wrapper>
    </S.Container>
  );
}
