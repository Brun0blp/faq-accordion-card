import styled from "styled-components";

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

const Container = ({ children }) => {
  return (
    <StyledContainer>
      <h1 className="title">FAQ</h1>
      {children}
    </StyledContainer>
  );
};

export default Container;
