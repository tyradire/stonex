import React, { useState, useEffect } from 'react';
import { blockToBrick, upToFourthStage, upToFirstStage, stoneToLodestone, upToLegendaty } from '../utils/prices/formulas';
import { stonecuttingData } from '../utils/prices/stonecuttingData';
import SettingsPanel from '../components/SettingsPanel/SettingsPanel';
import SortedList from '../components/SortedList/SortedList';

import stoneblock from '../assets/icons/stoneblock.png';
import stonebrick from '../assets/icons/stonebrick.png';
import lodestonebrick from '../assets/icons/lodestonebrick.png';
import obsidian from '../assets/icons/obsidianlodestone.png';
import runestone from '../assets/icons/runestone.png';

import './Page.scss';
import localforage from 'localforage';
import PopupInfo from '../UI/PopupInfo';

const Stonecutting = () => {

  const [type, setType] = useState('Stone block');
  const [popupOpened, setPopupOpened] = useState(false);

  const [stonePrice, setStonePrice] = useState(Number(stonecuttingData[0].cost));
  const [lodestonePrice, setLodestonePrice] = useState(Number(stonecuttingData[1].cost));
  const [extraLodestonePrice, setExtraLodestonePrice] = useState(Number(stonecuttingData[2].cost));
  const [sandpaperPrice, setSandpaperPrice] = useState(Number(stonecuttingData[3].cost));
  
  const [stoneBlockPrice, setStoneBlockPrice] = useState(Number(stonecuttingData[4].cost));
  const [stoneBrickPrice, setStoneBrickPrice] = useState(Number(stonecuttingData[5].cost));
  const [lodestoneBrickPrice, setLodestoneBrickPrice] = useState(Number(stonecuttingData[6].cost));
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
    localforage.getItem('Stonecutting').then(function(value) {
      setStonePrice(Number((value.filter(el => el.id === 'stn1')[0].cost)));
      setStoneBlockPrice(Number((value.filter(el => el.id === 'stn5')[0].cost)));
      setStoneBrickPrice(Number((value.filter(el => el.id === 'stn6')[0].cost)));
      setLodestoneBrickPrice(Number((value.filter(el => el.id === 'stn7')[0].cost)));
      setSandpaperPrice(Number((value.filter(el => el.id === 'stn4')[0].cost)));
      setObsidianPrice(Number((value.filter(el => el.id === 'stn8')[0].cost)));
      setLodestonePrice(Number((value.filter(el => el.id === 'stn2')[0].cost)));
      setExtraLodestonePrice(Number((value.filter(el => el.id === 'stn3')[0].cost)));
      setRunestonePrice(Number((value.filter(el => el.id === 'stn9')[0].cost)));
    });
  }, [])

  let stonesToStoneBlock = upToFirstStage(4,stonePrice,0.01,itemsEquipped);

  let stoneBlockToStoneBrick = blockToBrick(4,stoneBlockPrice, sandpaperPrice, itemsEquipped);
  let stonesToStoneBrick = blockToBrick(4,stonesToStoneBlock, sandpaperPrice, itemsEquipped);

  let stoneBrickToLodestoneBlock = stoneToLodestone(lodestonePrice,stoneBrickPrice,sandpaperPrice,itemsEquipped);
  let stoneBlockToLodestoneBlock = stoneToLodestone(stoneBlockToStoneBrick,stoneBrickPrice,sandpaperPrice,itemsEquipped);
  let stonesToLodestoneBlock = stoneToLodestone(stonesToStoneBrick,stoneBrickPrice,sandpaperPrice,itemsEquipped);

  let lodestoneToObsidian = upToFourthStage(2, lodestonePrice, 8, lodestoneBrickPrice, extraLodestonePrice/2, sandpaperPrice, itemsEquipped, 1.33);
  let stoneBrickToObsidian = upToFourthStage(2, lodestonePrice, 8, stoneBrickToLodestoneBlock, extraLodestonePrice/2, sandpaperPrice, itemsEquipped, 1.33);
  let stoneBlockToObsidian = upToFourthStage(2, lodestonePrice, 8, stoneBlockToLodestoneBlock, extraLodestonePrice/2, sandpaperPrice, itemsEquipped, 1.33);
  let stonesToObsidian = upToFourthStage(2, lodestonePrice, 8, stonesToLodestoneBlock, extraLodestonePrice/2, sandpaperPrice, itemsEquipped, 1.33);

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

  const ingridients = [
    {
      unit: 'Orichalcum Ore',
      amount: '8'
    },
    {
      unit: 'Starmetal Ingot',
      amount: '2',
    },
    {
      unit: 'Charcoal',
      amount: '2'
    }
  ]

  return (
    <div className='page'>
      <PopupInfo popupOpened={popupOpened} title={type} ingridients={ingridients} />
      <SettingsPanel icons={icons} toggleType={setType} titles={titles} type={type} />
      <div className='page__title-wrapper'>
        <p className='page__subtitle'>{type}</p>
        <button className={!popupOpened ? 'page__subtitle-btn' : 'page__subtitle-btn page__subtitle-btn_opened'} onClick={() => setPopupOpened(!popupOpened)}>
          <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path fill="none" d="M0 0h24v24H0z"/>
              <path fill="#6988a5" d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"/>
            </g>
          </svg>
        </button>
      </div>
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
            lodestoneBrickPrice,
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