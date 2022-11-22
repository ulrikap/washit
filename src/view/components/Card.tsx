import { TWashType } from "@application/useDatabase";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";

const StyledCard = styled.div`
  width: 500px;
  justify-self: center;
  align-self: center;
  background-color: #f09d51;
  border-radius: 25px;

  h2 {
    font-size: 30px;
  }
`;

const AvailableStatusText = styled.p`
  color: green;
`;
const UnavailableStatusText = styled.p`
  color: red;
`;

const ButtonRow = styled.ul`
  display: flex;
  gap: 5px;
  flex-direction: row;
`;

export interface ICardProps {
  title: string;
  status: "available" | "busy";
  statusExplanation: string;
  onClick: (e: React.MouseEvent<unknown>, value: TWashType) => void;
  onClickCancel: (e: React.MouseEvent<unknown>) => void;
  isCorrectUser: boolean;
}

const Card = ({
  title,
  status,
  statusExplanation,
  onClick,
  onClickCancel,
  isCorrectUser,
}: ICardProps) => {
  return (
    <StyledCard>
      <h2>{title}</h2>
      {status === "available" && <AvailableStatusText children={status} />}
      {status === "busy" && <UnavailableStatusText children={status} />}
      <p>{statusExplanation}</p>
      {status !== "busy" && (
        <ButtonRow>
          <PrimaryButton onClick={(e) => onClick(e, "cookWash")}>
            Cookwash
          </PrimaryButton>
          <PrimaryButton onClick={(e) => onClick(e, "fabricWash")}>
            Fabric wash
          </PrimaryButton>
          <PrimaryButton onClick={(e) => onClick(e, "handWash")}>
            Handwash
          </PrimaryButton>
        </ButtonRow>
      )}
      {status === "busy" && isCorrectUser && (
        <PrimaryButton onClick={onClickCancel}>Cancel</PrimaryButton>
      )}
    </StyledCard>
  );
};

export default Card;
