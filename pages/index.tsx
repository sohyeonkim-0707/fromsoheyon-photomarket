import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
const MainPhoto = styled.img`
  max-width: 100%;
  height: 1080px;
  display: block;
`;

export default function first() {
  const settings = {
    // 아래 버튼
    dots: false,
    // 반복
    infinite: true,
    // 한 화면에 보이는 이미지 수
    slidesToShow: 1,
    // 한 번에 넘어가는 콘텐츠 수
    slidesToScroll: 1,
    autoplay: true,
    // 넘어갈 때 속도
    speed: 3000,
    // 넘어가는 속도
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <MainPhoto src="/01.jpg"></MainPhoto>
        <MainPhoto src="/02.jpg"></MainPhoto>
        <MainPhoto src="/03.jpg"></MainPhoto>
        <MainPhoto src="/04.jpg"></MainPhoto>
      </Slider>
    </Wrapper>
  );
}
