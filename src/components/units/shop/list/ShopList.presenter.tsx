import Item from "./item/Item.container";
import * as S from "./ShopList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";

const Scroll = styled.div`
  height: 2000px;
  overflow: auto;
`;

const Infinite = styled(InfiniteScroll)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function ShopUI(props) {
  if (!props.data) return <div />;
  return (
    <>
      <S.Container>
        <Scroll>
          <Infinite
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el) => (
              <Item
                key={uuidv4()}
                el={el}
                onClickDetailPhoto={props.onClickDetailPhoto}
              />
            ))}
          </Infinite>
        </Scroll>
      </S.Container>
    </>
  );
}
