import localforage from 'localforage';
import React, { useState } from 'react';
import './Prices.scss';

const Price = ({ title, cost, id, img, type }) => {

  const [currentCost, setCurrentCost] = useState(cost);
  
  const changeCost = (e) => {
    localforage.getItem(type)
    .then((res) => { 
      let testick = res.findIndex((el) => {return el.id === id})
      res[testick].cost = Number(e.target.value);
      localforage.setItem(type, res)
    })
    .then((res) => console.log(res))
  }

  const selectContent = (e) => {
    e.target.select();
  }

  return (
    <label className='price'>
      <img className='price__icon' src={img} alt={title}/>
      <p className='price__subtitle'>{title}</p>
      <input type="number" className='price__input' defaultValue={Number(currentCost).toFixed(2)} onChange={changeCost} onClick={selectContent} />
    </label>
  )
}

export default Price