import React, { useContext } from 'react';
import { ShopContext } from './contest.js';

export const BasketItem = (props) => {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  const { example } = useContext(ShopContext);
  console.log(example);

  return (
    <li className="collection-item  ">
      {name}{' '}
      <li
        className="material-icons basket-quantity"
        onClick={() => decQuantity(id)}
      >
        remove
      </li>{' '}
      x{quantity}
      <li
        className="material-icons basket-quantity"
        onClick={() => incQuantity(id)}
      >
        add
      </li>{' '}
      = {price * quantity} руб.
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
};
