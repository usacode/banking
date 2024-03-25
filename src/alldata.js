import React, { useContext } from 'react';
import { BankContext } from './context';
import { Card, Col, CardFooter } from 'react-bootstrap';

const AllData = () => {
  const { accounts } = useContext(BankContext);

  return (
    <div className=" container mt-5">
      <h2>All Data</h2>
      {accounts.map((account, index) => (
        <Col xs={12} sm={8} md={6} lg={4} key={index} className="mt-3">
          <Card className="bg-custom">
            <Card.Body>
              <Card.Text>{account.name}</Card.Text>
              <Card.Text>{account.email}</Card.Text>
              <Card.Text>Password: {account.password}</Card.Text>
            </Card.Body>
            <CardFooter> Balance: ${account.balance} </CardFooter>
          </Card>
        </Col>
      ))}
    </div>
  );
};

export default AllData;
