import styled from "styled-components";
import { useState } from "react";

import arrow from "../images/icon-arrow-down.svg";

const StyledDropdown = styled.div`
  .question {
    position: relative;
  }

  .question::after {
    content: ${arrow};
    position: absolute;
    right: 0;
  }

  .answer {
    display: ${(props) => (props.open ? "block" : "none")};
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
