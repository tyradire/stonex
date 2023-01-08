import React from 'react';
import { useState } from 'react';
import './SettingsPanel.scss';
import SettingsPanelButton from './SettingsPanelButton';

const SettingsPanel = ({ toggleType, icons, titles, type }) => {

  const [cord, setCord] = useState(0);
  const buttonsLength = titles.length > 5;

  console.log(buttonsLength)

  const scrollLeft = () => {
    if (cord > -1) return
    else {
      setCord(prev => prev + 162);
      console.log(cord + 162)
    }
  }

  const scrollRight = () => {
    if (cord < -161) return
    else {
      setCord(prev => prev - 162);
      console.log(cord - 162)
    }
  }

  return (
    <div className='settings-panel'>
      {
        buttonsLength && <button className={cord < -1 ? 'settings-panel__scroll-btn' : 'settings-panel__scroll-btn settings-panel__scroll-btn_blocked'} onClick={scrollLeft}>&#9668;</button>
      }
      <div className='settings-panel__container'>
        <div className='settings-panel__wrapper' style={{transform: `translateX(${cord}px)`}}>
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