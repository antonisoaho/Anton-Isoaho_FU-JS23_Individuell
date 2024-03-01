import { useEffect, useState } from 'react';
import { getMenuList } from '../../api/beans/beanCalls';
import { BeanModel } from '../../api/beans/models/BeanModel';
import MenuItem from './MenuItem';

const MenuView = () => {
  const [menuItems, setMenuItems] = useState<Array<BeanModel>>([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const data = await getMenuList();
        setMenuItems(data);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <>
      <div className="menulist">
        <h1 className="menulist__header">Meny</h1>
        {menuItems &&
          menuItems.map((item) => <MenuItem key={item.id} {...item} />)}
      </div>
    </>
  );
};
export default MenuView;
