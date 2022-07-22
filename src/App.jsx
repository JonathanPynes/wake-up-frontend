import { useState } from 'react';
import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';
import CustomModal from './components/CustomModal';

export default function App() {
const [open, setOpen] = useState(false);
const closeModal = () => setOpen(false);

  return (
    <AppCss>
      <button type="button" onClick={() => setOpen(o => !o)}> Controlled Popup </button>
      <CustomModal open={open} closeModal={closeModal}> <span>This is a stuff </span></CustomModal>
    <h1>WakeUp!</h1>
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