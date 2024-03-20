import React, { useContext, useState } from 'react';
import { BankContext } from './context';

function CreateAccount() {
  const { addAccount } = useContext(BankContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [show, setShow] = useState(true);

  const handleCreate = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!name || !email || !password) {
      setStatus('Please fill in all fields');
      return;
    }

    // Call addAccount from context
    addAccount({ name, email, password });
    
    setStatus('Account created successfully');
    setShow(false);
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setStatus('');
    setShow(true);
  };

  return (
    <div className="container mt-5">
      <h2>Create Account</h2>
      {show ? (
        <form onSubmit={handleCreate}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Create Account</button>
        </form>
      ) : (
        <div>
          <h5>Success</h5>
          <button type="button" className="btn btn-primary" onClick={clearForm}>Add another account</button>
        </div>
      )}
      {status && <div className="mt-3">{status}</div>}
    </div>
  );
}

export default CreateAccount;
