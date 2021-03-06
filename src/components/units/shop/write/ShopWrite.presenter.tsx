import * as S from "./ShopWrite.styles";
import Upload from "../../../commons/uploads/upload.container";
import { IShopWriteUIProps } from "./ShopWrite.types";

export default function ShopWriteUI(props: any) {
  return (
    <S.Container onSubmit={props.handleSubmit(props.onClickUploadProduct)}>
      <S.Wrapper>
        <S.left>
          <Upload />
          {/* <S.UploadBtn>Upload your photo</S.UploadBtn> */}
        </S.left>

        <S.right>
          <S.Inner>
            <S.Title>Title</S.Title>
            <S.InputText type="text" {...props.register("name")}></S.InputText>
            <S.Error>{props.formState.errors.name?.message}</S.Error>
          </S.Inner>

          <S.InnerWrapeer>
            <div>
              <S.Title>Remark</S.Title>
              <S.InputText2
                type="text"
                {...props.register("remarks")}
              ></S.InputText2>
              <S.Error>{props.formState.errors.remarks?.message}</S.Error>
            </div>
            <div>
              <S.Title>Size</S.Title>
              <S.InputText2 type="text"></S.InputText2>
              <S.Error></S.Error>
            </div>
          </S.InnerWrapeer>

          <S.Inner>
            <S.Title>Story</S.Title>
            <S.InputText3
              type="text"
              {...props.register("contents")}
            ></S.InputText3>
            <S.Error>{props.formState.errors.contents?.message}</S.Error>
          </S.Inner>

          <S.Inner>
            <S.Title>Price</S.Title>
            <S.InputText type="text" {...props.register("price")}></S.InputText>
            <S.Error>{props.formState.errors.price?.message}</S.Error>
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
            isActive={props.formState.isValid}
          >
            {props.isEdit ? "Submit" : "Edit"}
          </S.SubmitBtn>
          <S.CancleBtn type="button">Cancle</S.CancleBtn>
        </div>
      </S.BottomWrapper>
    </S.Container>
  );
}
