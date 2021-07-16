import React from 'react';

export const GoodsItem = (props) => {
  const { id, name, description, price, full_background } = props; // деструктурирую
  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn">Купить</button>
        <span className="price right">{price}</span>
      </div>
    </div>
  );
};
