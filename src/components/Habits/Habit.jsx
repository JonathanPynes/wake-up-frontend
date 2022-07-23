import { useState } from 'react';
import styled from 'styled-components/macro';
import CustomModal from '../CustomModal';


const Habit = ({id}) => {

const [open, setOpen] = useState(false);
const closeModal = () => setOpen(false);

return (
    <>
    <button type="button" onClick={() => setOpen(o => !o)}> {id} </button>
      <CustomModal open={open} closeModal={closeModal}> <span>This is a stuff </span></CustomModal>
    </>
  );
}

export default Habit