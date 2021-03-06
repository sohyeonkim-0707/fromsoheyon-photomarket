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

  // π μ₯λ°κ΅¬λ μ΄λ
  const onClickMoveToCart = () => {
    router.push("/cart");
  };
  // π λͺ©λ‘ μ΄λ
  const onClickMoveToList = () => {
    router.push("/shop");
  };

  // π μμ νκΈ° μ΄λ
  const onClickMoveProductEdit = () => {
    router.push(`/shop/${router.query.itemId}/edit`);
  };

  // π μ­μ νκΈ°
  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: router.query.itemId },
      });
      alert("μ­μ κ° μλ£λμμ΅λλ€.");
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
