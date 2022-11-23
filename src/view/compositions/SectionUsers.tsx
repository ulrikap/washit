import ClickableCard, {
  ICardClickableProps,
} from "@view/components/CardClickable";
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

export interface ISectionUsersProps {
  createUser: () => void;
  items: ICardClickableProps[];
}

const SectionUsers = ({ createUser, items }: ISectionUsersProps) => {
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

export default SectionUsers;
