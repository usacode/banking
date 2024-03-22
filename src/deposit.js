import React, { useContext, useState, useEffect } from 'react';
import { BankContext } from './context';
import { Card, Form, Button, Alert, Col } from 'react-bootstrap';

function Deposit() {
  const { currentUser, updateBalance } = useContext(BankContext);
  const [depositAmount, setDepositAmount] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Update balance when currentUser changes
    if (currentUser) {
      console.log('Current user:', currentUser);
    }
  }, [currentUser]);

  const handleDeposit = (e) => {
    e.preventDefault();

    if (!currentUser) {
      setError('No user logged in');
      return;
    }

    if (
      !depositAmount.trim() ||
      isNaN(depositAmount) ||
      parseFloat(depositAmount) <= 0
    ) {
      setError('Please enter a valid deposit amount');
      return;
    }

    const parsedDepositAmount = parseFloat(depositAmount);

    // Update balance for current user
    updateBalance(currentUser.email, parsedDepositAmount);

    // Clear input and error
    setDepositAmount('');
    setError('');
  };

  // Check if all fields are blank
  const isDisabled = !depositAmount;

  return (
    <div className="container mt-5">
      <p>
        Logged in as: {currentUser ? currentUser.email : 'No user logged in'}
      </p>
      <h2>Deposit</h2>
      <Col xs={12} sm={8} md={6} lg={4}>
        <Card className="bg-custom">
          <Card.Body>
            <Card.Text>
              Balance: {currentUser ? currentUser.balance : 'N/A'}
            </Card.Text>
            <Form onSubmit={handleDeposit}>
              <Form.Group controlId="formDepositAmount">
                <Form.Label>Deposit Amount</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter deposit amount"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                />
              </Form.Group>
              {error && (
                <Alert variant="danger" className="mt-3">
                  {error}
                </Alert>
              )}
              <Button
                variant="primary"
                type="submit"
                className="mt-3"
                disabled={isDisabled}
              >
                Deposit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
export default Deposit;
