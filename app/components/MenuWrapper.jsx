import React from 'react';
import { Menu } from '@progress/kendo-react-layout';
import items from '../data/items.json';

const MenuWrapper = ({isMediumPlus}) => {
  return (
    <div className="navbar">
      <Menu
        items={items}
        vertical={isMediumPlus}
        style={{ display: 'inline-block' }}
      />
    </div>
  );
}

export default MenuWrapper;