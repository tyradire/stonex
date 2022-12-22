import React from 'react';
import './SettingsPanel.scss';
import SettingsPanelButton from './SettingsPanelButton';

const SettingsPanel = ({ toggleType, icons, titles, type }) => {

  return (
    <div className='settings-panel'>
      {
        titles.map((elem, i) => {
          return <SettingsPanelButton icon={icons[i]} toggleType={toggleType} title={titles[i]} type={type} key={i} />
        })
      }
    </div>
  )
}

export default SettingsPanel