import React, { FC, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ICustomer } from "../../interfaces/interfaces";
import { CustomersItem } from "./CustomersItem";

export const CustomersList: FC = () => {
  const [customers, setCustomers] = useState<Array<ICustomer>>([
    { name: "Angry miss fister", image: "customer1.jpg" },
    { name: "Boxman", image: "customer2.jpg" },
    { name: "Upset phonelady", image: "customer3.jpg" },
    { name: "Scissor wielding crazy woman", image: "customer4.jpg" },
    { name: "Cartweel queen", image: "customer5.jpg" },
  ]);
  // The filter() method creates an array filled with all array elements that pass a test (provided by a function).
  const handleRemoveItem = (name: string) => {
    setCustomers(customers.filter((item) => item.name !== name));
  };

  return (
    <Container>
      <Row>
        {customers.map((customer, key) => {
          return (
            <Col md={6} lg={4} xl={2} key={key}>
              <CustomersItem name={customer.name} image={customer.image} />
              <Button
                variant="danger"
                onClick={() => handleRemoveItem(customer.name)}
              >
                Kick out customer
              </Button>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
