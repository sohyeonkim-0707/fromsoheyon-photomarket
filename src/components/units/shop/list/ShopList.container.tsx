import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ShopUI from "./ShopList.presenter";
import { FETCH_USED_ITEMS } from "./ShopList.queris";

export default function Shop() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS, {});

  // π ν΄λΉ μ¬μ§μΌλ‘ μ΄λ
  const onClickDetailPhoto = (el) => (event) => {
    router.push(`/shop/${event.currentTarget.id}`);
  };

  // π λ¬΄νμ€ν¬λ‘€
  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <ShopUI
      data={data}
      onClickDetailPhoto={onClickDetailPhoto}
      onLoadMore={onLoadMore}
    />
  );
}
