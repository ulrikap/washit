import Headline from "@view/components/Headline";
import type { IHeadlineProps } from "@view/components/Headline";
import styled from "styled-components";
import MenuItems from "./MenuItems";
import type { IMenuItemsProps } from "./MenuItems";

const StyledHeader = styled.header`
  width: "100%";
  min-height: 150px;
  display: grid;
  grid-template-columns: 6fr 4fr;
`;

export interface IHeaderProps {
  HeadlineProps: IHeadlineProps;
  MenuItemsProps: IMenuItemsProps;
}

const Header = ({ HeadlineProps, MenuItemsProps }: IHeaderProps) => {
  return (
    <StyledHeader>
      <Headline {...HeadlineProps} />
      <MenuItems {...MenuItemsProps} />
    </StyledHeader>
  );
};

export default Header;
