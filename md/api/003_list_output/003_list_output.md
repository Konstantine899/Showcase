# Вывод списка товаров

Создам список товара с которым мы будем в дальнейшем работать. Нам для этого понадобятся хука. В рамках этого приложения мы все будем делать на хуках.

Для начало импортирую в компонент Shop хуки useState, useEffect.

```jsx
import React, { useState, useEffect } from 'react';

export const Shop = () => {
  return <main className="container content">SHOP</main>;
};
```

Далее указываю список товаров goods и функцию обновления этих товаров setGoods. Беру их из useState который изначально у нас будет пустым массивом.

```jsx
import React, { useState, useEffect } from 'react';

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  return <main className="container content">SHOP</main>;
};
```

Точно так же у нас будет некое состояние загрузки loading и setLoading.

```jsx
import React, { useState, useEffect } from 'react';

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  return <main className="container content">SHOP</main>;
};
```

Пока что двух данных ключей нам хватит. Пишу useEffect.

```jsx
import React, { useState, useEffect } from 'react';

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function getGoods() {}, []);

  return <main className="container content">SHOP</main>;
};
```

Теперь мне нужна ссылка и мой API ключ. Соответственно я должен сделать их импорт.

```jsx
import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../../config';

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function getGoods() {}, []);

  return <main className="container content">SHOP</main>;
};
```

Далее в функции getGoods указываю fetch и первым параметром указываю адресс.

```jsx
import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../../config';

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function getGoods() {
    fetch(API_URL);
  }, []);

  return <main className="container content">SHOP</main>;
};
```

А вот для того что бы передать API_KEY нам нужны заголовки. Fetch работает таким образом что у него есть второй пераметр. Первый нужен для get запросов т.е. для ссылки. Вторым параметром обычно передают объект. Он нужен для разных вещей. В частности если нам нужно отправить какие-то заголовки. Вот нам сейчас нужно отправить вполне конкретный заголовок. И это внутри нашего объекта ключ с опциями headers.

```jsx
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
```

Мы помпним что заголовок который от нас просят это заголовок

```jsx
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
```
