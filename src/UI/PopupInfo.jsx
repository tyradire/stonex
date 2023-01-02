import React from 'react';
import './PopupInfo.scss';

const PopupInfo = ({ popupOpened, title }) => {
  return (
    <div className={popupOpened ? 'popup-info popup-info_opened' : 'popup-info'}>
      <p className='popup-info__title'>{title}</p>
    </div>
  )
}

export default PopupInfo