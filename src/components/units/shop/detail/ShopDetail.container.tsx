import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ShopDetailUI from "./ShopDetail.presenter";
import { FETCH_USED_ITEM, DELETE_USED_ITEM } from "./ShopDetail.queris";

export default function ShopDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.itemId },
  });
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  // 📌 장바구니 이동
  const onClickMoveToCart = () => {
    router.push("/cart");
  };
  // 📌 목록 이동
  const onClickMoveToList = () => {
    router.push("/shop");
  };

  // 📌 수정하기 이동
  const onClickMoveProductEdit = () => {
    router.push(`/shop/${router.query.itemId}/edit`);
  };

  // 📌 삭제하기
  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: router.query.itemId },
      });
      alert("삭제가 완료되었습니다.");
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ShopDetailUI
      data={data}
      onClickMoveToCart={onClickMoveToCart}
      onClickMoveToList={onClickMoveToList}
      onClickMoveProductEdit={onClickMoveProductEdit}
      onClickDelete={onClickDelete}
    />
  );
}
