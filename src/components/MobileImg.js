import styled from "styled-components";

import mobileImg from "../images/illustration-woman-online-mobile.svg";
import mobilePattern from "../images/bg-pattern-mobile.svg";

const MobileImgWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 266px;

  .woman {
    position: absolute;
  }

  .pattern {
    position: absolute;
    right: 0;
    top: 109px;
  }
`;

const MobileImg = () => {
  return (
    <MobileImgWrapper className="image">
      <img src={mobileImg} alt="Woman looking at a screen" className="woman" />
      <img src={mobilePattern} alt="shadow" className="pattern" />
    </MobileImgWrapper>
  );
};

export default MobileImg;
