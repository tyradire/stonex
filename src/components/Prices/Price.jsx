import React, { useEffect, useState } from 'react';
import './Prices.scss';

const Price = ({ title, cost, id, img }) => {

  const [currentCost, setCurrentCost] = useState(localStorage.getItem(id) || cost);
  
  useEffect(() => {
    if (null === localStorage.getItem(id)) {
      setCurrentCost(cost);
      localStorage.setItem(id, cost);
    } else {
      let val = localStorage.getItem(id);
      setCurrentCost(val);
    }
  },[])

  const changeCost = (e) => {
    setCurrentCost(Number(e.currentTarget.value))
    localStorage.setItem(id, Number(e.currentTarget.value));
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