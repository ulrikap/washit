import styled from "styled-components";
import PrimaryButton, {
  IPrimaryButtonProps,
} from "@view/components/PrimaryButton";
import UserSection, { IUserSectionProps } from "@view/compositions/UserSection";
import useBooking from "./useBooking";
import MachineSection, {
  IMachineSectionProps,
} from "@view/compositions/MachineSection";

const StyledSection = styled.section`
  width: "100%";
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 50px;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.section`
  display: flex;
  gap: 20px;
`;

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

export interface IBookingProps {
  UserSectionProps: IUserSectionProps;
  MachineSectionProps: IMachineSectionProps;
  buttons: IPrimaryButtonProps[];
}

const Booking = () => {
  const { UserSectionProps, MachineSectionProps, buttons } = useBooking();
  return (
    <main>
      <StyledSection>
        <h1>Booking</h1>
        <UserSection {...UserSectionProps} />
        <ButtonContainer>
          {buttons.map((item) => (
            <PrimaryButton {...item} />
          ))}
        </ButtonContainer>
        <MachineSection {...MachineSectionProps} />
      </StyledSection>
    </main>
  );
};

export default Booking;
