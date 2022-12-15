import React, { useState } from 'react';
import SettingsPanel from '../components/SettingsPanel/SettingsPanel';
import stoneblock from '../assets/icons/stoneblock.png';
import stonebrick from '../assets/icons/stonebrick.png';
import lodestonebrick from '../assets/icons/lodestonebrick.png';
import obsidian from '../assets/icons/obsidianlodestone.png';
import './Page.scss';
import { stonecuttingData } from '../utils/prices/stonecuttingData';
import { useEffect } from 'react';
import Tier1 from '../components/Tiers/Tier1';
import { oreToIngot } from '../utils/prices/formulas';

const Stonecutting = () => {

  const [type, setType] = useState('Stone block');

  const [stonePrice, setStonePrice] = useState(Number(stonecuttingData[0].cost));

  const [stoneBlockPrice, setStoneBlockPrice] = useState(Number(stonecuttingData[4].cost))

  const [itemsEquipped, setItemsEquipped] = useState((JSON.parse(localStorage.getItem('bonusItems')) || []).length);

  const icons = [
    stoneblock,
    stonebrick,
    lodestonebrick,
    obsidian
  ]

  useEffect(() => {
    let stone = localStorage.getItem('stn1');

    let stBlock = localStorage.getItem('stn2');

    setStonePrice(Number(stone))
    setStoneBlockPrice(Number(stBlock))
  }, [])

  let stonesToStoneBlock = oreToIngot(4,stonePrice,itemsEquipped);

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
      {
        type === 'Stone block' &&
        <Tier1 
          tpPrice={stoneBlockPrice}
          price1={stonesToStoneBlock}
          price1text={'- Stone block from Stones'}
        />
      }
    </div>
  )
}

export default Stonecutting