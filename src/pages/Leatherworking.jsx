import React, { useEffect, useState } from 'react';
import { ingotToHightTier, ingotToNextLvl, ingotToTopTier, oreToIngot, upToLegendaty } from '../utils/prices/formulas';
import { leatherworkingData } from '../utils/prices/leatherworkingData';
import SettingsPanel from '../components/SettingsPanel/SettingsPanel';
import SortedList from '../components/Tiers/SortedList';

import coarse from '../assets/icons/coarseleather.png';
import rugged from '../assets/icons/ruggedleather.png';
import layered from '../assets/icons/layeredleather.png';
import infused from '../assets/icons/infusedleather.png';
import runic from '../assets/icons/runicleather.png';

import './Page.scss';

const Leatherworking = () => {

  const [type, setType] = useState('Coarse');

  const [tanninPrice, setTanninPrice] = useState(Number(leatherworkingData[3].cost));

  const [rawhidePrice, setRawhidePrice] = useState(Number(leatherworkingData[0].cost));
  const [thickhidePrice, setThickPrice] = useState(Number(leatherworkingData[1].cost));
  const [ironPrice, setIronPrice] = useState(Number(leatherworkingData[2].cost));

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

    let coarsePrice = localStorage.getItem('ltr5');
    let ruggedPrice = localStorage.getItem('ltr6');
    let layeredPrice = localStorage.getItem('ltr7');
    let infusedPrice = localStorage.getItem('ltr8');
    let runicPrice = localStorage.getItem('ltr11');

    let tanninPrice = localStorage.getItem('ltr4');
    let smolderhidePrice = localStorage.getItem('ltr9');
    let scarhidePrice = localStorage.getItem('ltr10');

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
      <SettingsPanel icons={icons} toggleType={setType} titles={titles} type={type} />
      <p className='page__subtitle'>{type} Leather</p>
      {
        type === 'Coarse' &&
        <SortedList
          prices={[
            coarsePrice,
            rawhideToCoarseLeather
          ]}
          texts={[
            '- Price on trade post',
            '- Coarse leather from Rawhide'
          ]}
        />
      }
      {
        type === 'Rugged' && 
        <SortedList
          prices={[
            ruggedPrice,
            coarseLeatherToRuggedLeather,
            rawhideToRuggedLeather
          ]}
          texts={[
            '- Price on trade post',
            '- Rugged Leather from Coarse leather',
            '- Rugged Leather from Rawhide'
          ]}
        />
      }
      {
        type === 'Layered' && 
        <SortedList
          prices={[
            layeredPrice,
            ruggedLeatherToLayeredLeather,
            coarseLeatherToLayeredLeather,
            rawhideToLayeredLeather
          ]}
          texts={[
            '- Price on trade post',
            '- Layered leather from Rugged leather',
            '- Layered leather from Coarse leather',
            '- Layered leather from Rawhide'
          ]}
        />
      }
      {
        type === 'Infused' && 
        <SortedList
          prices={[
            infusedPrice,
            layeredLeatherToInfusedLeather,
            ruggedLeatherToInfusedLeather,
            coarseLeatherToInfusedLeather,
            rawhideToInfusedLeather
          ]}
          texts={[
            '- Price on trade post',
            '- Infused leather from Layered leather',
            '- Infused leather from Rugged leather',
            '- Infused leather from Coarse leather',
            '- Infused leather from Rawhide'
          ]}
        />
      }
      {
        type === 'Runic' && 
        <SortedList
          prices={[
            runicPrice,
            infusedToRunic,
            layeredToRunic,
            ruggedToRunic,
            coarseToRunic,
            rawhideToRunic
          ]}
          texts={[
            '- Price on trade post',
            '- Runic leather from Infused leather',
            '- Runic leather from Layered leather',
            '- Runic leather from Rugged leather',
            '- Runic leather from Coarse leather',
            '- Runic leather from Rawhide'
          ]}
        />
      }
    </div>
  )
}

export default Leatherworking