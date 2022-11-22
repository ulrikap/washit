import Card, { ICardProps } from "@view/components/Card";
import ClickableCard, {
  IClickableCardProps,
} from "@view/components/ClickableCard";
import { IUser } from "models/User";
import styled from "styled-components";

const CardContainer = styled.section`
  display: flex;
  margin: 50px;
  max-width: 50vw;
  min-width: 700px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  gap: 10px;
`;

export interface IMachineSectionProps {
  items: ICardProps[];
}

const MachineSection = ({ items }: IMachineSectionProps) => {
  return (
    <>
      <h4>All Machines</h4>
      <CardContainer>
        {items.map((item) => (
          <Card {...item} />
        ))}
      </CardContainer>
    </>
  );
};

export default MachineSection;
