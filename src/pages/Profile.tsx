import { useEffect } from 'react';
import ProfileAvatar from '../assets/profile-avatar.png';
import ProfileInfo from '../components/common/profile/ProfileInfo';
import OrderList from '../components/orders/OrderList';
import Register from '../components/register/Register';
import useUserStore from '../store/UserStore';
import { getTokenStatus } from '../api/user/userCalls';

const Profile = () => {
  const { user, validToken, setValidToken, clearUser } = useUserStore();
  const { username, email, token } = user;

  useEffect(() => {
    const checkValidToken = async () => {
      const response = await getTokenStatus(token as string);
      if (response) {
        console.log('validToken', validToken);
        setValidToken(true);
      } else {
        clearUser();
      }
      // console.log('validToken', validToken);
    };

    if (validToken) {
      checkValidToken();
    }
  }, []);

  return (
    <div className="profilepage page">
      {validToken ? (
        <>
          <ProfileInfo
            avatar={ProfileAvatar}
            name={username}
            info={email}
            size="lg"
            variant="secondary"
          />

          <OrderList />
        </>
      ) : (
        <Register />
      )}
    </div>
  );
};
export default Profile;
