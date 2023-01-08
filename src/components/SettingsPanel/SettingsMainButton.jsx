import React from 'react';

const SettingsMainButton = ({ icon, toggleType, title, type }) => {

  const swapType = () => {
    toggleType(title);
    localStorage.setItem('savedRes', title);
  }

  return (
    <button 
      className={title !== type ? 'settings-panel__button' : 'settings-panel__button settings-panel__button_selected'}
      style={{backgroundImage: `url(${icon})`}}
      onClick={swapType}
    >
    </button>
  )
}

export default SettingsMainButton