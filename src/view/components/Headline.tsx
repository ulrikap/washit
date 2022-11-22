import styled from "styled-components";

const StyledHeadline = styled.h1`
  font-family: CodeNextBold;
  font-size: 5em;
  margin-left: 50px;
  user-select: none;
`;

const StyledWrapper = styled.div`
  align-self: center;
  justify-self: left;
  display: flex;
  gap: 15px;
  img {
    max-width: 200px;
  }
`;

export interface IHeadlineProps {
  title: string;
  logo: string;
}

const Headline = ({ title, logo }: IHeadlineProps) => {
  return (
    <StyledWrapper>
      <StyledHeadline children={title} />
      <img src={logo} />
    </StyledWrapper>
  );
};

export default Headline;
