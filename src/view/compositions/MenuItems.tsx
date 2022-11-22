import MenuItem, { IMenuItemProps } from "@view/components/MenuItem";
import styled from "styled-components";

const StyledListWrapper = styled.ul`
  display: flex;
  list-style: none;
  gap: 5rem;
  justify-self: center;
`;

export interface IMenuItemsProps {
  items: IMenuItemProps[];
}

const MenuItems = ({ items }: IMenuItemsProps) => {
  return (
    <StyledListWrapper>
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </StyledListWrapper>
  );
};

export default MenuItems;
