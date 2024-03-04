import { ButtonHTMLAttributes } from 'react';
import './circularButton.scss';

interface CircularButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  size: string;
}

const CircularButton: React.FC<CircularButtonProps> = ({
  children,
  onClick,
  color,
  size,
}) => {
  return (
    <button className={`circularButton ${color} ${size}`} onClick={onClick}>
      {children}
    </button>
  );
};
export default CircularButton;
