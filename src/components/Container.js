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

  @media (min-width: 900px) {
    flex-direction: row;
    max-width: 800px;
  }
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
