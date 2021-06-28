import styled from "styled-components";

import mobileImg from "../images/illustration-woman-online-mobile.svg";
import mobilePattern from "../images/bg-pattern-mobile.svg";

const MobileImgWrapper = styled.div`
  position: relative;

  .woman {
    position: absolute;
    right: 0;
  }

  .pattern {
    position: absolute;
    right: 0;
    top: 100px;
  }
`;

const MobileImg = () => {
  return (
    <MobileImgWrapper>
      <img src={mobileImg} alt="Woman looking at a screen" className="woman" />
      <img src={mobilePattern} alt="shadow" className="pattern" />
    </MobileImgWrapper>
  );
};

export default MobileImg;
