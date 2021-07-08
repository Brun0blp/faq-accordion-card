import styled from "styled-components";
import { useState } from "react";

import arrow from "../images/icon-arrow-down.svg";

const StyledDropdown = styled.div`
  border-bottom: 1px solid var(--light-grayish-blue);
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  user-select: none;

  &:last-of-type {
    margin-bottom: 4rem;
  }

  .question {
    position: relative;
    font-size: 1.1rem;
    font-weight: ${(props) => (props.open ? "700" : "400")};
    color: ${(props) =>
      props.open ? "var(--desaturated-blue)" : "var(--dark-grayish-blue)"};
    cursor: pointer;
  }

  .question:hover {
    color: ${(props) =>
      props.open ? "var(--desaturated-blue)" : "var(--soft-red)"};
  }

  .question::after {
    ${(props) => props.open && "transform: rotate(180deg);"};
    transition: all 0.3s ease-in;
    content: url(${arrow});
    position: absolute;
    right: 0;
  }

  .answer {
    display: ${(props) => (props.open ? "block" : "none")};
    overflow-wrap: break-word;
    padding-top: 1rem;
    padding-right: 1.25rem;
    color: var(--dark-grayish-blue);
    line-height: 1.5;
  }

  @media (min-width: 900px) {
    max-width: 320px;
  }
`;

const Dropdown = ({ question, answer, idx }) => {
  const handleClick = (e) => {
    console.dir(e.target);
  };
  return (
    <StyledDropdown open={false} idx={idx} onClick={handleClick}>
      <p className="question">{question}</p>
      <p className="answer">{answer}</p>
    </StyledDropdown>
  );
};

export default Dropdown;
