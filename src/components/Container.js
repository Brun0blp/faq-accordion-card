import styled from "styled-components";

import MobileImg from "./MobileImg";
import Dropdown from "./Dropdown";
import { faqs } from "../faqs";

import bgPattern from "../images/bg-pattern-desktop.svg";
import box from "../images/illustration-box-desktop.svg";
import woman from "../images/illustration-woman-online-desktop.svg";

const Dropdowns = faqs.map((faq) => (
  <Dropdown question={faq.q} answer={faq.a} />
));

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--off-white);
  border-radius: 2rem;
  width: 330px;
  align-items: center;
  position: relative;
  padding-right: 2rem;
  padding-left: 2rem;
  box-shadow: 0 2.25rem 2.25rem -1rem var(--darker-blue);

  .mobile-image {
    width: 240px;
    position: relative;
    top: -9rem;

    .woman {
      position: absolute;
      right: 0;
    }

    .pattern {
      position: absolute;
      right: 0;
      top: 109px;
    }
  }

  .desktop-image {
    display: none;
  }

  .faq {
    width: 100%;

    .title {
      margin-top: 11rem;
      padding-bottom: 3rem;
      font-size: 2.5rem;
      letter-spacing: 0.1rem;
      color: var(--desaturated-blue);
      text-align: center;
    }
  }

  @media (min-width: 900px) {
    width: 800px;
    height: 450px;
    flex-direction: row;
    align-items: start;

    .mobile-image {
      display: none;
    }

    .desktop-image {
      overflow: hidden;
      width: 400px;
      margin-top: -3rem;
      display: flex;
      flex-direction: column;
      position: relative;
      margin-right: 7rem;

      .woman {
        width: 125%;
        position: absolute;
        margin-top: 9rem;
        right: 0;
        z-index: 10;
      }

      .pattern {
        width: 275%;
        right: 0;
        margin-top: -21rem;
        position: absolute;
      }

      .box {
        width: 50%;
        z-index: 999;
        margin-top: 19rem;
        margin-left: -8.5rem;
        position: absolute;
      }
    }

    .faq {
      justify-content: center;
      height: 100%;
      width: 50%;

      .title {
        margin-top: 6rem;
        text-align: left;
      }
    }
  }
`;

const Container = () => {
  return (
    <StyledContainer>
      <div className="image mobile-image">
        <MobileImg />
      </div>
      <div className="image desktop-image">
        <img src={box} className="box" alt="box" />
        <img src={woman} className="woman" alt="a woman" />
        <img src={bgPattern} className="pattern" alt="background pattern" />
      </div>
      <div className="faq">
        <h1 className="title">FAQ</h1>
        {Dropdowns}
      </div>
    </StyledContainer>
  );
};

export default Container;
