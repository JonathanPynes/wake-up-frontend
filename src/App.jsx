import { useState } from 'react';
import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';
import Habit from './components/Habits/Habit'

export default function App() {
  return (
    <AppCss>
    <h1>WakeUp!</h1>
    <Habit id={1}/>
    <Habit id={2}/>
    <Habit id={3}/>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/home">Home</Link>
    </AppCss>
  );
}


const AppCss = styled.div`
h1 {
  color: var(--primary-color);
}
`