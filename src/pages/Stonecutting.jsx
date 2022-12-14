import React, { useState } from 'react';
import SettingsPanel from '../components/SettingsPanel/SettingsPanel';
import stoneblock from '../assets/icons/stoneblock.png';
import stonebrick from '../assets/icons/stonebrick.png';
import lodestonebrick from '../assets/icons/lodestonebrick.png';
import obsidian from '../assets/icons/obsidianlodestone.png';
import './Page.scss';

const Stonecutting = () => {

  const [type, setType] = useState('Stone block');

  const icons = [
    stoneblock,
    stonebrick,
    lodestonebrick,
    obsidian
  ]

  const titles = [
    'Stone block', 
    'Stone brick', 
    'Lodestone brick', 
    'Obsidian lodestone'
  ]

  return (
    <div className='page'>
      <h2 className='page__title'>Stonecutting</h2>
      <SettingsPanel icons={icons} toggleType={setType} titles={titles} type={type} />
      <p>{type}</p>
    </div>
  )
}

export default Stonecutting