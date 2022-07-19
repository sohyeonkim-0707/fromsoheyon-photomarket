import Upload from "../../../commons/uploads/upload.container";
import * as S from "./ShopWrite.styles";

export default function ShopWriteUI() {
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
            <S.InputText></S.InputText>
          </S.Inner>

          <S.InnerWrapeer>
            <div>
              <S.Title>Remark</S.Title>
              <S.InputText2></S.InputText2>
            </div>
            <div>
              <S.Title>Size</S.Title>
              <S.InputText2></S.InputText2>
            </div>
          </S.InnerWrapeer>
          <S.Inner>
            <S.Title>Story</S.Title>
            <S.InputText3></S.InputText3>
          </S.Inner>
          <S.Inner>
            <S.Title>Price</S.Title>
            <S.InputText></S.InputText>
          </S.Inner>
        </S.right>
      </S.Wrapper>

      <S.Bottom>
        <S.BackBtn>Back to Shop</S.BackBtn>

        <div>
          <S.EditBtn>Edit</S.EditBtn>
          <S.CancleBtn>Cancle</S.CancleBtn>
        </div>
      </S.Bottom>
    </S.Container>
  );
}
