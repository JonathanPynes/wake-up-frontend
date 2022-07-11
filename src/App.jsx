import Logo from "./LoadingAnimation"
import './App.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function App() {
  return (
    <AppCss>
    <h1>WakeUp!</h1>
    <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/home">Home</Link>
      </nav>
    </AppCss>
  );
}


const AppCss = styled.div`
background-color: grey;
`