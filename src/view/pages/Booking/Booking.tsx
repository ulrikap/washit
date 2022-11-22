import styled from "styled-components";
import PrimaryButton, {
  IPrimaryButtonProps,
} from "@view/components/PrimaryButton";
import UserSection, { IUserSectionProps } from "@view/compositions/UserSection";
import useBooking from "./useBooking";
import MachineSection, {
  IMachineSectionProps,
} from "@view/compositions/MachineSection";
import { IUser } from "types/User";

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

export interface IBookingProps {
  UserSectionProps: IUserSectionProps;
  MachineSectionProps: IMachineSectionProps;
  buttons: IPrimaryButtonProps[];
  selectedUser: IUser | null;
}

const Booking = () => {
  const { UserSectionProps, MachineSectionProps, buttons, selectedUser } =
    useBooking();
  return (
    <main>
      <StyledSection>
        <h1>Booking</h1>
        <UserSection {...UserSectionProps} />
        {!Boolean(Object.keys(selectedUser ?? {}).length) && (
          <h4>Please select a user</h4>
        )}
        {Boolean(Object.keys(selectedUser ?? {}).length) && (
          <>
            <ButtonContainer>
              {buttons.map((item) => (
                <PrimaryButton {...item} />
              ))}
            </ButtonContainer>
            <MachineSection {...MachineSectionProps} />
          </>
        )}
      </StyledSection>
    </main>
  );
};

export default Booking;
