import styled from "styled-components";
import PrimaryButton, {
  IButtonPrimaryProps,
} from "@view/components/ButtonPrimary";
import UserSection, {
  ISectionUsersProps,
} from "@view/compositions/SectionUsers";
import useBooking from "./useBooking";
import MachineSection, {
  ISectionMachinesProps,
} from "@view/compositions/SectionMachines";
import { IUser } from "@domain/types/User";

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
  UserSectionProps: ISectionUsersProps;
  MachineSectionProps: ISectionMachinesProps;
  buttons: IButtonPrimaryProps[];
  selectedUser: IUser | null;
  isUserSelected: boolean;
}

const Booking = () => {
  const {
    UserSectionProps,
    MachineSectionProps,
    buttons,
    selectedUser,
    isUserSelected,
  } = useBooking();

  return (
    <main>
      <StyledSection>
        <h1>Booking</h1>
        <UserSection {...UserSectionProps} />
        {!isUserSelected && <h4>Please select a user</h4>}
        {isUserSelected && (
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
