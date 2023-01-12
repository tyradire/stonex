import React from 'react';

const BonusPanelItem = ({title, items, id, toggleEquippedItem}) => {

  return (
    <div>
      <label className={items.includes(id) ? 'bonus-panel__label bonus-panel__label_active' : 'bonus-panel__label'} htmlFor={id}>
        <p>{title}</p>
        <input id={id} checked={items.includes(id)} type="checkbox" className='bonus-panel__checkbox' onChange={toggleEquippedItem} />
      </label>
    </div>
  )
}

export default BonusPanelItem