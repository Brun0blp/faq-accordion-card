import GlobalStyles from "./styles/GlobalStyles";

// components
import Container from "./components/Container";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container></Container>
      <div className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/hyundonny">Hyun Don Moon</a>.
      </div>
    </>
  );
};

export default App;
