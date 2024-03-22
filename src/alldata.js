import React, { useContext } from 'react';
import { BankContext } from './context';
import { Table } from 'react-bootstrap';

const AllData = () => {
  const { accounts } = useContext(BankContext);

  return (
    <div className=" container mt-5">
      <h2>All Data</h2>

      <Table striped hover className="custom-table table-responsive">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={index}>
              <td>{account.name}</td>
              <td>{account.email}</td>
              <td>{account.password}</td>
              <td>{account.balance}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllData;
