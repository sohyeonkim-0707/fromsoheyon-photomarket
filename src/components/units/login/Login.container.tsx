import LoginUI from "./Login.presenter";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const onClickSignUp = () => {
    router.push("/signup");
  };

  return <LoginUI onClickSignUp={onClickSignUp} />;
}
