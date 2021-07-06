import styled from "styled-components";

import MobileImg from "./MobileImg";
import Dropdown from "./Dropdown";
import { faqs } from "../faqs";

const Dropdowns = faqs.map((faq) => (
  <Dropdown question={faq.q} answer={faq.a} />
));

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--off-white);
  border-radius: 2rem;
  width: 330px;
  min-width: 300px;
  align-items: center;
  position: relative;
  padding-right: 2rem;
  padding-left: 2rem;
  box-shadow: 0 2.25rem 2.25rem -1rem var(--darker-blue);

  .image {
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

  .faq {
    width: 100%;

    .title {
      padding-top: 11rem;
      padding-bottom: 3rem;
      font-size: 2.5rem;
      letter-spacing: 0.1rem;
      color: var(--desaturated-blue);
      text-align: center;
    }
  }

  @media (min-width: 900px) {
    width: 800px;
  }
`;

const Container = () => {
  return (
    <StyledContainer>
      <div className="image">
        <MobileImg />
      </div>
      <div className="faq">
        <h1 className="title">FAQ</h1>
        {Dropdowns}
      </div>
    </StyledContainer>
  );
};

export default Container;
