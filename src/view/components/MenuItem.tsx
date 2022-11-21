import { Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import styled from "styled-components";

const StyledListElement = styled.li`
  align-self: center;
  padding: 10px;
  border-radius: 25px;
  a {
    font-size: 25px;
    text-decoration: none;
  }
`;

export interface IMenuItemProps extends LinkProps {
  children: string;
  selected?: boolean;
}

const MenuItem = (props: IMenuItemProps) => (
  <StyledListElement>
    <Link {...props} children={props.children} />
  </StyledListElement>
);

export default MenuItem;
