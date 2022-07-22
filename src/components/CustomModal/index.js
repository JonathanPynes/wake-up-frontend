import React from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components/macro';

const CustomModal = ({children, open, closeModal}) => {
  
  return (
    <div>
      <StyledPopup open={open} closeOnDocumentClick onClose={closeModal}>
        <StyledModal>
          <StyledCloseButton onClick={closeModal}>
            &times;
          </StyledCloseButton>
         {children}
        </StyledModal>
      </StyledPopup>
    </div>
  );
};

export default CustomModal

// export default function App() {
//   const [open, setOpen] = useState(false);
//   const closeModal = () => setOpen(false);
  
//     return (
//       <div>
//         <button type="button" onClick={() => setOpen(o => !o)}> Controlled Popup </button>
//         <CustomModal open={open} closeModal={closeModal}> <span>This is a stuff </span></CustomModal>

const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
  // use your custom style for ".popup-content"
  &-content {
    margin: auto 20%;
    width: 50%;
    background-color: var(--white-color);
    border-color: var(--primary-color);
    color: var(--black-color);
    padding: 8px 12px;
    border-radius: 4px;
    @media (max-width: 700px) {
      width: 100%;
    }
    svg {
      color: var(--primary-color);
      stroke: var(--primary-color);
    }
  }
`

const StyledModal = styled.div`
  font-size: 12px;
  margin: auto 20%;
`

const StyledCloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: -10px;
  top: -10px;
  font-size: 24px;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #cfcece;
`
