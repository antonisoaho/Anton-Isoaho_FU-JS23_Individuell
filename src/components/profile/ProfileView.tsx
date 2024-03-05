import { useEffect } from 'react';
import { getTokenStatus } from '../../api/user/userCalls';
import useUserStore from '../../store/UserStore';
import ProfileAvatar from '../../assets/profile-avatar.png';
import OrderList from './orders/OrderList';
import RegisterView from './register/RegisterView';
import AvatarTemplate from '../common/avatar/AvatarTemplate';

const ProfileView = () => {
  const { user, validToken, setValidToken } = useUserStore();
  const { username, email, token } = user;

  useEffect(() => {
    const checkValidToken = async () => {
      const response = await getTokenStatus(token as string);
      setValidToken(response);
    };

    if (validToken) checkValidToken();
  }, []);

  return (
    <div className="profilepage page">
      {validToken ? (
        <>
          <AvatarTemplate
            avatar={ProfileAvatar}
            name={username}
            info={email}
            size="lg"
            variant="secondary"
          />

          <OrderList />
        </>
      ) : (
        <RegisterView />
      )}
    </div>
  );
};
export default ProfileView;
