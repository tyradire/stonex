import React from 'react';

const SettingsPanelButton = ({ icon, toggleType, title, type }) => {

  const swapType = () => {
    toggleType(title);
  }

  console.log(title)

  return (
    <button 
      className={title !== type ? 'settings-panel__button' : 'settings-panel__button settings-panel__button_selected'}
      style={{backgroundImage: `url(${icon})`}}
      onClick={swapType}
    >
      {title}
    </button>
  )
}

export default SettingsPanelButton