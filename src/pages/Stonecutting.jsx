import React, { useState, useEffect } from 'react';
import { ingotToNextLvl, ingotToTopTier, oreToIngot, upToLegendaty } from '../utils/prices/formulas';
import { stonecuttingData } from '../utils/prices/stonecuttingData';
import SettingsPanel from '../components/SettingsPanel/SettingsPanel';
import SortedList from '../components/Tiers/SortedList';

import stoneblock from '../assets/icons/stoneblock.png';
import stonebrick from '../assets/icons/stonebrick.png';
import lodestonebrick from '../assets/icons/lodestonebrick.png';
import obsidian from '../assets/icons/obsidianlodestone.png';
import runestone from '../assets/icons/runestone.png';

import './Page.scss';

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
    let sandpaper = localStorage.getItem('stn4');
    let lodestone = localStorage.getItem('stn2');
    let extra = localStorage.getItem('stn3');

    let stBlock = localStorage.getItem('stn5');
    let stBrick = localStorage.getItem('stn6');
    let lodestoneBlock = localStorage.getItem('stn7');
    let obsidianVoidStone = localStorage.getItem('stn8');
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
  let lodestoneToRunestone = upToLegendaty(lodestoneToObsidian, 0, sandpaperPrice, extraLodestonePrice, 0, itemsEquipped);
  let stoneBrickToRunestone = upToLegendaty(stoneBrickToObsidian, 0, sandpaperPrice, extraLodestonePrice, 0, itemsEquipped);
  let stoneBlockToRunestone = upToLegendaty(stoneBlockToObsidian, 0, sandpaperPrice, extraLodestonePrice, 0, itemsEquipped);
  let stonesToRunestone = upToLegendaty(stonesToObsidian, 0, sandpaperPrice, extraLodestonePrice, 0, itemsEquipped);

  const titles = [
    'Stone block', 
    'Stone brick', 
    'Lodestone brick', 
    'Obsidian lodestone',
    'Runestone'
  ]

  return (
    <div className='page'>
      <SettingsPanel icons={icons} toggleType={setType} titles={titles} type={type} />
      <p className='page__subtitle'>{type}</p>
      {
        type === 'Stone block' &&
        <SortedList 
          prices={[
            stoneBlockPrice,
            stonesToStoneBlock
          ]}
          texts={[
            '- Price on trade post',
            '- Stone block from Stones'
          ]}
        />
      }
      {
        type === 'Stone brick' &&
        <SortedList
          prices={[
            stoneBrickPrice,
            stoneBlockToStoneBrick,
            stonesToStoneBrick
          ]}
          texts={[
            '- Price on trade post',
            '- Stone brick from Stone block',
            '- Stone brick from Stones'
          ]}
        />
      }
      {
        type === 'Lodestone brick' && 
        <SortedList
          prices={[
            lodestoneBlockPrice,
            stoneBrickToLodestoneBlock,
            stoneBlockToLodestoneBlock,
            stonesToLodestoneBlock
          ]}
          texts={[
            '- Price on trade post',
            '- Lodestone brick from Stone brick',
            '- Lodestone brick from Stone block',
            '- Lodestone brick from Stones'
          ]}
        />
      }
      {
        type === 'Obsidian lodestone' && 
        <SortedList
          prices={[
            obsidianPrice,
            lodestoneToObsidian,
            stoneBrickToObsidian,
            stoneBlockToObsidian,
            stonesToObsidian
          ]}
          texts={[
            '- Price on trade post',
            '- Obsidian lodestone from Lodestone brick',
            '- Obsidian lodestone from Stone brick',
            '- Obsidian lodestone from Stone block',
            '- Obsidian lodestone from Stones'
          ]}
        />
      }
      {
        type === 'Runestone' && 
        <SortedList
          prices={[
            runestonePrice,
            obsidianToRunestone,
            lodestoneToRunestone,
            stoneBrickToRunestone,
            stoneBlockToRunestone,
            stonesToRunestone
          ]}
          texts={[
            '- Price on trade post',
            '- Runestone from Obsidian',
            '- Runestone from Lodestone brick',
            '- Runestone from Stone brick',
            '- Runestone from Stone block',
            '- Runestone from Stones'
          ]}
        />
      }
    </div>
  )
}

export default Stonecutting