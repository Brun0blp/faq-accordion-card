import styled from "styled-components";
import { useState } from "react";

import arrow from "../images/icon-arrow-down.svg";

const StyledDropdown = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--light-grayish-blue);
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;

  .question {
    position: relative;
    font-weight: ${(props) => (props.open ? "700" : "400")};
    color: ${(props) =>
      props.open ? "var(--desaturated-blue)" : "var(--very-dark-grayish-blue)"};
  }

  .question::after {
    ${(props) => props.open && "transform: rotate(180deg);"};
    transition: all 0.25s ease-in;
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
  }
`;

const Dropdown = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <StyledDropdown open={open}>
      <p className="question" onClick={handleClick}>
        {question}
      </p>
      <p className="answer">{answer}</p>
    </StyledDropdown>
  );
};

export default Dropdown;
