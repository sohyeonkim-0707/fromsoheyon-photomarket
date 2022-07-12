import MypageUI from "./Mypage.presenter";
import { useRouter } from "next/router";

export default function Mypage() {
  const router = useRouter();

  const onClickCart = () => {
    router.push("/cart");
  };

  return <MypageUI onClickCart={onClickCart} />;
}
