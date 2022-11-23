import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  outline: none;
  background-color: purple;
  padding: 1rem 2rem 1rem 2rem;
  position: relative;
  border-radius: 8px;
  letter-spacing: 0.7px;
  background-color: #5086bd;
  color: #fff;
  font-size: 15px;
  font-family: "Lato", sans-serif;
  cursor: pointer;
  box-shadow: rgba(0, 9, 61, 0.2) 0px 4px 8px 0px;
  transition: 0.2s ease-in-out;

  :active {
    transform: translateY(-10px);
  }

  :hover {
    transform: translateY(-5px);
  }
`;

export interface IButtonPrimaryProps {
  onClick?: (e: React.MouseEvent<unknown>) => void;
  children?: React.ReactNode;
}

const ButtonPrimary = (props: IButtonPrimaryProps) => {
  return <StyledButton {...props} />;
};

export default ButtonPrimary;
