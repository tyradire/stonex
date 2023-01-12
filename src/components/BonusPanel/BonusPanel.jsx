import React, { useEffect, useState } from 'react';
import BonusPanelItem from './BonusPanelItem';
import './BonusPanel.scss';

const BonusPanel = () => {

  const [equippedItems, setEquippedItems] = useState(JSON.parse(localStorage.getItem('bonusItems')) || []);
  const [panelOpened, setPanelOpened] = useState(false);

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('bonusItems'));
    if (!storage) localStorage.setItem('bonusItems', JSON.stringify([]));
  },[])

  const toggleEquippedItem = (e) => {
    let array = JSON.parse(localStorage.getItem('bonusItems'));
    if (e.target.checked) {
      array.push(e.target.id)
    } else {
      array = array.filter(elem => elem !== e.target.id)
    }
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
    <div className={!panelOpened ? 'bonus-panel' : 'bonus-panel bonus-panel_opened' }>
      <form className='bonus-panel__form'>
        <p className='bonus-panel__description'>+2% yield bonus</p>
        <div className='bonus-panel__content'>
          {
            titles.map((el, i) => {
              return <BonusPanelItem title={el} items={equippedItems} toggleEquippedItem={toggleEquippedItem} id={arr[i]} key={i} />
            })
          }
        </div>
        <button className='bonus-panel__open-btn' onClick={openPanel}>+2% yield bonus</button>
      </form>
    </div>
  )
}

export default BonusPanel