import React, { useState } from 'react';
import SettingsPanel from '../components/SettingsPanel/SettingsPanel';
import stoneblock from '../assets/icons/stoneblock.png';
import stonebrick from '../assets/icons/stonebrick.png';
import lodestonebrick from '../assets/icons/lodestonebrick.png';
import obsidian from '../assets/icons/obsidianlodestone.png';
import runestone from '../assets/icons/runestone.png';
import './Page.scss';
import { stonecuttingData } from '../utils/prices/stonecuttingData';
import { useEffect } from 'react';
import Tier1 from '../components/Tiers/Tier1';
import { ingotToNextLvl, ingotToTopTier, oreToIngot, upToLegendaty } from '../utils/prices/formulas';
import Tier2 from '../components/Tiers/Tier2';
import Tier3 from '../components/Tiers/Tier3';
import Tier4 from '../components/Tiers/Tier4';
import TierLegendary from '../components/Tiers/TierLegendary';

const Stonecutting = () => {

  const [type, setType] = useState('Stone block');

  const [stonePrice, setStonePrice] = useState(Number(stonecuttingData[0].cost));
  const [lodestonePrice, setLodestonePrice] = useState(Number(stonecuttingData[1].cost));
  const [extraLodestonePrice, setExtraLodestonePrice] = useState(Number(stonecuttingData[2].cost));
  const [sandpaperPrice, setSandpaperPrice] = useState(Number(stonecuttingData[3].cost));
  
  const [stoneBlockPrice, setStoneBlockPrice] = useState(Number(stonecuttingData[4].cost));
  const [stoneBrickPrice, setStoneBrickPrice] = useState(Number(stonecuttingData[5].cost));
  const [lodestoneBlockPrice, setLodestoneBlockPrice] = useState(Number(stonecuttingData[6].cost));
  const [obsidianPrice, setObsidianPrice] = useState(Number(stonecuttingData[7].cost));
  const [runestonePrice, setRunestonePrice] = useState(Number(stonecuttingData[8].cost));

  const [itemsEquipped, setItemsEquipped] = useState((JSON.parse(localStorage.getItem('bonusItems')) || []).length);

  const icons = [
    stoneblock,
    stonebrick,
    lodestonebrick,
    obsidian,
    runestone
  ]

  useEffect(() => {
    let stone = localStorage.getItem('stn1');
    let sandpaper = localStorage.getItem('stn6');
    let lodestone = localStorage.getItem('stn7');
    let extra = localStorage.getItem('stn8');

    let stBlock = localStorage.getItem('stn2');
    let stBrick = localStorage.getItem('stn3');
    let lodestoneBlock = localStorage.getItem('stn4');
    let obsidianVoidStone = localStorage.getItem('stn5');
    let runestone = localStorage.getItem('stn9');

    setStonePrice(Number(stone));
    setStoneBlockPrice(Number(stBlock));
    setStoneBrickPrice(Number(stBrick));
    setLodestoneBlockPrice(Number(lodestoneBlock));
    setSandpaperPrice(Number(sandpaper));
    setObsidianPrice(Number(obsidianVoidStone));
    setLodestonePrice(Number(lodestone));
    setExtraLodestonePrice(Number(extra));
    setRunestonePrice(Number(runestone));
  }, [])

  let stonesToStoneBlock = oreToIngot(4,stonePrice,itemsEquipped);

  let stoneBlockToStoneBrick = oreToIngot(4,stoneBlockPrice,itemsEquipped);
  let stonesToStoneBrick = oreToIngot(4,stonesToStoneBlock,itemsEquipped);

  let stoneBrickToLodestoneBlock = ingotToNextLvl(2,stoneBrickPrice,0,sandpaperPrice,itemsEquipped);
  let stoneBlockToLodestoneBlock = ingotToNextLvl(2,stoneBlockToStoneBrick,0,sandpaperPrice,itemsEquipped);
  let stonesToLodestoneBlock = ingotToNextLvl(2,stonesToStoneBrick,0,sandpaperPrice,itemsEquipped);

  let lodestoneToObsidian = ingotToTopTier(lodestonePrice, lodestoneBlockPrice, extraLodestonePrice/2, sandpaperPrice, itemsEquipped, 1.33);
  let stoneBrickToObsidian = ingotToTopTier(lodestonePrice, stoneBrickToLodestoneBlock, extraLodestonePrice/2, sandpaperPrice, itemsEquipped, 1.33);
  let stoneBlockToObsidian = ingotToTopTier(lodestonePrice, stoneBlockToLodestoneBlock, extraLodestonePrice/2, sandpaperPrice, itemsEquipped, 1.33);
  let stonesToObsidian = ingotToTopTier(lodestonePrice, stonesToLodestoneBlock, extraLodestonePrice/2, sandpaperPrice, itemsEquipped, 1.33);

  let obsidianToRunestone = upToLegendaty(obsidianPrice, 0, sandpaperPrice, extraLodestonePrice, 0, itemsEquipped);
  let lodestoneToRunestone = upToLegendaty(obsidianPrice, 0, sandpaperPrice, extraLodestonePrice, 0, itemsEquipped);
  let stoneBrickToRunestone = upToLegendaty(obsidianPrice, 0, sandpaperPrice, extraLodestonePrice, 0, itemsEquipped);
  let stoneBlockToRunestone = upToLegendaty(obsidianPrice, 0, sandpaperPrice, extraLodestonePrice, 0, itemsEquipped);
  let stonesToRunestone = upToLegendaty(obsidianPrice, 0, sandpaperPrice, extraLodestonePrice, 0, itemsEquipped);

  const titles = [
    'Stone block', 
    'Stone brick', 
    'Lodestone brick', 
    'Obsidian lodestone',
    'Runestone'
  ]

  return (
    <div className='page'>
      <h2 className='page__title'>Stonecutting</h2>
      <SettingsPanel icons={icons} toggleType={setType} titles={titles} type={type} />
      <p className='page__subtitle'>{type}</p>
      {
        type === 'Stone block' &&
        <Tier1 
          tpPrice={stoneBlockPrice}
          price1={stonesToStoneBlock}
          price1text={'- Stone block from Stones'}
        />
      }
      {
        type === 'Stone brick' &&
        <Tier2 
          tpPrice={stoneBrickPrice}
          price1={stoneBlockToStoneBrick}
          price1text={'- Stone brick from Stone block'}
          price2={stonesToStoneBrick}
          price2text={'- Stone brick from Stones'}
        />
      }
      {
        type === 'Lodestone brick' && 
        <Tier3
          tpPrice={lodestoneBlockPrice}
          price1={stoneBrickToLodestoneBlock}
          price1text={'- Lodestone brick from Stone brick'}
          price2={stoneBlockToLodestoneBlock}
          price2text={'- Lodestone brick from Stone block'}
          price3={stonesToLodestoneBlock}
          price3text={'- Lodestone brick from Stones'}
        />
      }
      {
        type === 'Obsidian lodestone' && 
        <Tier4 
          tpPrice={obsidianPrice} 
          price1={lodestoneToObsidian}
          price1text={'- Obsidian lodestone from Lodestone brick'}
          price2={stoneBrickToObsidian}
          price2text={'- Obsidian lodestone from Stone brick'}
          price3={stoneBlockToObsidian}
          price3text={'- Obsidian lodestone from Stone block'}
          price4={stonesToObsidian}
          price4text={'- Obsidian lodestone from Stones'}
        />
      }
      {
        type === 'Runestone' && 
        <TierLegendary 
          tpPrice={runestonePrice} 
          price1={obsidianToRunestone}
          price1text={'- Runestone from Obsidian'}
          price2={lodestoneToRunestone}
          price2text={'- Runestone from Lodestone'}
          price3={stoneBrickToRunestone}
          price3text={'- Runestone from Stone brick'}
          price4={stoneBlockToRunestone}
          price4text={'- Runestone from Stone block'}
          price5={stonesToRunestone}
          price5text={'- Runestone from Stones'}
        />
      }
    </div>
  )
}

export default Stonecutting