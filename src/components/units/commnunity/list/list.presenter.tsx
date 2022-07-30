import Item from "./item/item.container";
import * as S from "./list.styles";

export default function CommunityUI(props) {
  return (
    <S.Container>
      <h1>COMMUNITY</h1>
      <S.Table>
        <S.Row>
          <div>N</div>
          <div>Title</div>
          <div>Writer</div>
          <div>Date</div>
        </S.Row>
        {/* map 돌릴부분 */}
        <Item />
      </S.Table>
      <div>pagination</div>
      <div>
        <button>Write</button>
      </div>
    </S.Container>
  );
}

// 표태크 사용하여 만들기
