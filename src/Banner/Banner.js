import styled from "styled-components";
import banner from "../IMG/bannerr.jpg"

const BannerContainer = styled.div`
  height: 500px;
  width: 1440px;
  margin: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;
export default function Banner() {
  return (
    <BannerContainer>
      <img src={banner} alt="banner" />
    </BannerContainer>
  );
}
