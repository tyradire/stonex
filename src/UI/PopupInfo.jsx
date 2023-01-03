import React from 'react';
import './PopupInfo.scss';

const PopupInfo = ({ popupOpened, title, ingridients }) => {

  return (
    <div className={popupOpened ? 'popup-info popup-info_opened' : 'popup-info'}>
      <p className='popup-info__title'>Ingridients for {title}</p>
      <ul className='popup-info__list'>
        {
          ingridients.map((elem, i) => {
            return <li className='popup-info__list-item' key={i}>{elem.unit} &ndash; {elem.amount}</li>
          })
        }
      </ul>
    </div>
  )
}

export default PopupInfo