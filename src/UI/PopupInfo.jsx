import React, { useEffect, useRef } from 'react';
import { ReactComponent as CopyIcon } from '../assets/svg/copy-icon.svg';
import './PopupInfo.scss';

const PopupInfo = ({ popupOpened, setPopupOpened, modalButtonRef, title, ingridients, data }) => {

  const copyIngridient = (e) => {
    navigator.clipboard.writeText(e.currentTarget.querySelector('.popup-info__unit').textContent.split('-')[0]);
  }

  const modalRef = useRef(null);

  useEffect(() => {
    const onClick = (e) =>  {
      if (!modalRef.current.contains(e.target) && !modalButtonRef.current.contains(e.target)) {setPopupOpened(false); console.log(123)}
      else return;
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className={popupOpened ? 'popup-info popup-info_opened' : 'popup-info'} ref={modalRef}>
      <p className='popup-info__title'>Ingridients for {title}</p>
      <ul className='popup-info__list'>
        {
          Object.keys(ingridients[0]).length && ingridients.map((elem, i) => {
            const img = data.filter(el => el.title === elem.unit)[0].img;
            return <li className='popup-info__list-item' 
              key={i}
              onClick={copyIngridient}
            >
              <img className='popup-info__image' src={img} alt={elem} width='30' height='30' />
              <p className='popup-info__unit'>{elem.unit} - {elem.amount}</p>
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