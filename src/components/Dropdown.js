import styled from "styled-components";
import { useState } from "react";

const StyledDropdown = styled.div`
  .question {
  }

  .answer {
  }
`;

const Dropdown = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledDropdown>
      <p className="question">{question}</p>
      <p className="answer" open={open}>
        {answer}
      </p>
    </StyledDropdown>
  );
};

export default Dropdown;
