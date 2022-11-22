import ClickableCard, {
  IClickableCardProps,
} from "@view/components/ClickableCard";
import styled from "styled-components";

const CardContainer = styled.section`
  display: flex;
  margin: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  gap: 10px;
`;

export interface IUserSectionProps {
  createUser: () => void;
  items: IClickableCardProps[];
}

const UserSection = ({ createUser, items }: IUserSectionProps) => {
  return (
    <>
      <h4>All users</h4>
      <button onClick={createUser}>create user</button>
      <CardContainer>
        {items.map((item) => (
          <ClickableCard {...item} />
        ))}
      </CardContainer>
    </>
  );
};

export default UserSection;
