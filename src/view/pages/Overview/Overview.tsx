import Header, { IHeaderProps } from "@view/compositions/Header";
import useOverview from "./useOverview";

export interface IOverviewProps {
  HeaderProps: IHeaderProps;
}

const Overview = () => {
  const { HeaderProps } = useOverview();

  return (
    <main>
      <Header {...HeaderProps} />
      <section>
        <p>This is the first section</p>
      </section>
    </main>
  );
};

export default Overview;
