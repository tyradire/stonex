import React from 'react'

const SettingsPanelButton = ({ icon, toggleType, title, type }) => {

  const swapType = () => {
    toggleType(title);
  }

  return (
    <button 
      className={title !== type ? 'panel-button' : 'panel-button panel-button_selected'}
      style={{backgroundImage: `url(${icon})`}}
      onClick={swapType}
    >
    </button>
  )
}

export default SettingsPanelButton