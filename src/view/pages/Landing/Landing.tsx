import styled from "styled-components";
import { HEADER_HEIGHT } from "@view/compositions/Header";

export interface IOverviewProps {}

const StyledSection = styled.section`
  height: calc(100vh - ${HEADER_HEIGHT}px);
  width: "100%";
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

const Overview = () => {
  return (
    <main>
      <StyledSection>
        <p>This is where I would put the landing page, if I had one :)</p>
      </StyledSection>
    </main>
  );
};

export default Overview;
