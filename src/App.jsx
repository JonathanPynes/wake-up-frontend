import Logo from "./Logo"
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <AppCss>
      <header className="App-header">
        <p>
          Sun animation to correspond to time.
        </p>
   
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          We are going to build a morning habits 
        </a>
              <Logo />
      </header>
    </AppCss>
  );
}

export default App;

const AppCss = styled.div`
background-color: grey;
`