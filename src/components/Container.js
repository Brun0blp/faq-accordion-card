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

  width: 315px;

  border-radius: 2rem;
  background-color: var(--white);
  box-shadow: 0 2.25rem 2.25rem -1rem var(--darker-blue);

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
    padding-right: 2rem;
    padding-left: 2rem;

    .title {
      padding-bottom: 3rem;
      font-size: 2.5rem;
      letter-spacing: 0.1rem;
      color: var(--desaturated-blue);
      text-align: center;
    }
  }

  @media (min-width: 1000px) {
    width: 900px;
    height: 500px;
    flex-direction: row;
    align-items: start;

    .image {
      width: 50%;
      height: 100%;
    }

    .mobile-image {
      display: none;
    }

    .desktop-image {
      display: block;
      position: relative;
      display: flex;
      align-items: center;
    }

    .box-wrapper {
      position: absolute;
      z-index: 100;
      left: -7.75rem;
      top: 17rem;
    }

    .overflow-hidden {
      height: 500px;
      width: 100%;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
    }

    .woman {
      width: 100%;
      position: absolute;
      right: 6.5rem;
      z-index: 10;
    }

    .pattern {
      position: absolute;
      width: 220%;
      top: -25rem;
      right: 6.5rem;
      z-index: 1;
    }

    .faq {
      justify-content: center;
      height: 100%;
      width: 50%;
      padding: 0;

      .title {
        margin-top: 6rem;
        text-align: left;
      }
    }
  }
`;

const Container = () => {
  const [openIdx, setOpenIdx] = useState(1);
  const Dropdowns = faqs.map((faq, idx) => (
    <Dropdown
      question={faq.q}
      answer={faq.a}
      key={idx}
      idx={idx}
      openIdx={openIdx}
      setOpenIdx={setOpenIdx}
    />
  ));

  return (
    <StyledContainer onClick={() => setOpenIdx(null)}>
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
          <div className="box-wrapper">
            <img src={box} className="box" alt="box" />
          </div>
          <div className="overflow-hidden">
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
      </div>
      <div className="faq">
        <h1 className="title">FAQ</h1>
        {Dropdowns}
      </div>
    </StyledContainer>
  );
};

export default Container;
