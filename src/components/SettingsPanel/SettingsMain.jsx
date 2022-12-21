import React from 'react';
import SettingsMainButton from './SettingsMainButton';
import './SettingsPanel.scss';

const SettingsMain = ({ toggleType, icons, titles, type }) => {

  return (
    <div className='settings-panel'>
      {
        titles.map((elem, i) => {
          return <SettingsMainButton 
            icon={icons[i]} 
            toggleType={toggleType} 
            title={titles[i]} 
            type={type} 
            key={i}
          />
        })
      }
    </div>
  )
}

export default SettingsMain