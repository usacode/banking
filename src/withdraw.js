import React, { useContext, useState } from 'react';
import { BankContext } from './context';
import { Card, Form, Button, Alert, Col } from 'react-bootstrap';

function Withdraw() {
  const { currentUser, updateBalance } = useContext(BankContext);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [error, setError] = useState('');

  const handleWithdraw = (e) => {
    e.preventDefault();

    if (!currentUser) {
      setError('No user logged in');
      return;
    }

    if (
      !withdrawAmount.trim() ||
      isNaN(withdrawAmount) ||
      parseFloat(withdrawAmount) <= 0
    ) {
      setError('Please enter a valid withdraw amount');
      return;
    }

    const parsedWithdrawAmount = parseFloat(withdrawAmount);

    if (parsedWithdrawAmount > currentUser.balance) {
      setError('Insufficient funds');
      return;
    }

    // Update balance
    updateBalance(currentUser.email, -parsedWithdrawAmount);

    // Clear input and error
    setWithdrawAmount('');
    setError('');
  };

  return (
    <div className="container mt-5">
      <p>
        Logged in as: {currentUser ? currentUser.email : 'No user logged in'}
      </p>
      <h2>Withdraw</h2>
      <Col xs={12} sm={8} md={6} lg={4}>
        <Card className="bg-custom">
          <Card.Body>
            <Card.Text>
              Balance: {currentUser ? currentUser.balance : 'N/A'}
            </Card.Text>
            <Form onSubmit={handleWithdraw}>
              <Form.Group controlId="formWithdrawAmount">
                <Form.Label>Withdraw Amount</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter withdraw amount"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                />
              </Form.Group>
              {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
              <Button variant="primary" type="submit" className="mt-3">
                Withdraw
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default Withdraw;
