import mobileImg from "../images/illustration-woman-online-mobile.svg";
import mobilePattern from "../images/bg-pattern-mobile.svg";

const MobileImg = () => {
  return (
    <>
      <img src={mobileImg} alt="Woman looking at a screen" className="woman" />
      <img src={mobilePattern} alt="shadow" className="pattern" />
    </>
  );
};

export default MobileImg;
