import React, { useState } from 'react';
import SettingsPanel from '../components/SettingsPanel/SettingsPanel';
import timber from '../assets/icons/timber.png';
import lumber from '../assets/icons/lumber.png';
import wyrdwood from '../assets/icons/wyrdwoodplanks.png';
import ironwood from '../assets/icons/ironwoodplanks.png';
import './Page.scss';
import { woodworkingData } from '../utils/prices/woodworkingData';
import { useEffect } from 'react';
import { ingotToHightTier, ingotToNextLvl, ingotToTopTier, oreToIngot } from '../utils/prices/formulas';
import Tier1 from '../components/Tiers/Tier1';
import Tier2 from '../components/Tiers/Tier2';
import Tier3 from '../components/Tiers/Tier3';
import Tier4 from '../components/Tiers/Tier4';

const Woodworking = () => {

  const [type, setType] = useState('Timber');

  const [sandpaperPrice, setSandpaperPrice] = useState(Number(woodworkingData[4].cost));

  const [greenwoodPrice, setGreenwoodPrice] = useState(Number(woodworkingData[0].cost));
  const [agedwoodPrice, setAgedwoodPrice] = useState(Number(woodworkingData[1].cost));
  const [wyrdwoodPrice, setWyrdwoodPrice] = useState(Number(woodworkingData[2].cost));
  const [ironwoodPrice, setIronwoodPrice] = useState(Number(woodworkingData[3].cost));

  const [timberPrice, setTimberPrice] = useState(Number(woodworkingData[5].cost));
  const [lumberPrice, setLumberPrice] = useState(Number(woodworkingData[6].cost));
  const [wyrdplanksPrice, setWyrdplanksPrice] = useState(Number(woodworkingData[7].cost));
  const [ironplanksPrice, setIronplanksPrice] = useState(Number(woodworkingData[8].cost));

  const [itemsEquipped, setItemsEquipped] = useState((JSON.parse(localStorage.getItem('bonusItems')) || []).length);

  useEffect(() => {

    let sandpaperPrice = localStorage.getItem('woo5');

    let greenPrice = localStorage.getItem('woo1');
    let agedPrice = localStorage.getItem('woo2');
    let wyrdPrice = localStorage.getItem('woo3');
    let ironPrice =localStorage.getItem('woo4');

    let timberPrice = localStorage.getItem('woo5');
    let lumberPrice = localStorage.getItem('woo6');
    let wyrdPlanksPrice = localStorage.getItem('woo7');
    let ironPlanksPrice =localStorage.getItem('woo8');

    setGreenwoodPrice(Number(greenPrice));
    setAgedwoodPrice(Number(agedPrice));
    setWyrdwoodPrice(Number(wyrdPrice));
    setIronwoodPrice(Number(ironPrice));

    setTimberPrice(Number(timberPrice));
    setLumberPrice(Number(lumberPrice));
    setWyrdplanksPrice(Number(wyrdPlanksPrice));
    setIronplanksPrice(Number(ironPlanksPrice));

    setSandpaperPrice(Number(sandpaperPrice));

  },[])

  let greenToTimber = oreToIngot(4,greenwoodPrice,itemsEquipped);

  let timberToLumber = ingotToNextLvl(2,timberPrice, agedwoodPrice*2, sandpaperPrice, itemsEquipped);
  let greenToLumber = ingotToNextLvl(2,greenToTimber, agedwoodPrice*2, sandpaperPrice, itemsEquipped);

  let lumberToWyrdwoodPlanks = ingotToHightTier(lumberPrice, wyrdplanksPrice, 0, sandpaperPrice, itemsEquipped);
  let timberToWyrdwoodPlanks = ingotToHightTier(timberToLumber, wyrdplanksPrice, 0, sandpaperPrice, itemsEquipped);
  let greenToWyrdwoodPlanks = ingotToHightTier(greenToLumber, wyrdplanksPrice, 0, sandpaperPrice, itemsEquipped);

  let wyrdwoodToIron = ingotToTopTier(wyrdplanksPrice, ironwoodPrice, 0, sandpaperPrice, itemsEquipped, 1.13);
  let lumberToIron = ingotToTopTier(lumberToWyrdwoodPlanks, ironwoodPrice, 0, sandpaperPrice, itemsEquipped, 1.13);
  let timberToIron = ingotToTopTier(timberToWyrdwoodPlanks, ironwoodPrice, 0, sandpaperPrice, itemsEquipped, 1.13);
  let greenToIron = ingotToTopTier(greenToWyrdwoodPlanks, ironwoodPrice, 0, sandpaperPrice, itemsEquipped, 1.13);

  const icons = [
    timber,
    lumber,
    wyrdwood,
    ironwood
  ]

  const titles = [
    'Timber', 
    'Lumber', 
    'Wyrdwood planks', 
    'Ironwood planks'
  ]

  return (
    <div className='page'>
      <h2 className='page__title'>Woodworking</h2>
      <SettingsPanel icons={icons} toggleType={setType} titles={titles} type={type} />
      <p>{type}</p>
      {
        type === 'Timber' &&
        <Tier1 
          tpPrice={timberPrice}
          price1={greenToTimber}
          price1text={'- Timber from Green wood'}
        />
      }
      {
        type === 'Lumber' && 
        <Tier2 
          tpPrice={lumberPrice}
          price1={timberToLumber}
          price1text={'- Lumber from Timber'}
          price2={greenToLumber}
          price2text={'- Lumber from Green wood'}
        />
      }
      {
        type === 'Wyrdwood planks' && 
        <Tier3
          tpPrice={wyrdwoodPrice}
          price1={lumberToWyrdwoodPlanks}
          price1text={'- Wyrdwood planks from Lumber'}
          price2={timberToWyrdwoodPlanks}
          price2text={'- Wyrdwood planks from Timber'}
          price3={greenToWyrdwoodPlanks}
          price3text={'- Wyrdwood planks from Green wood'}
        />
      }
      {
        type === 'Ironwood planks' && 
        <Tier4 
          tpPrice={ironplanksPrice} 
          price1={wyrdwoodToIron}
          price1text={'- Ironwood planks from Wyrdwood planks'}
          price2={lumberToIron}
          price2text={'- Ironwood planks from Lumber'}
          price3={timberToIron}
          price3text={'- Ironwood planks from Timber'}
          price4={greenToIron}
          price4text={'- Ironwood planks from Green wood'}
        />
      }
    </div>
  )
}

export default Woodworking