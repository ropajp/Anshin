import React, {useState} from 'react';
import styled from 'styled-components';
import DropDownMenu from '../../molecules/DropDownMenu/index';

const StyledBurger = styled.div`
  width: 2rem;
  height: 1.5rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display:none;

  @media (max-width: 375px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 1.5rem;
    height: .1rem;
    background-color: ${({open}) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};      
    }

    &:nth-child(2) {
      transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({open}) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={()=>setOpen(!open)}>
          <div />
          <div />
          <div />
      </StyledBurger>
      <DropDownMenu open={open}/>
    </> 
  );
};

export default HamburgerMenu;