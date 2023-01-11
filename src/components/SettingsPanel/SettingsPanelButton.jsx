import React from 'react';

const SettingsPanelButton = ({ icon, toggleType, title, type }) => {

  const swapType = () => {
    toggleType(title);
  }

  return (
    <button 
      className={title !== type ? 'settings-panel__button' : 'settings-panel__button settings-panel__button_selected'}
      style={{backgroundImage: `url(${icon})`}}
      onClick={swapType}
      name={title}
    >
    </button>
  )
}

export default SettingsPanelButton