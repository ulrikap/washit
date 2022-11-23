import styled from "styled-components";

const StyledCard = styled.div`
  background-color: #f06543;
  border-radius: 25px;
  min-width: 100px;
  cursor: pointer;

  h2 {
    font-size: 50px;
  }

  h3 {
    font-size: 40px;
  }

  p {
    font-size: 20px;
    padding: 10px;
  }
`;

export interface ICardClickableProps {
  title: string;
  subtitle: string;
  subtitle2: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  selected: boolean;
}

const CardClickable = ({
  title,
  subtitle,
  subtitle2,
  onClick,
  selected,
}: ICardClickableProps) => {
  return (
    <StyledCard
      onClick={onClick}
      style={{ border: selected ? "solid 2px black" : "" }}
    >
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{subtitle2}</p>
    </StyledCard>
  );
};

export default CardClickable;
