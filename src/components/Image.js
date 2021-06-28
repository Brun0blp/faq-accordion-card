import styled from "styled-components";

// images
import desktopImg from "../images/illustration-woman-online-desktop.svg";
import desktopPattern from "../images/bg-pattern-desktop.svg";
import illustrationBox from "../images/illustration-box-desktop.svg";

const StyledImage = styled.div``;

const Image = () => {
  return (
    <StyledImage>
      <img src={desktopPattern} />
    </StyledImage>
  );
};

export default Image;
