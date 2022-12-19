import React, { useEffect, useState } from 'react';
import SettingsPanel from '../components/SettingsPanel/SettingsPanel';
import coarse from '../assets/icons/coarseleather.png';
import rugged from '../assets/icons/ruggedleather.png';
import layered from '../assets/icons/layeredleather.png';
import infused from '../assets/icons/infusedleather.png';
import runic from '../assets/icons/runicleather.png';
import './Page.scss';
import { leatherworkingData } from '../utils/prices/leatherworkingData';
import { ingotToHightTier, ingotToNextLvl, ingotToTopTier, oreToIngot, upToLegendaty } from '../utils/prices/formulas';
import Tier1 from '../components/Tiers/Tier1';
import Tier2 from '../components/Tiers/Tier2';
import Tier3 from '../components/Tiers/Tier3';
import Tier4 from '../components/Tiers/Tier4';
import TierLegendary from '../components/Tiers/TierLegendary';

const Leatherworking = () => {

  const [type, setType] = useState('Coarse');

  const [tanninPrice, setTanninPrice] = useState(Number(leatherworkingData[0].cost));

  const [rawhidePrice, setRawhidePrice] = useState(Number(leatherworkingData[1].cost));
  const [thickhidePrice, setThickPrice] = useState(Number(leatherworkingData[2].cost));
  const [ironPrice, setIronPrice] = useState(Number(leatherworkingData[3].cost));

  const [coarsePrice, setCoarsePrice] = useState(Number(leatherworkingData[4].cost));
  const [ruggedPrice, setRuggedPrice] = useState(Number(leatherworkingData[5].cost));
  const [layeredPrice, setLayeredPrice] = useState(Number(leatherworkingData[6].cost));
  const [infusedPrice, setInfusedPrice] = useState(Number(leatherworkingData[7].cost));
  const [runicPrice, setRunicPrice] = useState(Number(leatherworkingData[10].cost));

  const [smolderhidePrice, setSmolderhidePrice] = useState(Number(leatherworkingData[8].cost));
  const [scarhidePrice, setScarhidePrice] = useState(Number(leatherworkingData[9].cost));

  const [itemsEquipped, setItemsEquipped] = useState((JSON.parse(localStorage.getItem('bonusItems')) || []).length);

  const icons = [
    coarse,
    rugged,
    layered,
    infused,
    runic
  ]

  useEffect(() => {
    let rawhidePrice = localStorage.getItem('ltr1');
    let thickhidePrice = localStorage.getItem('ltr2');
    let ironPrice = localStorage.getItem('ltr3');

    let coarsePrice = localStorage.getItem('ltr4');
    let ruggedPrice = localStorage.getItem('ltr5');
    let layeredPrice = localStorage.getItem('ltr6');
    let infusedPrice = localStorage.getItem('ltr7');
    let runicPrice = localStorage.getItem('ltr10');

    let tanninPrice = localStorage.getItem('ltr0');
    let smolderhidePrice = localStorage.getItem('ltr8');
    let scarhidePrice = localStorage.getItem('ltr9');

    setRawhidePrice(Number(rawhidePrice));
    setThickPrice(Number(thickhidePrice));
    setIronPrice(Number(ironPrice));

    setCoarsePrice(Number(coarsePrice));
    setRuggedPrice(Number(ruggedPrice));
    setLayeredPrice(Number(layeredPrice));
    setInfusedPrice(Number(infusedPrice));
    setRunicPrice(Number(runicPrice));

    setTanninPrice(Number(tanninPrice));
    setSmolderhidePrice(Number(smolderhidePrice));
    setScarhidePrice(Number(scarhidePrice))
  },[])

  let rawhideToCoarseLeather = oreToIngot(4,rawhidePrice,itemsEquipped);

  let coarseLeatherToRuggedLeather = ingotToNextLvl(4,coarsePrice, 0, tanninPrice, itemsEquipped);
  let rawhideToRuggedLeather = ingotToNextLvl(4,rawhideToCoarseLeather, 0, tanninPrice, itemsEquipped);

  let ruggedLeatherToLayeredLeather = ingotToHightTier(ruggedPrice, thickhidePrice, 0, tanninPrice, itemsEquipped);
  let coarseLeatherToLayeredLeather = ingotToHightTier(coarseLeatherToRuggedLeather, thickhidePrice, 0, tanninPrice, itemsEquipped);
  let rawhideToLayeredLeather = ingotToHightTier(rawhideToRuggedLeather, thickhidePrice, 0, tanninPrice, itemsEquipped);

  let layeredLeatherToInfusedLeather = ingotToTopTier(layeredPrice, ironPrice, 0, tanninPrice, itemsEquipped, 1.13);
  let ruggedLeatherToInfusedLeather = ingotToTopTier(ruggedLeatherToLayeredLeather, ironPrice, 0, tanninPrice, itemsEquipped, 1.13);
  let coarseLeatherToInfusedLeather = ingotToTopTier(coarseLeatherToLayeredLeather, ironPrice, 0, tanninPrice, itemsEquipped, 1.13);
  let rawhideToInfusedLeather = ingotToTopTier(rawhideToLayeredLeather, ironPrice, 0, tanninPrice, itemsEquipped, 1.13);

  let infusedToRunic = upToLegendaty(infusedPrice, 0, tanninPrice, smolderhidePrice, scarhidePrice, itemsEquipped);
  let layeredToRunic = upToLegendaty(layeredLeatherToInfusedLeather, 0, tanninPrice, smolderhidePrice, scarhidePrice, itemsEquipped);
  let ruggedToRunic = upToLegendaty(ruggedLeatherToInfusedLeather, 0, tanninPrice, smolderhidePrice, scarhidePrice, itemsEquipped);
  let coarseToRunic = upToLegendaty(coarseLeatherToInfusedLeather, 0, tanninPrice, smolderhidePrice, scarhidePrice, itemsEquipped);
  let rawhideToRunic = upToLegendaty(rawhideToInfusedLeather, 0, tanninPrice, smolderhidePrice, scarhidePrice, itemsEquipped);

  const titles = [
    'Coarse', 
    'Rugged', 
    'Layered', 
    'Infused',
    'Runic'
  ]

  return (
    <div className='page'>
      <h2 className='page__title'>Leatherworking</h2>
      <SettingsPanel icons={icons} toggleType={setType} titles={titles} type={type} />
      <p>{type} Leather</p>
      {
        type === 'Coarse' &&
        <Tier1 
          tpPrice={coarsePrice}
          price1={rawhideToCoarseLeather}
          price1text={'- Coarse leather from Rawhide'}
        />
      }
      {
        type === 'Rugged' && 
        <Tier2 
          tpPrice={ruggedPrice}
          price1={coarseLeatherToRuggedLeather}
          price1text={'- Rugged Leather from Coarse leather'}
          price2={rawhideToRuggedLeather}
          price2text={'- Rugged Leather from Rawhide'}
        />
      }
      {
        type === 'Layered' && 
        <Tier3
          tpPrice={layeredPrice}
          price1={ruggedLeatherToLayeredLeather}
          price1text={'- Layered leather from Rugged leather'}
          price2={coarseLeatherToLayeredLeather}
          price2text={'- Layered leather from Coarse leather'}
          price3={rawhideToLayeredLeather}
          price3text={'- Layered leather from Rawhide'}
        />
      }
      {
        type === 'Infused' && 
        <Tier4 
          tpPrice={infusedPrice} 
          price1={layeredLeatherToInfusedLeather}
          price1text={'- Infused leather from Layered leather'}
          price2={ruggedLeatherToInfusedLeather}
          price2text={'- Infused leather from Rugged leather'}
          price3={coarseLeatherToInfusedLeather}
          price3text={'- Infused leather from Coarse leather'}
          price4={rawhideToInfusedLeather}
          price4text={'- Infused leather from Rawhide'}
        />
      }
      {
        type === 'Runic' && 
        <TierLegendary 
          tpPrice={runicPrice} 
          price1={infusedToRunic}
          price1text={'- Runic leather from Infused leather'}
          price2={layeredToRunic}
          price2text={'- Runic leather from Layered leather'}
          price3={ruggedToRunic}
          price3text={'- Runic leather from Rugged leather'}
          price4={coarseToRunic}
          price4text={'- Runic leather from Coarse leather'}
          price5={rawhideToRunic}
          price5text={'- Runic leather from Rawhide'}
        />
      }
    </div>
  )
}

export default Leatherworking