import Header, { IHeaderProps } from "@view/compositions/Header";
import useBooking from "./useBooking";

export interface IBookingProps {
  HeaderProps: IHeaderProps;
}

const Booking = () => {
  const {  } = useBooking();

  return (
    <main>
      <section>This is the first section</section>
    </main>
  );
};

export default Booking;
