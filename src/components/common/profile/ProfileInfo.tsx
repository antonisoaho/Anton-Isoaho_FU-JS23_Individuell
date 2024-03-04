import './profileInfo.scss';

interface ProfileInfoProps {
  avatar: string;
  name: string;
  info: string;
  size: 'sm' | 'lg';
  variant: 'primary' | 'secondary';
  onClick?: () => void;
}

const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {
  return (
    <div className={`profileinfo ${props.size}`}>
      <img className="profile__img" src={props.avatar} alt="" />
      <h2 className={`profile__name ${props.variant}`}>{props.name}</h2>
      <p className={`profile__info ${props.variant}`}>{props.info}</p>
    </div>
  );
};
export default ProfileInfo;
