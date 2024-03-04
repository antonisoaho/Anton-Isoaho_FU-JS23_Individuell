import React, { useState } from 'react';
import './form.scss';
import { loginUser } from '../../../api/user/userCalls';
import useUserStore from '../../../store/UserStore';

const LoginForm = () => {
  const { setUsername, setToken, setEmail, setValidToken } = useUserStore();
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
  });

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { id, type, checked, value } = e.currentTarget;
    const val = type === 'checkbox' ? checked : value;

    setState({
      ...state,
      [id]: val,
    });
  };

  const submitUser = async () => {
    const { name, email } = state;
    const response = await loginUser({
      username: name,
      password: 'password',
    });

    if (response.success) {
      const token = response.token;
      setUsername(name);
      setToken(token);
      setEmail(email);
      setValidToken(true);
    } else {
      setState((prevState) => ({
        ...prevState,
        error: 'Fel användarnamn eller lösenord',
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    submitUser();
  };

  const { error } = state;

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <div className="inputsection">
        <p className="inputfield--label">Email</p>
        <input
          onChange={onChange}
          value={state.email}
          type="text"
          id="email"
          className="inputfield--text"
        />
      </div>
      <div className="inputsection">
        <p className="inputfield--label">Namn</p>
        <input
          onChange={onChange}
          value={state.name}
          type="text"
          id="name"
          className="inputfield--text"
        />
      </div>
      <div className="inputsection">
        <p className="inputfield--label">Epost</p>
        <input
          onChange={onChange}
          value={state.password}
          type="password"
          id="password"
          className="inputfield--text"
        />
      </div>
      {error && <p className="error-message">{error}</p>}

      <button type="submit" className="register-submit">
        Brew me a cup!
      </button>
    </form>
  );
};

export default LoginForm;
