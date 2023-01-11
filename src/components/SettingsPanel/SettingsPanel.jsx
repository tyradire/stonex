import React from 'react';
import { useState } from 'react';
import './SettingsPanel.scss';
import SettingsPanelButton from './SettingsPanelButton';

const SettingsPanel = ({ toggleType, icons, titles, type }) => {

  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [cord, setCord] = useState(0);
  const buttonsLength = titles.length > 5;
  const minSwipeDistance = 50

  const scrollLeft = () => {
    if (cord > -1) return
    else {
      setCord(prev => prev + 162);
    }
  }

  const scrollRight = () => {
    if (cord < -161) return
    else {
      setCord(prev => prev - 162);
    }
  }

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe && cord > -1) {
      setCord(prev => prev - 162);
    } else if (isRightSwipe && cord < 0) {
      setCord(prev => prev + 162);
    } return
  }

  return (
    <div className='settings-panel'>
      {
        buttonsLength && <button className={cord < -1 ? 'settings-panel__scroll-btn' : 'settings-panel__scroll-btn settings-panel__scroll-btn_blocked'} onClick={scrollLeft}>&#9668;</button>
      }
      <div className='settings-panel__container'>
        <div className='settings-panel__wrapper' style={{transform: `translateX(${cord}px)`}} onTouchStart={buttonsLength ? onTouchStart : null} onTouchMove={buttonsLength ? onTouchMove : null} onTouchEnd={buttonsLength ? onTouchEnd : null}>
          {
            titles.map((elem, i) => {
              return <SettingsPanelButton icon={icons[i]} toggleType={toggleType} title={titles[i]} type={type} key={i} />
            })
          }
        </div>
      </div>
      {
        buttonsLength && <button className={cord > -1 ? 'settings-panel__scroll-btn' : 'settings-panel__scroll-btn settings-panel__scroll-btn_blocked'} onClick={scrollRight}>&#9658;</button>
      }
    </div>
  )
}

export default SettingsPanel