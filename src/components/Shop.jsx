import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../../config';

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {},
    });
  }, []);

  return <main className="container content">SHOP</main>;
};
