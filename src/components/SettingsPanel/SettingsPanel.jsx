import React from 'react';
import { useState } from 'react';
import './SettingsPanel.scss';
import SettingsPanelButton from './SettingsPanelButton';

const SettingsPanel = ({ toggleType, icons, titles, type }) => {

  return (
    <div className='settings-panel'>
      <SettingsPanelButton icon={icons[0]} toggleType={toggleType} title={titles[0]} type={type} />
      <SettingsPanelButton icon={icons[1]} toggleType={toggleType} title={titles[1]} type={type} />
      <SettingsPanelButton icon={icons[2]} toggleType={toggleType} title={titles[2]} type={type} />
      <SettingsPanelButton icon={icons[3]} toggleType={toggleType} title={titles[3]} type={type} />
      <SettingsPanelButton icon={icons[4]} toggleType={toggleType} title={titles[4]} type={type} />
    </div>
  )
}

export default SettingsPanel