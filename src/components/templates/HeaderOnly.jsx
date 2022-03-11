import { Header } from "../layout/Header";

export const HederOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
