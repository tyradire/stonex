import React, { useEffect, useState } from 'react';
import './Prices.scss';

const Price = ({ title, cost, id }) => {

  const [currentCost, setCurrentCost] = useState(localStorage.getItem(id) || cost);
  
  useEffect(() => {
    let val = localStorage.getItem(id);
    setCurrentCost(val);
  }, [])

  const changeCost = (e) => {
    setCurrentCost(Number(e.currentTarget.value))
    localStorage.setItem(id, Number(e.currentTarget.value));
  }

  const selectContent = (e) => {
    e.target.select();
  }

  return (
    <label className='price'>
      <p className='price__subtitle'>{title}</p>
      <input type="number" className='price__input' defaultValue={Number(currentCost).toFixed(2)} onChange={changeCost} onClick={selectContent} />
    </label>
  )
}

export default Price