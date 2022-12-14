import React, { useEffect, useState } from 'react';
import { tax, smeltingItems } from '../../utils/prices/other';
import './Prices.scss';

const PricesBottomPanel = () => {

  const [taxValue, setTaxValue] = useState(tax);
  const [equippedItems, setEquippedItems] = useState(JSON.parse(localStorage.getItem('bonusItems')) || []);

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('bonusItems'));
    if (!storage) localStorage.setItem('bonusItems', JSON.stringify([]));
  },[])

  const toggleEquippedItem = (e) => {
    let array = JSON.parse(localStorage.getItem('bonusItems'));
    if (e.target.checked) {
      //equippedItems.push(e.target.id)
      array.push(e.target.id)
    } else {
      //setEquippedItems(equippedItems.filter(elem => elem !== e.target.id))
      array = array.filter(elem => elem !== e.target.id)
    }
    //let array = JSON.stringify(equippedItems);
    setEquippedItems(array)
    localStorage.setItem('bonusItems', JSON.stringify(array));
  }

  return (
    <div className='bottom-panel'>
      <form className='bottom-panel__form'>
        <label className='bottom-panel__label'>
          <p>Tax%</p>
          <input type="number" defaultValue={taxValue} className='bottom-panel__input' />
        </label>
        <label className='bottom-panel__label' htmlFor='equip-head'>
          <p>Head</p>
          <input id='equip-head' checked={equippedItems.includes('equip-head')} type="checkbox" className='bottom-panel__checkbox' onChange={toggleEquippedItem} />
        </label>
        <label className='bottom-panel__label' htmlFor='equip-chest'>
          <p>Chest</p>
          <input id='equip-chest' checked={equippedItems.includes('equip-chest')} type="checkbox" className='bottom-panel__checkbox' onChange={toggleEquippedItem} />
        </label>
        <label className='bottom-panel__label' htmlFor='equip-hand'>
          <p>Hand</p>
          <input id='equip-hand' checked={equippedItems.includes('equip-hand')} type="checkbox" className='bottom-panel__checkbox' onChange={toggleEquippedItem} />
        </label>
        <label className='bottom-panel__label' htmlFor='equip-legs'>
          <p>Legs</p>
          <input id='equip-legs' checked={equippedItems.includes('equip-legs')} type="checkbox" className='bottom-panel__checkbox' onChange={toggleEquippedItem} />
        </label>
        <label className='bottom-panel__label' htmlFor='equip-feet'>
          <p>Feet</p>
          <input id='equip-feet' checked={equippedItems.includes('equip-feet')} type="checkbox" className='bottom-panel__checkbox' onChange={toggleEquippedItem} />
        </label>
      </form>
    </div>
  )
}

export default PricesBottomPanel