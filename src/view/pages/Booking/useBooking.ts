import useDatabase, { TWashType } from "@application/useDatabase";
import useUsers from "@application/useUsers";
import useWaitlist from "@application/useWaitlist";
import { IUser } from "types/User";
import { IBookingProps } from "./Booking";

import { intervalToDuration } from "date-fns";

const useBooking = (): IBookingProps => {
  const {} = useWaitlist();
  const { selectedUser, setSelectedUser, users, createUser } = useUsers();
  const { machines, reserveMachine, cancelReservation, requestMachine } =
    useDatabase();

  const handleMachineReservationClick = (washType: TWashType) =>
    requestMachine({ user: selectedUser as IUser, washType });

  return {
    selectedUser,
    buttons: [
      {
        onClick: () => handleMachineReservationClick("cookWash"),
        children: "Cookwash",
      },
      {
        onClick: () => handleMachineReservationClick("fabricWash"),
        children: "Fabric wash",
      },
      {
        onClick: () => handleMachineReservationClick("handWash"),
        children: "Handwash",
      },
    ],
    UserSectionProps: {
      createUser,
      items: users.map((item) => ({
        title: item.firstName,
        subtitle: item.lastName,
        subtitle2: item.id,
        onClick: (e) => setSelectedUser(item),
        selected: selectedUser?.id === item?.id,
      })),
    },
    MachineSectionProps: {
      items: machines.map((item) => ({
        title: `Machine #${item?.id}`,
        onClick: (e, value: TWashType) =>
          reserveMachine({
            machineID: item?.id,
            user: selectedUser as IUser,
            washType: value,
          }),
        onClickCancel: () => cancelReservation(item?.id),
        isCorrectUser: item?.bookedByUser?.id === selectedUser?.id,
        status: Boolean(item?.bookedUntil) ? "busy" : "available",
        statusExplanation: Boolean(item?.bookedUntil)
          ? `Busy for the next ${
              intervalToDuration({
                start: new Date(),
                end: item.bookedUntil as Date,
              }).hours
            }:${
              intervalToDuration({
                start: new Date(),
                end: item.bookedUntil as Date,
              }).minutes
            }`
          : "",
      })),
    },
  };
};

export default useBooking;
