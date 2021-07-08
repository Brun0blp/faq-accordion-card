import { useState } from "react";
import styled from "styled-components";

import Dropdown from "./Dropdown";
import { faqs } from "../faqs";

// desktop image
import desktopPattern from "../images/bg-pattern-desktop.svg";
import box from "../images/illustration-box-desktop.svg";
import desktopWoman from "../images/illustration-woman-online-desktop.svg";

// mobile image
import mobileWoman from "../images/illustration-woman-online-mobile.svg";
import mobilePattern from "../images/bg-pattern-mobile.svg";

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 330px;
  margin-top: 12rem;
  padding-right: 2rem;
  padding-left: 2rem;

  border-radius: 2rem;
  background-color: var(--off-white);
  box-shadow: 0 2.25rem 2.25rem -1rem var(--darker-blue);

  .title {
    color: var(--desaturated-blue);
  }

  .image {
    width: 240px;
    height: 12rem;
    position: relative;
  }

  .mobile-image {
    .woman {
      position: absolute;
      top: -9rem;
      right: 0;
    }

    .pattern {
      position: absolute;
      top: -1rem;
      right: 0;
    }
  }

  .desktop-image {
    display: none;
  }

  .faq {
    width: 100%;

    .title {
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
  const Dropdowns = faqs.map((faq, idx) => (
    <Dropdown question={faq.q} answer={faq.a} key={idx} idx={idx} />
  ));

  return (
    <StyledContainer>
      <div className="image">
        <div className="mobile-image">
          <img
            src={mobileWoman}
            alt="Woman looking at a screen"
            className="woman"
          />
          <img
            src={mobilePattern}
            alt="background pattern"
            className="pattern"
          />
        </div>
        <div className="desktop-image">
          <img src={box} className="box" alt="box" />
          <img
            src={desktopWoman}
            className="woman"
            alt="Woman looking at a screen"
          />
          <img
            src={desktopPattern}
            className="pattern"
            alt="background pattern"
          />
        </div>
      </div>
      <div className="faq">
        <h1 className="title">FAQ</h1>
        {Dropdowns}
      </div>
    </StyledContainer>
  );
};

export default Container;
