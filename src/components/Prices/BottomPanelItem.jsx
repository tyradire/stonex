import React from 'react'

const BottomPanelItem = ({title, items, id, toggleEquippedItem}) => {

  return (
    <div>
      <label className={items.includes(id) ? 'bottom-panel__label bottom-panel__label_active' : 'bottom-panel__label'} htmlFor={id}>
        <p>{title}</p>
        <input id={id} checked={items.includes(id)} type="checkbox" className='bottom-panel__checkbox' onChange={toggleEquippedItem} />
      </label>
    </div>
  )
}

export default BottomPanelItem