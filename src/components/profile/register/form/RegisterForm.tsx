import React, { useState } from 'react';
import './form.scss';
import { loginUser, registerUser } from '../../../../api/user/userCalls';
import useUserStore from '../../../../store/UserStore';

interface ErrorState {
  name?: string;
  email?: string;
  password?: string;
  gdpr?: string;
}

interface State {
  name: string;
  email: string;
  password: string;
  gdpr: boolean;
  errors?: ErrorState;
}

const RegisterForm = () => {
  const { setUser, setValidToken } = useUserStore();
  const [state, setState] = useState<State>({
    name: '',
    email: '',
    password: '',
    gdpr: false,
    errors: {
      name: '',
      email: '',
      password: '',
      gdpr: '',
    },
  });

  const validateForm = (): boolean => {
    const { name, email, gdpr } = state;
    const errors: ErrorState = {};

    if (!name.trim()) {
      errors!.name = 'Vänligen fyll i namn';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors!.email = 'Vänligen ange en korrekt email';
    }

    if (!gdpr) {
      errors!.gdpr = 'Du måste acceptera vår GDPR';
    }

    setState((prevState) => ({ ...prevState, errors }));
    console.log('state.errors', state.errors);
    return Object.keys(errors!).length == 0;
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { id, type, checked, value } = e.currentTarget;
    const val = type === 'checkbox' ? checked : value;

    setState((prevState) => ({
      ...prevState,
      [id]: val,
    }));
  };

  const submitUser = async () => {
    const { name, password, email } = state;
    try {
      const response = await registerUser({
        username: name,
        password: password,
      });

      if (response) {
        const loginResponse = await loginUser({
          username: name,
          password: password,
        });

        if (loginResponse.success) {
          const { token } = loginResponse;
          setUser({ username: name, token, email });
          setValidToken(true);
        }
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (validateForm()) {
      submitUser();
    } else {
      console.log('Fel vid validering');
    }
  };

  const { errors } = state;

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <div className="inputsection">
        <p className="inputfield--label">Namn</p>
        <input
          onChange={onChange}
          value={state.name}
          type="text"
          id="name"
          autoComplete="name"
          className="inputfield--text"
        />
        {errors?.name && (
          <p className="error-message username">{errors.name}</p>
        )}
      </div>
      <div className="inputsection">
        <p className="inputfield--label">Epost</p>
        <input
          onChange={onChange}
          value={state.email}
          type="text"
          id="email"
          autoComplete="email"
          className="inputfield--text"
        />
        {errors?.email && <p className="error-message email">{errors.email}</p>}
      </div>
      <div className="inputsection">
        <p className="inputfield--label">Lösenord</p>
        <input
          onChange={onChange}
          value={state.password}
          autoComplete="current-password"
          type="password"
          id="password"
          className="inputfield--text"
        />
        {errors?.password && (
          <p className="error-message password">{errors.password}</p>
        )}
      </div>
      <div className="inputsection">
        <div className="inputfield--circle">
          <input
            onChange={onChange}
            checked={state.gdpr}
            type="checkbox"
            id="gdpr"
            className="inputfield--checkbox"
          />
          <label htmlFor="gdpr" className="round" id="circle" />
          <p className="inputfield--label">GDPR Ok!</p>
        </div>
        {errors?.gdpr && <p className="error-message gdpr">{errors.gdpr}</p>}
      </div>
      <button type="submit" className="register-submit">
        Brew me a cup!
      </button>
    </form>
  );
};

export default RegisterForm;
