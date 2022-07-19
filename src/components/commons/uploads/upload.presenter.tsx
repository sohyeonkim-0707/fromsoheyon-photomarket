import * as S from "./upload.styles";

export default function UploadUI() {
  return (
    <>
      {/* 사진미리보기 */}
      <S.UploadImage />
      {/* 눈에 보이는 곳 */}
      <S.UploadBtn>Upload your photo</S.UploadBtn>
      {/* 사진 올리는 곳/ 숨김처리 */}
      <S.UploadFileHidden />
    </>
  );
}
