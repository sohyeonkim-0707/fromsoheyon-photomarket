import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommunityUI from "./list.presenter";
import { FETCH_BOARDS } from "./list.queris";

export default function Community() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  const onClickMoveToBoardDetail = (event) => {
    if (event.target instanceof Element)
      router.push(`/community/${event.target.id}`);
  };
  return <CommunityUI onClickMoveToBoardDetail={onClickMoveToBoardDetail} />;
}
