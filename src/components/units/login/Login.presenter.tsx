import * as S from "./Login.styles";

export default function LoginUI(props) {
  return (
    <S.Container>
      <S.Wrapper onSubmit={props.handleSubmit(props.onClickLogin)}>
        <S.Box>
          <S.Title>ID</S.Title>
          <S.Id
            type="text"
            placeholder="이메일을 입력해주세요."
            {...props.register("email")}
          />
          <S.Error>{props.formState.errors.email?.message}</S.Error>
        </S.Box>
        <S.Box>
          <S.Title>PASSWORD</S.Title>
          <S.Password
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...props.register("password")}
          />
          <S.Error>{props.formState.errors.password?.message}</S.Error>
        </S.Box>
        <S.Box>
          <S.LoginBtn>LOGIN</S.LoginBtn>
          <S.Forgot>Forgotten ID or Password</S.Forgot>
        </S.Box>
        <S.Box>
          <S.SignUpBtn type="button" onClick={props.onClickSignUp}>
            SIGN UP
          </S.SignUpBtn>
        </S.Box>
      </S.Wrapper>
    </S.Container>
  );
}
