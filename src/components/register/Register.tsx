import { useState } from 'react';
import VectorIcon from '../icons/VectorIcon';
import RegisterForm from './form/RegisterForm';
import './register.scss';
import LoginForm from './form/LoginForm';

const Register = () => {
  const [register, setRegister] = useState<boolean>(true);

  const handleRegisterClick = () => {
    setRegister((state) => !state);
  };

  return (
    <div className="register__screen">
      <div className="register__header">
        <VectorIcon />
        <h2 className="register__header--title">
          {register
            ? 'Välkommen till AirBean-familjen!'
            : 'Kärt återseende, AirBean-familjen!'}
        </h2>
        <p className="register__header--info">
          {register
            ? 'Genom att skapa ett konto nedan kan du spara och se din orderhistorik.'
            : 'Vad roligt att se dig igen, var vänlig logga in.'}
        </p>
      </div>
      {register ? <RegisterForm /> : <LoginForm />}
      <p className="already-member" onClick={handleRegisterClick}>
        {register
          ? 'Redan med i familjen? Klicka här för att logga in.'
          : 'Gå tillbaka till registering.'}
      </p>
    </div>
  );
};
export default Register;
