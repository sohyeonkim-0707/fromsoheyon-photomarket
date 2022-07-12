import CartUI from "./Cart.presenter";
import { useRouter } from "next/router";

export default function Cart() {
  const router = useRouter();

  const onClickMypage = () => {
    router.push("/mypage");
  };

  return <CartUI onClickMypage={onClickMypage} />;
}
