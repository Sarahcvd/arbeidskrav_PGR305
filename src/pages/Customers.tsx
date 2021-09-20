import { FC } from "react";
import { CustomersList } from "../components/work/CustomersList";

export const Customers: FC = () => {
  return (
    <section>
      <h1>Customers</h1>
      <CustomersList />
    </section>
  );
};
