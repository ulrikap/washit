import { IHeaderProps } from "@view/compositions/Header";
import logo from "@assets/logo.png";

const headerProps = (): IHeaderProps => ({
  HeadlineProps: {
    title: "WashIT",
    logo,
  },
  MenuItemsProps: {
    items: [
      { to: "/overview", children: "Overview" },
      { to: "/booking", children: "Booking" },
    ],
  },
});

export default headerProps;
