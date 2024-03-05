import AirBeanWelcome from '../../../assets/airbean-welcome.png';
import { useNavigate } from 'react-router-dom';
import './welcome.scss';

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <img
      src={AirBeanWelcome}
      alt="välkommen"
      className="welcome"
      onClick={() => navigate('/menu')}
    />
  );
};
export default Welcome;
