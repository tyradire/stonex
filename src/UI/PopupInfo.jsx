import React from 'react';
import { ReactComponent as CopyIcon } from '../assets/svg/copy-icon.svg';
import './PopupInfo.scss';

const PopupInfo = ({ popupOpened, title, ingridients, data }) => {

  return (
    <div className={popupOpened ? 'popup-info popup-info_opened' : 'popup-info'}>
      <p className='popup-info__title'>Ingridients for {title}</p>
      <ul className='popup-info__list'>
        {
          Object.keys(ingridients[0]).length && ingridients.map((elem, i) => {
            const img = data.filter(el => el.title === elem.unit)[0].img;
            return <li className='popup-info__list-item' key={i}>
              <img className='popup-info__image' src={img} alt={elem} width='30' height='30' />
              <p className='popup-info__unit'>{elem.unit} &ndash; {elem.amount}</p>
              <div className='popup-info__copy'>
                <CopyIcon />
              </div>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default PopupInfo