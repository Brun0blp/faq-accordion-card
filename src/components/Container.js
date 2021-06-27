import styled from "styled-components";

// images
import mobileImg from "../images/illustration-woman-online-mobile.svg";
import desktopImg from "../images/illustration-woman-online-desktop.svg";
import mobilePattern from "../images/bg-pattern-mobile.svg";
import desktopPattern from "../images/bg-pattern-desktop.svg";
import illustrationBox from "../images/illustration-box-desktop.svg";

const StyledContainer = styled.div`
  width: 100%;
  min-width: 315px;
  background-color: var(--off-white);
  border-radius: 1rem;
  position: relative;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 10rem;

  .image {
    position: absolute;
    left: 1rem;
    top: 0;
    transform: translateY(-54%);

    img {
      width: 100%;
    }
  }

  .faq {
    &__title {
      text-align: center;
      font-size: 2.5rem;
    }
  }

  @media (min-width: 900px) {
    max-width: 670px;
  }
`;

const Container = ({ children }) => {
  return (
    <StyledContainer>
      <section className="image">
        <picture>
          <source media="(max-width: 900px)" srcSet={mobileImg} />
          <img src={desktopImg} alt="FAQ image" />
        </picture>
      </section>
      <section className="faq">
        <h1 className="title faq__title">FAQ</h1>
        {children}
      </section>
    </StyledContainer>
  );
};

export default Container;
