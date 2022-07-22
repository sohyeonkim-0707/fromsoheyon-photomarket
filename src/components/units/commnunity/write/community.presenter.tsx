import * as S from "./community.styles";
import Upload from "../../../commons/uploads/upload.container";

export default function CommnunityWriteUI(props: any) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.left>
          <Upload />
          {/* <S.UploadBtn>Upload your photo</S.UploadBtn> */}
        </S.left>

        <S.right>
          <S.Inner>
            <S.Title>Title</S.Title>
            <S.InputText type="text"></S.InputText>
            <S.Error>error</S.Error>
          </S.Inner>

          <S.InnerWrapeer>
            <div>
              <S.Title>Writer</S.Title>
              <S.InputText2 type="text"></S.InputText2>
              <S.Error></S.Error>
            </div>
            <div>
              <S.Title>Password</S.Title>
              <S.InputText2 type="password"></S.InputText2>
              <S.Error></S.Error>
            </div>
          </S.InnerWrapeer>

          <S.Inner>
            <S.Title>Contents</S.Title>
            <S.InputText3 type="text"></S.InputText3>
            <S.Error></S.Error>
          </S.Inner>

          <S.Inner>
            <S.Title>Tag</S.Title>
            <S.InputText type="text"></S.InputText>
            <S.Error></S.Error>
          </S.Inner>
        </S.right>
      </S.Wrapper>
      <S.BottomWrapper>
        <S.BackBtn type="button">Back to Shop</S.BackBtn>

        <div>
          <S.SubmitBtn
            onClick={
              props.isEdit
                ? props.onClcikEditProduct
                : props.onClickUploadProduct
            }
          >
            {props.isEdit ? "Edit" : "Submit"}
          </S.SubmitBtn>
          <S.CancleBtn type="button">Cancle</S.CancleBtn>
        </div>
      </S.BottomWrapper>
    </S.Container>
  );
}
