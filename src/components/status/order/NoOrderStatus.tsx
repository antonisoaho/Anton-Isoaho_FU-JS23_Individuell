import { useNavigate } from 'react-router-dom';
import CoffeMug from '../../icons/CoffeMug';
import './orderStatus.scss';

const NoOrderStatus = () => {
  const navigate = useNavigate();
  return (
    <div className="orderstatus__container">
      <div className="orderstatus__row">
        <p className="orderstatus--ordernumber bold">Här var det visst tomt!</p>
      </div>
      <div className="dronecontainer">
        <CoffeMug />
      </div>
      <div className="orderstatus__row">
        <h2 className="orderstatus--header">
          Gå till vår meny och lägg en order!
        </h2>
      </div>
      <div className="orderstatus__row">
        <button
          className="orderstatus--button menu"
          onClick={() => navigate('/menu')}>
          Ta mig dit!
        </button>
      </div>
    </div>
  );
};
export default NoOrderStatus;
