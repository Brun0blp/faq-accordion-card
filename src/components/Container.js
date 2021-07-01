import styled from "styled-components";

import MobileImg from "./MobileImg";
import Dropdown from "./Dropdown";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--off-white);
  border-radius: 1rem;
  width: 100%;
  min-width: 330px;
  max-width: 345px;
  min-height: 500px;
  align-items: center;
  position: relative;

  .title {
    padding-top: 11rem;
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
    color: var(--desaturated-blue);
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
        <Dropdown question={"Hello?"} answer={"Yes?"} />
      </div>
    </StyledContainer>
  );
};

export default Container;
