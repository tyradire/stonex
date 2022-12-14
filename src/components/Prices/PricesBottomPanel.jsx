import React, { useEffect, useState } from 'react';
import BottomPanelItem from './BottomPanelItem';
import './Prices.scss';

const PricesBottomPanel = () => {

  const [equippedItems, setEquippedItems] = useState(JSON.parse(localStorage.getItem('bonusItems')) || []);
  const [panelOpened, setPanelOpened] = useState(false);

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

  let arr = [
    'equip-head',
    'equip-chest',
    'equip-hand',
    'equip-legs',
    'equip-feet',
  ]

  let titles = [
    'Head',
    'Chest',
    'Hand',
    'Legs',
    'Feet'
  ]

  const openPanel = (e) => {
    e.preventDefault();
    setPanelOpened(!panelOpened);
  }

  return (
    <div className={!panelOpened ? 'bottom-panel' : 'bottom-panel bottom-panel_opened' }>
      <form className='bottom-panel__form'>
        <p className='bottom-panel__description'>+2% yield items</p>
        <div className='bottom-panel__content'>
          {
            titles.map((el, i) => {
              return <BottomPanelItem title={el} items={equippedItems} toggleEquippedItem={toggleEquippedItem} id={arr[i]} key={i} />
            })
          }
        </div>
        <button className='bottom-panel__open-btn' onClick={openPanel}>+2% yield items</button>
      </form>
    </div>
  )
}

export default PricesBottomPanel