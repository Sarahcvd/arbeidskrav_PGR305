import { FC } from "react";
import { ICustomer } from "../../interfaces/interfaces";

export const CustomersItem: FC<ICustomer> = ({ name, image }) => {
  return (
    <article>
      <h3>{name}</h3>
      <img
        src={require(`../../assets/images/${image}`).default}
        alt={name}
        width="200px"
      />
    </article>
  );
};
