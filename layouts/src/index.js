import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Store from './App';
import * as serviceWorker from './serviceWorker';

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "./img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "./img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "./img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "./img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "./img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "./img/5.jpg"
}];

const cardsLayout = {
  xs: 12,
  sm: 8,
  md: 6,
  lg: 4
};

ReactDOM.render(
  <React.StrictMode>
    <Store layout={cardsLayout} products={products} />
  </React.StrictMode>,
  document.getElementById('root')
);
