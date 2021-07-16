import React from 'react';

export const BasketItem = (props) => {
  const { id, name, price, quantity } = props;
  return (
    <li className="collection-item  ">
      {name} x{quantity} = {price}
      <span className="secondary-content">
        <i className="material-icons">close</i>
      </span>
    </li>
  );
};
