import React, { useState, useEffect, useRef } from 'react';
import { upToThirdStage, upToSecondStage, upToFourthStage, upToFirstStage, upToLegendaty } from '../utils/prices/formulas';
import { woodworkingData } from '../utils/prices/woodworkingData';
import SettingsPanel from '../components/SettingsPanel/SettingsPanel';
import SortedList from '../components/SortedList/SortedList';

import timber from '../assets/icons/timber.webp';
import lumber from '../assets/icons/lumber.webp';
import wyrdwood from '../assets/icons/wyrdwoodplanks.webp';
import ironwood from '../assets/icons/ironwoodplanks.webp';
import ebony from '../assets/icons/glitteringebony.webp';

import './Page.scss';
import localforage from 'localforage';
import PopupInfo from '../UI/PopupInfo';

const Woodworking = () => {

  const [type, setType] = useState('timber');
  const [popupOpened, setPopupOpened] = useState(false);
  const [ingredients, setIngridients] = useState([{}]);

  const [sandpaperPrice, setSandpaperPrice] = useState(Number(woodworkingData[4].cost));
  const [wildwoodPrice, setWildwoodPrice] = useState(Number(woodworkingData[9].cost));
  const [barbvinePrice, setBarbvinePrice] = useState(Number(woodworkingData[10].cost));

  const [greenwoodPrice, setGreenwoodPrice] = useState(Number(woodworkingData[0].cost));
  const [agedwoodPrice, setAgedwoodPrice] = useState(Number(woodworkingData[1].cost));
  const [wyrdwoodPrice, setWyrdwoodPrice] = useState(Number(woodworkingData[2].cost));
  const [ironwoodPrice, setIronwoodPrice] = useState(Number(woodworkingData[3].cost));

  const [timberPrice, setTimberPrice] = useState(Number(woodworkingData[5].cost));
  const [lumberPrice, setLumberPrice] = useState(Number(woodworkingData[6].cost));
  const [wyrdplanksPrice, setWyrdplanksPrice] = useState(Number(woodworkingData[7].cost));
  const [ironplanksPrice, setIronplanksPrice] = useState(Number(woodworkingData[8].cost));
  const [ebonyPrice, setEbonyPrice] = useState(Number(woodworkingData[11].cost));

  const [itemsEquipped, setItemsEquipped] = useState((JSON.parse(localStorage.getItem('bonusItems')) || []).length);

  useEffect(() => {
    localforage.getItem('Woodworking').then(function(value) {
      setGreenwoodPrice(Number((value.filter(el => el.id === 'woo1')[0].cost)));
      setAgedwoodPrice(Number((value.filter(el => el.id === 'woo2')[0].cost)));
      setWyrdwoodPrice(Number((value.filter(el => el.id === 'woo3')[0].cost)));
      setIronwoodPrice(Number((value.filter(el => el.id === 'woo4')[0].cost)));
      setTimberPrice(Number((value.filter(el => el.id === 'woo6')[0].cost)));
      setLumberPrice(Number((value.filter(el => el.id === 'woo7')[0].cost)));
      setWyrdplanksPrice(Number((value.filter(el => el.id === 'woo8')[0].cost)));
      setIronplanksPrice(Number((value.filter(el => el.id === 'woo9')[0].cost)));
      setEbonyPrice(Number((value.filter(el => el.id === 'woo12')[0].cost)));
      setSandpaperPrice(Number((value.filter(el => el.id === 'woo5')[0].cost)));
      setWildwoodPrice(Number((value.filter(el => el.id === 'woo10')[0].cost)));
      setBarbvinePrice(Number((value.filter(el => el.id === 'woo11')[0].cost)));
    });
  },[])

  let greenToTimber = upToFirstStage(4,greenwoodPrice,0.01,itemsEquipped);

  let timberToLumber = upToSecondStage(2,timberPrice, agedwoodPrice*2, sandpaperPrice, itemsEquipped);
  let greenToLumber = upToSecondStage(2,greenToTimber, agedwoodPrice*2, sandpaperPrice, itemsEquipped);

  let lumberToWyrdwoodPlanks = upToThirdStage(2, lumberPrice, 6, wyrdwoodPrice, 0, sandpaperPrice, itemsEquipped);
  let timberToWyrdwoodPlanks = upToThirdStage(2, timberToLumber, 6, wyrdwoodPrice, 0, sandpaperPrice, itemsEquipped);
  let greenToWyrdwoodPlanks = upToThirdStage(2, greenToLumber, 6, wyrdwoodPrice, 0, sandpaperPrice, itemsEquipped);

  let wyrdwoodToIron = upToFourthStage(2, wyrdplanksPrice, 8, ironwoodPrice, 0, sandpaperPrice, itemsEquipped, 1.13);
  let lumberToIron = upToFourthStage(2, lumberToWyrdwoodPlanks, 8, ironwoodPrice, 0, sandpaperPrice, itemsEquipped, 1.13);
  let timberToIron = upToFourthStage(2, timberToWyrdwoodPlanks, 8, ironwoodPrice, 0, sandpaperPrice, itemsEquipped, 1.13);
  let greenToIron = upToFourthStage(2, greenToWyrdwoodPlanks, 8, ironwoodPrice, 0, sandpaperPrice, itemsEquipped, 1.13);

  let ironToEbony = upToLegendaty(ironplanksPrice, 0, sandpaperPrice, wildwoodPrice, barbvinePrice, itemsEquipped);
  let wyrdwoodToEbony = upToLegendaty(wyrdwoodToIron, 0, sandpaperPrice, wildwoodPrice, barbvinePrice, itemsEquipped);
  let lumberToEbony = upToLegendaty(lumberToIron, 0, sandpaperPrice, wildwoodPrice, barbvinePrice, itemsEquipped);
  let timberToEbony = upToLegendaty(timberToIron, 0, sandpaperPrice, wildwoodPrice, barbvinePrice, itemsEquipped);
  let greenToEbony = upToLegendaty(greenToIron, 0, sandpaperPrice, wildwoodPrice, barbvinePrice, itemsEquipped);

  const icons = [
    timber,
    lumber,
    wyrdwood,
    ironwood,
    ebony
  ]

  const titles = [
    'timber', 
    'lumber', 
    'wyrdwood planks', 
    'ironwood planks',
    'glittering ebony'
  ]

  useEffect(() => {
    setIngridients(woodworkingData.filter(el => el.title === type)[0].ingredients);
  }, [type])

  const modalWooButtonRef = useRef(null);

  return (
    <div className='page'>
      <PopupInfo popupOpened={popupOpened} setPopupOpened={setPopupOpened} modalButtonRef={modalWooButtonRef} title={type} ingredients={ingredients} data={woodworkingData} />
      <SettingsPanel icons={icons} toggleType={setType} titles={titles} type={type} />
      <div className='page__title-wrapper'>
        <p className='page__subtitle'>{type[0].toUpperCase() + type.slice(1)}</p>
        <button 
          className={!popupOpened ? 'page__subtitle-btn' : 'page__subtitle-btn page__subtitle-btn_opened'} 
          onClick={() => setPopupOpened(!popupOpened)}
          ref={modalWooButtonRef}        
        >
          <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path fill="none" d="M0 0h24v24H0z"/>
              <path fill="#6988a5" d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"/>
            </g>
          </svg>
        </button>
      </div>
      {
        type === 'timber' &&
        <SortedList
          prices={[
            timberPrice,
            greenToTimber
          ]}
          texts={[
            '- Price on trade post',
            '- Timber from Green wood'
          ]}
        />
      }
      {
        type === 'lumber' && 
        <SortedList
          prices={[
            lumberPrice,
            timberToLumber,
            greenToLumber
          ]}
          texts={[
            '- Price on trade post',
            '- Lumber from Timber',
            '- Lumber from Green wood'
          ]}
        />
      }
      {
        type === 'wyrdwood planks' && 
        <SortedList
          prices={[
            wyrdplanksPrice,
            lumberToWyrdwoodPlanks,
            timberToWyrdwoodPlanks,
            greenToWyrdwoodPlanks
          ]}
          texts={[
            '- Price on trade post',
            '- Wyrdwood planks from Lumber',
            '- Wyrdwood planks from Timber',
            '- Wyrdwood planks from Green wood'
          ]}
        />
      }
      {
        type === 'ironwood planks' && 
        <SortedList
          prices={[
            ironplanksPrice,
            wyrdwoodToIron,
            lumberToIron,
            timberToIron,
            greenToIron
          ]}
          texts={[
            '- Price on trade post',
            '- Ironwood planks from Wyrdwood planks',
            '- Ironwood planks from Lumber',
            '- Ironwood planks from Timber',
            '- Ironwood planks from Green wood'
          ]}
        />
      }
      {
        type === 'glittering ebony' && 
        <SortedList
          prices={[
            ebonyPrice,
            ironToEbony,
            wyrdwoodToEbony,
            lumberToEbony,
            timberToEbony,
            greenToEbony
          ]}
          texts={[
            '- Price on trade post',
            '- Glittering ebony from Ironwood',
            '- Glittering ebony from Wyrdwood planks',
            '- Glittering ebony from Lumber',
            '- Glittering ebony from Timber',
            '- Glittering ebony from Green wood'
          ]}
        />
      }
    </div>
  )
}

export default Woodworking