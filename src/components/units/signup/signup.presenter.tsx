import * as S from "./signup.styles";

export default function SignUpUI() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Box>
          <S.Title>E-MAIL</S.Title>
          <S.TextBox type="text" placeholder="이메일을 입력해주세요." />
          <S.Error>ddd</S.Error>
        </S.Box>
        <S.Box>
          <S.Title>NAME</S.Title>
          <S.TextBox type="text" placeholder="이름을 입력해주세요." />
        </S.Box>
        <S.Box>
          <S.Title>PASSWORD</S.Title>
          <S.TextBox type="password" placeholder="비밀번호을 입력해주세요." />
          <S.Error>ddd</S.Error>
        </S.Box>
        <S.Box>
          <S.Title>CONFIRM PASSWORD</S.Title>
          <S.TextBox
            type="password"
            placeholder="비밀번호를 다시한번 입력해주세요."
          />
          <S.Error>ddd</S.Error>
        </S.Box>

        <S.SignUpBtn>SIGN UP</S.SignUpBtn>
      </S.Wrapper>
    </S.Container>
  );
}
