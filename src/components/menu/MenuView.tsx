import { useEffect, useState } from 'react';
import { getMenuList } from '../../api/beans/beanCalls';
import MenuItem from './MenuItem';
import Spinner from '../icons/Spinner';

interface MenuItemProps {
  id: string;
  title: string;
  desc: string;
  price: number;
}

const MenuView = () => {
  const [menuItems, setMenuItems] = useState<Array<MenuItemProps>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const data = await getMenuList();
        setMenuItems(data);
        setIsLoading(false);
      } catch (error) {}
    };

    fetchMenuItems();
  }, []);

  return (
    <>
      <div className="menulist">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <h1 className="menulist__header">Meny</h1>
            {menuItems &&
              menuItems.map((item) => <MenuItem key={item.id} {...item} />)}
          </>
        )}
      </div>
    </>
  );
};
export default MenuView;
