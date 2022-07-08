import Logo from "./Logo"
import './App.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function App() {
  return (
    <AppCss>
    <h1>We Love Tits</h1>
    <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </AppCss>
  );
}


const AppCss = styled.div`
background-color: grey;
`