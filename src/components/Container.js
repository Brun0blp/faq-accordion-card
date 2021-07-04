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
  border-radius: 1rem;
  width: 100%;
  width: 330px;
  min-width: 330px;
  min-height: 500px;
  align-items: center;
  position: relative;
  padding: 0 3rem;
  padding-bottom: 4.5rem;

  .title {
    padding-top: 11rem;
    padding-bottom: 1.25rem;
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
    color: var(--desaturated-blue);
    text-align: center;
  }

  .faq {
    width: 100%;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    max-width: 800px;
  }
`;

const Container = () => {
  return (
    <StyledContainer>
      <MobileImg />
      <div className="faq">
        <h1 className="title">FAQ</h1>
        {Dropdowns}
      </div>
    </StyledContainer>
  );
};

export default Container;
